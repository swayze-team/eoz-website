// API pour gérer les interactions avec Discord
export const getDiscordMembers = async () => {
  try {
    const response = await fetch('/api/discord/members')
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des membres')
    }

    return await response.json()
  } catch (error) {
    console.error('Erreur API Discord:', error)
    throw error
  }
}

export const getServerStats = async () => {
  try {
    const response = await fetch('/api/discord/stats')
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des statistiques')
    }

    return await response.json()
  } catch (error) {
    console.error('Erreur API Discord:', error)
    throw error
  }
}

