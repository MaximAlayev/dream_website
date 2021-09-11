import * as React from 'react'
import WebFont from 'webfontloader';
import { useEffect, Button } from "react"
import Navbar from '../components/navbar.js'

const pageStyles = {
  marginTop: 0,
  paddingTop: 0,
  paddingLeft: '10%',
  color: "#6331d8",
  fontFamily: "Montserrat, sans-serif",
  display: 'flex',
  flexDirection: 'column',
}

const headingAccentStyles = {
  color: "#6331d8",
  fontWeight: "medium"
}

const firstWrapper = {
  paddingTop: 250,
  color: "#6331d8",
  fontWeight: "medium"
}

const descriptionStyle = {
  width: '50%',
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
  fontWeight: 'light'
}


const AboutPage = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  }, []);


  return (
    <main style={pageStyles}>
      <Navbar/>
      <title>Dream Coding Institute</title>
      <h1 style={firstWrapper}>          
        About Us
        <br />
      </h1>
      <p style={descriptionStyle}>We are a 501(c)3 non-profit organization dedicated to empowering equitable STEM education through free programming classes and competitions.</p>
    </main>
  )
}

export default AboutPage