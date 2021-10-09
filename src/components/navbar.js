import * as React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import cloud from '../images/cloud.png'

const desktopNavbar = {
  margin: 0,
  padding: 0,
  maxWidth: '75%',
  minWidth: 700,
  height: 350,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  float: 'right',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  backgroundImage: `url(${cloud})`,
  backgroundSize: 'contain',
  backgroundPosition: 'top right'
}


const mobileNavbar = {
  margin: 0,
  padding: 0,
  height: 250,
  width: '75%',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  float: 'right',
  backgroundImage: `url(${cloud})`,
  backgroundSize: 'contain',
  backgroundPosition: 'top right'
}

const navbarStyles = {
  color: "#6331d8",
  fontWeight: 'medium',
  paddingTop: 20,
  paddingLeft: 80,
  fontSize: 16,
  fontFamily: "Lato, sans-serif",
  textDecoration: 'none'
}


const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })

  if (isDesktopOrLaptop)
  {
    return (
      <div>
        <ul style = {desktopNavbar}>
          <Link style={navbarStyles} to="/schedule">Schedule</Link>
          <Link style={navbarStyles} to="/contact">Contact Us</Link>
        </ul>
      </div>
    )
  }
  else
  {
    //mobile navbar
    return (
      <div style = {mobileNavbar}>
        Mobile
      </div>
    )
  }
}
export default Navbar