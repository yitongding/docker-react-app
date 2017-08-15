import React from "react"

// import Signin from './containers/Signin'
import Login from './containers/Login'
import UserList from './containers/UserList'

const UserPage = () => {
  return (
    <div>
      <Login />
      <UserList />
    </div>
  )
}

export default UserPage