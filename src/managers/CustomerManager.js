import { getToken } from "../utils/getToken"

export const getAllCustomers = () => {
  return fetch("https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/customers", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
