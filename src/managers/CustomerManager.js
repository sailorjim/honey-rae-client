import { getToken } from "../utils/getToken"

export const getAllCustomers = () => {
  return fetch("https://honeyrae-server-7fafc8315c00.herokuapp.com/customers", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
