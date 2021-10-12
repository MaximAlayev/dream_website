import * as React from 'react'
import Navbar from '../components/navbar.js'
import useWindowDimensions from '../hooks/useWindowDimension' 
import pitchingImage from "../images/Pitching.svg"
import { Button } from 'react-bootstrap'
import '../css/buttons.css'
import { navigate } from 'gatsby'

const landingWrapper = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

const landingHeaderAndText = {
  width: '50%',
  paddingLeft: '10%'
}

const landingImage = {
  width:'40%',
  paddingRight: '10%'
}

const landingHeader = {
  color: "#6331d8",
  fontWeight: "medium"
}

const pageStyles = {
  margin: 0,
  padding: 0,
  color: "#232129",
  fontFamily: "Lato, sans-serif",
  display: 'flex',
  flexDirection: 'column'
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 18,
  marginTop: 20,
  marginBottom: 0,
  lineHeight: 1.25,
  fontWeight: 'light'
}

const greyBlock = {
  fontSize: 18,
  textAlign: 'left',
  backgroundColor: "#f5f5f5",
  paddingTop: 100,
  paddingBottom: 100,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}

const whiteBlock = {
  fontSize: 18,
  textAlign: 'left',
  display: 'flex',
  paddingTop: 100,
  paddingBottom: 100,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}

const headingAccentStyles = {
  paddingTop: 0,
  marginTop: 0,
  textAlign: 'center',
  color: "#6331d8",
  fontWeight: "medium",
}

const textColumn = {
  textDecoration: 'none', 
  listStyle: "none", 
  paddingLeft: 0, 
  textAlign: 'left', 
}

const ContactPage = () => {
  const { height } = useWindowDimensions();
  

  return (
    <div style={pageStyles}>
      <title>Dream Coding Institute</title>
      <div style={{height: height}}>
        <Navbar />
        <div style = {landingWrapper}>
          <div style={landingHeaderAndText}>
            <h1 style={landingHeader}>          
              About us
              <br />
            </h1>
            <p style={descriptionStyle}>We are a 501(c)3 non-profit organization dedicated to empowering equitable STEM education through free programming classes and competitions. We aim to expose sotware engineering as a viable career path for highschool students and inspire them to continue their trajectory after graduation. Dream does all it can to give clarity and hope to students uncertain about their future.</p>
          </div>
          <img src= {pitchingImage} style= {landingImage} alt= "Get in contact with us"/>
        </div>
      </div>
      <div style = {greyBlock}>
          <h1 style={{width: 500, textAlign: 'center'}}>Schools</h1>
          <div style={{width: 500, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <p style={textColumn}> 
              Reach out to us and we'll set up an appointment to see what we can provide for your students and how we can inspire them to be software engineers. With a career in mind, students are more driven to take AP classes, perform well in standardized testing, graduate, and attend university/college.
            </p>
            <div style={{ paddingTop: '4%', display: 'flex', justifyContent: 'center'}}>
              <Button className="btn-pbt" onClick={() => window.window.location.href = 'mailto:dreamcodingrecruiting@gmail.com?subject=[School Inquiry]'}>
                Contact Directly
              </Button>
            </div>
          </div>
      </div>
      <div style = {whiteBlock}>
          <h1 style={{width: 500, textAlign: 'center'}}>Volunteers</h1>
          <div style={{width: 500, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <p style={textColumn}> 
              Interested in leadership positions or volunteer hours? We are a rapidly growing non-profit and aiming to hire the best candidates. Apply using the link below and we'll be in contact with you.
            </p>
            <div style={{ paddingTop: '4%', display: 'flex', justifyContent: 'center'}}>
              <Button className="btn-pbt" onClick={() => navigate("/apply")}>
                Apply
              </Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactPage