import * as React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import cloud from '../images/cloud.png'

const desktopNavbar = {
  margin: 0,
  padding: 0,
  maxWidth: '75%',
  minWidth: 525,
  height: 250,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  float: 'right',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  backgroundImage: `url(${cloud})`
}

const mobileNavbar = {
  margin: 0,
  padding: 0,
  height: 250,
  width: '75%',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  float: 'right',
  backgroundImage: `url(${cloud})`
}

const navbarStyles = {
  color: "#6331d8",
  fontWeight: 'medium',
  paddingTop: 35,
  paddingLeft: 65,
  fontSize: 16,
  fontFamily: "Montserrat, sans-serif",
  textDecoration: 'none'
}


const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  if (isDesktopOrLaptop)
  {
    return (
      <div>
        <ul style = {desktopNavbar}>
          <Link style={navbarStyles} to="/about">About</Link>
          <Link style={navbarStyles} to="/classes">Classes</Link>
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
      </div>
    )
  }
}
export default Navbar