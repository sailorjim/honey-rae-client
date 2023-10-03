import { getToken } from "../utils/getToken"

export const getAllCustomers = () => {
  return fetch("https://honey-rae-98464e3a878d.herokuapp.com/customers", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
