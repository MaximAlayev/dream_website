import * as React from "react"
import Navbar from '../components/navbar' 
import Footer from '../components/footer.js' 
import LevelDisplay from '../components/leveldisplay.js' 
import useWindowDimensions from '../hooks/useWindowDimension' 
import '../css/fonts.css'
import "../styles/styles.js"
import eventImage from "../images/Events.svg"
import { navigate } from 'gatsby'
import { Button } from 'react-bootstrap'


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

const textColumn = {
  textDecoration: 'none', 
  listStyle: "none", 
  textAlign: 'left', 
}

const SchedulePage = () => {
  const { height } = useWindowDimensions();

  return (
    <div style={pageStyles}>
      <title>Dream Coding Institute</title>
      <div style={{height: height}}>
        <Navbar />
        <div style = {landingWrapper}>
          <div style={landingHeaderAndText}>
            <h1 style={landingHeader}>          
              Classes
              <br />
            </h1>
            <p style={descriptionStyle}>We have something for everyone with our 4 levels of courses. Enrollment is rolling and completely free. Feel free to contact us if you're unsure which level to join.</p>
          </div>
          <img src= {eventImage} style= {landingImage}/>
        </div>
      </div>
      <LevelDisplay/>
      <Button className="btn-pbt" onClick={() => navigate("/enroll")} style = {{textAlign: 'center', padding: 0, width: 100, height: 50, alignSelf: 'center', marginTop: 20, marginBottom: 100}}>
        Enroll Now
      </Button>
      <div style={whiteBlock}>
        <h1 style={{width: 500, textAlign: 'center'}}>Future Sessions</h1>
        <div style={{width: 500, display: 'flex', justifyContent: 'center'}}>
          <ul style={textColumn}>
            <li>Level 1: October 11 - December 17</li> 
            <li>Level 1: January 3 - March 11</li> 
            <li>Level 2: January 3 - March 11</li> 
            <li>Level 1: March 13 - May 20</li>
            <li>Level 2: March 13 - May 20</li>
            <li>Level 3: March 13 - May 20</li>
            <li>Level 1: May 23 - July 29</li>
            <li>Level 2: May 23 - July 29</li>
            <li>Level 3: May 23 - July 29</li>
            <li>Level 4: May 23 - July 29</li>
          </ul>
        </div>
      </div>
      <div style={greyBlock}>
        <h1 style={{width: 500, textAlign: 'center'}}>Ongoing Sessions</h1>
        <div style={{width: 500, display: 'flex', justifyContent: 'center'}}>
          <ul style={textColumn}>
            <li>No Ongoing Sessions</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default SchedulePage