import { getToken } from "../utils/getToken"

export const getEmployeeById = (id) => {
  return fetch(`https://6509f43e18794a397f56ccd6--honeyrae.netlify.app/employees/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addEmployee = (employee) => {
  return fetch("https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(employee)
  })
    .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch("https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/employees", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
