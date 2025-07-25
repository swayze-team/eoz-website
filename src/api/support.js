// API pour gérer les tickets de support
export const createSupportTicket = async (ticketData) => {
  try {
    const response = await fetch('/api/bot/init/v3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_SECRET}`
      },
      body: JSON.stringify({
        type: 'support_ticket',
        data: ticketData
      })
    })

    if (!response.ok) {
      throw new Error('Erreur lors de la création du ticket')
    }

    return await response.json()
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

export const getTicketStatus = async (ticketId) => {
  try {
    const response = await fetch(`/api/tickets/${ticketId}`)
    
    if (!response.ok) {
      throw new Error('Ticket non trouvé')
    }

    return await response.json()
  } catch (error) {
    console.error('Erreur API:', error)
    throw error
  }
}

