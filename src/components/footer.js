import * as React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

const desktopFooter = {
  margin: 0,
  padding: 0,
  height: 100,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: "#6331d8",
  alignItems: 'center',
  color: 'white'
}


const navbarStyles = {
  padding: 0,
  margin: 0,
  color: 'white',
  fontWeight: 'medium',
  fontSize: 16,
  fontFamily: "Lato, sans-serif",
  textDecoration: 'none'
}


const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })

  if (isDesktopOrLaptop)
  {
    return (
      <div style={desktopFooter}>
        <ul style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingLeft: 45}}>
          <Link style={navbarStyles} to="/about">About</Link>
          <Link style={navbarStyles} to="/classes">Classes</Link>
          <Link style={navbarStyles} to="/contact">Contact Us</Link>
        </ul>
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingRight: 45}}>
          <a style={navbarStyles} href="https://www.flaticon.com/" title="Flat Icons">
            Icons by Flat Icons
          </a> 
        </div>
      </div>
    )
  }
  else
  {
    //mobile navbar
    return (
      <div style={desktopFooter}>
        <ul style = {{display: 'flex', flexDirection: 'column', padding: 45}}>
          <Link style={navbarStyles} to="/about">About</Link>
          <Link style={navbarStyles} to="/classes">Classes</Link>
          <Link style={navbarStyles} to="/contact">Contact Us</Link>
        </ul>
        <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingRight: 45}}>
          <a style={navbarStyles} href="https://www.flaticon.com/" title="Flat Icons">
            Icons by Flat Icons
          </a> 
        </div>
      </div>
    )
  }
}
export default Footer