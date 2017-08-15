import React from "react"
import LoginForm from '../conponents/LoginForm'

class Login extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <LoginForm {...this.props} />
    )
  }
}

export default Login