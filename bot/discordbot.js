import { Client, GatewayIntentBits, EmbedBuilder, ChannelType } from 'discord.js'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ]
})

const API_URL = process.env.API_URL || 'http://localhost:3000'
const API_SECRET = process.env.API_SECRET
const SUPPORT_CHANNEL_ID = process.env.DISCORD_SUPPORT_CHANNEL_ID
const GUILD_ID = process.env.DISCORD_SERVER_ID

// Map pour stocker les tickets actifs
const activeTickets = new Map()

client.once('ready', async () => {
  console.log(`✅ Bot connecté en tant que ${client.user.tag}`)
  
  // Envoyer les données initiales du serveur
  await sendServerData()
  
  // Mettre à jour les données toutes les 5 minutes
  setInterval(async () => {
    await sendServerData()
  }, 5 * 60 * 1000)
})

// Fonction pour envoyer les données du serveur à l'API
async function sendServerData() {
  try {
    const guild = client.guilds.cache.get(GUILD_ID)
    if (!guild) return

    await guild.members.fetch()
    
    const members = guild.members.cache
    const onlineMembers = members.filter(member => 
      member.presence?.status === 'online' || 
      member.presence?.status === 'idle' ||
      member.presence?.status === 'dnd'
    )

    const memberData = onlineMembers.map(member => ({
      id: member.id,
      username: member.user.username,
      displayName: member.displayName,
      avatar: member.user.displayAvatarURL({ size: 64 }),
      status: member.presence?.status || 'offline',
      joinedAt: member.joinedAt
    })).slice(0, 10) // Limiter à 10 membres pour l'affichage

    const serverData = {
      type: 'server_update',
      data: {
        memberCount: members.size,
        onlineCount: onlineMembers.size,
        members: memberData,
        timestamp: new Date().toISOString()
      }
    }

    await sendToAPI(serverData)
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi des données du serveur:', error)
  }
}

// Fonction pour envoyer des données à l'API du site
async function sendToAPI(data) {
  try {
    const response = await fetch(`${API_URL}/api/bot/init/v3`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_SECRET}`
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`)
    }

    console.log('✅ Données envoyées à l\'API avec succès')
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi à l\'API:', error)
  }
}

// Gérer les nouveaux tickets de support
client.on('messageCreate', async (message) => {
  // Ignorer les messages du bot
  if (message.author.bot) return

  // Vérifier si c'est dans le canal de support
  if (message.channel.id === SUPPORT_CHANNEL_ID) {
    // Vérifier si c'est une réponse à un ticket
    const ticketMatch = message.content.match(/^!reply\s+([A-Z0-9-]+)\s+(.+)$/i)
    
    if (ticketMatch) {
      const [, ticketId, response] = ticketMatch
      
      // Envoyer la réponse à l'API
      const responseData = {
        type: 'support_response',
        data: {
          ticketId,
          response,
          staffMember: {
            id: message.author.id,
            username: message.author.username,
            avatar: message.author.displayAvatarURL({ size: 64 })
          },
          timestamp: new Date().toISOString()
        }
      }

      await sendToAPI(responseData)

      // Confirmer l'envoi
      const embed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Réponse envoyée')
        .setDescription(`Réponse envoyée pour le ticket: **${ticketId}**`)
        .addFields({ name: 'Réponse', value: response })
        .setTimestamp()

      await message.reply({ embeds: [embed] })
    }
  }
})

// Gérer les tickets reçus de l'API (via webhook ou autre méthode)
export async function handleSupportTicket(ticketData) {
  try {
    const supportChannel = client.channels.cache.get(SUPPORT_CHANNEL_ID)
    if (!supportChannel) {
      throw new Error('Canal de support non trouvé')
    }

    const embed = new EmbedBuilder()
      .setColor('#ff9500')
      .setTitle('🎫 Nouveau Ticket de Support')
      .setDescription('Un nouveau ticket de support a été créé')
      .addFields(
        { name: '🆔 ID du Ticket', value: ticketData.ticketId, inline: true },
        { name: '👤 Nom', value: ticketData.name, inline: true },
        { name: '📧 Email', value: ticketData.email, inline: true },
        { name: '📋 Sujet', value: ticketData.subject, inline: false },
        { name: '⚠️ Priorité', value: ticketData.priority.toUpperCase(), inline: true },
        { name: '💬 Message', value: ticketData.message.length > 1000 
          ? ticketData.message.substring(0, 1000) + '...' 
          : ticketData.message, inline: false }
      )
      .setFooter({ text: `Pour répondre: !reply ${ticketData.ticketId} [votre réponse]` })
      .setTimestamp()

    await supportChannel.send({ embeds: [embed] })

    // Stocker le ticket actif
    activeTickets.set(ticketData.ticketId, {
      ...ticketData,
      status: 'open',
      createdAt: new Date().toISOString()
    })

    console.log(`✅ Ticket ${ticketData.ticketId} créé avec succès`)
  } catch (error) {
    console.error('❌ Erreur lors de la création du ticket:', error)
    throw error
  }
}

// Commandes slash (optionnel)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'stats') {
    const guild = interaction.guild
    await guild.members.fetch()
    
    const members = guild.members.cache
    const onlineMembers = members.filter(member => 
      member.presence?.status === 'online' || 
      member.presence?.status === 'idle' ||
      member.presence?.status === 'dnd'
    )

    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle('📊 Statistiques du Serveur EOZ')
      .addFields(
        { name: '👥 Membres Total', value: members.size.toString(), inline: true },
        { name: '🟢 En Ligne', value: onlineMembers.size.toString(), inline: true },
        { name: '🎫 Tickets Actifs', value: activeTickets.size.toString(), inline: true }
      )
      .setTimestamp()

    await interaction.reply({ embeds: [embed] })
  }
})

// Gestion des erreurs
client.on('error', (error) => {
  console.error('❌ Erreur Discord:', error)
})

process.on('unhandledRejection', (error) => {
  console.error('❌ Erreur non gérée:', error)
})

// Connexion du bot
client.login(process.env.DISCORD_BOT_TOKEN)

export { client, handleSupportTicket }

