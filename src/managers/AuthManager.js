export const loginUser = (user) => {
  return fetch("https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
}

export const registerUser = (user) => {
  return fetch("https://6509f518ec73fb362e0a7354--honeyrae.netlify.app/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
}
