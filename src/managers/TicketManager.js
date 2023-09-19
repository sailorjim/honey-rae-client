import { getToken } from "../utils/getToken"

export const getTicketById = (id) => {
  return fetch(`https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addTicket = (ticket) => {
  return fetch("https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets", {
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
  return fetch("https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const searchTicketsByStatus = (status) => {
  return fetch(`https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets?status=${status}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const updateTicket = (ticket) => {
  return fetch(`https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(ticket)
  })
}

export const deleteTicket = (id) => {
  return fetch(`https://honeyrae-server-7fafc8315c00.herokuapp.com/serviceTickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}

