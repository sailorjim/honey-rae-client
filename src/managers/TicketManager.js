import { getToken } from "../utils/getToken"


export const getTicketById = (id) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addTicket = (ticket) => {
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets", {
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
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const searchTicketsByStatus = (status) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets?status=${status}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const updateTicket = (ticket) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(ticket)
  })
}

export const deleteTicket = (id) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/ServiceTickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}

