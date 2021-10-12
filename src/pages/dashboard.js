import * as React from 'react'
import { useState } from 'react'
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Axios from 'axios'
import { Button } from 'react-bootstrap'
import { navigate } from 'gatsby'

const DashboardPage = () => {
  const [userRole, setUserRole] = useState("standard")

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  let user = getProfile()

  if (user.sub)
  {
  Axios.get(`${process.env.GATSBY_API_ID}/getUserRole`, {
      params : {
        user: user.sub
      }
    })
    .then((res) => {
      setUserRole(res.data.results[0].role);
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  if (userRole === 'admin')
  {
    return (
      <>
        <h1>You're in.</h1>
        <Button onClick={() => navigate('/dashboard/changeSchedule')} />
      </>
    )
  }
  else
  {
    return(
      <>
        <h1> You're are not authenticated to access this resource. </h1>
      </>
    )
  }
}

export default DashboardPage