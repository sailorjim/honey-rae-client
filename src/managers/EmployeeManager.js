import { getToken } from "../utils/getToken"

export const getEmployeeById = (id) => {
  return fetch(`https://honey-rae-98464e3a878d.herokuapp.com/employees/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}

export const addEmployee = (employee) => {
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/employees", {
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
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/employees", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
