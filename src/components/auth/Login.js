import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"
import "./Auth.css"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      email: username.current.value,
      password: password.current.value
    }
    loginUser(user)
      .then(authInfo => {
        if (authInfo.valid) {
          localStorage.setItem("honeyrae", JSON.stringify(authInfo))
          navigate("/")
        } else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main className="container--login">
      <img src="/logo.svg" />
      <img src="/illustration.svg" />
      
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
            <h1>Worker bees repairing your electronics on the internet</h1>
            <h2>Schedule an appointment</h2>
            <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
            <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
            <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
        </form>
      </section>

      Worker bees repairing your electronics on the internet
      Schedule an appointment
      Username
      Password
      CREATE AN ACCOUNT
      Sign in

      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}
