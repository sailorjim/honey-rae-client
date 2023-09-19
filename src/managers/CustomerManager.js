import { getToken } from "../utils/getToken"

export const getAllCustomers = () => {
  return fetch("https://6509f43e18794a397f56ccd6--honeyrae.netlify.app/customers", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
