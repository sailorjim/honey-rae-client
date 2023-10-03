import { getToken } from "../utils/getToken"


export const getTicketById = (id) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/Tickets/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addTicket = (ticket) => {
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/Tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(ticket)
  })
    .then(res => res.json())
}

export const getAllTickets = () => {
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/Tickets", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const searchTicketsByStatus = (status) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/Tickets?status=${status}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const updateTicket = (ticket) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/Tickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(ticket)
  })
}

export const deleteTicket = (id) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/Tickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}

