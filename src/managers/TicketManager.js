import { getToken } from "../utils/getToken"

export const getTicketById = (id) => {
  return fetch(`http://localhost:8000/serviceTickets/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addTicket = (ticket) => {
  return fetch("http://localhost:8000/serviceTickets", {
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
  return fetch("http://localhost:8000/serviceTickets", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const searchTicketsByStatus = (status) => {
  return fetch(`http://localhost:8000/serviceTickets?status=${status}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const updateTicket = (ticket) => {
  return fetch(`https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(ticket)
  })
}

export const deleteTicket = (id) => {
  return fetch(`https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/serviceTickets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}

