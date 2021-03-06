import * as React from "react"
//import WebFont from 'webfontloader';
import { useEffect } from "react"
import Navbar from '../components/navbar' 
import Footer from '../components/footer.js' 
import LevelDisplay from '../components/leveldisplay.js' 
import useWindowDimensions from '../hooks/useWindowDimension' 
import moneybag from '../images/money-bag.png'
import graduation from '../images/graduation.png'
import house from '../images/house.png'
import manager from '../images/manager.png'
import treasure from '../images/treasure.png'
import { Button } from 'react-bootstrap'
import '../css/fonts.css'
import adventureMapImage from '../images/AdventureMap.svg'
import { navigate } from 'gatsby'

const pageStyles = {
  margin: 0,
  padding: 0,
  color: "#232129",
  fontFamily: "Lato, sans-serif",
  display: 'flex',
  flexDirection: 'column'
}

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

const landingHeader = {
  color: "#6331d8",
  fontWeight: "medium"
}

const landingImage = {
  width:'40%',
  paddingRight: '10%'
}

const firstWrapper = {
  paddingTop: 360,
  color: "#6331d8",
  fontWeight: "medium"
}


const headingAccentStyles = {
  paddingTop: 0,
  marginTop: 0,
  textAlign: 'center',
  color: "#6331d8",
  fontWeight: "medium",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 18,
  marginTop: 20,
  marginBottom: 0,
  lineHeight: 1.25,
  fontWeight: 'light'
}

const desktopReasonsToCode = {
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: 60,
  display: 'flex',
  flexDirection: 'row', 
  justifyContent: 'center',
  flexWrap: 'wrap'
}


const reasonWhyStyle = {
  width: 400,
  padding: 50
}

const reasonWhyImage = {
  flex: 1,
  height: 80,
  width: 80,
  resizeMode: 'contain'
}

const reasonImageWithReason = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  lineHeight: '100%',
}

const reasonWhyText = {
  display: 'inline-block',
  lineHeight: 'normal',
  verticalAlign: 'middle',
  paddingLeft: 15,
  width: '75%'
}


var reasonImages = [
  moneybag,
  graduation,
  house,
  manager,
  treasure  
]

const reasonsToCode = [
  {
   reason: 'High Salaries',
   imageId: 0,  
   description: 'New-grads at large tech companies are often offered compensations of over $150,000 per year.'
  },
  {
   reason: 'Limited Schooling',
   imageId: 1,  
   description: 'Study smart for 4 years, and get paid as much as a doctor or lawyer after.' 
  },
  {
   reason: 'Work From Home',
   imageId: 2,
   description: 'Skip driving to the office and work from the comfort of your own home.'
  },
  {
   reason: 'Transition to Management',
   imageId: 3,
   description: 'Showcase your ability to lead and rank up to roles like Senior Director and VP.'
  },
  {
   reason: 'Job Flexibility',
   imageId: 4,
   description: "Get promoted while changing jobs every 2-3 years and work in tech hubs across the country." 
  }
]


// markup
const IndexPage = () => {
  
  /*
  let WebFont
  if (typeof window !== 'undefined') {
    ;(async () => (WebFont = await import('webfontloader')))()
  }
  
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  }, []);
  */


  const { height } = useWindowDimensions();
  return (
    <div style={pageStyles}>
      <title>Dream Coding Institute</title>
      <div style={{height: height}}>
        <Navbar />
        <div style = {landingWrapper}>
          <div style={landingHeaderAndText}>
            <h1 style={landingHeader}>          
              Free Coding Classes
              <br />
            </h1>
          <p style={descriptionStyle}>By going through our 4 level curriculum, you'll learn to code confidently, develop intricate projects, and be prepared for the technical interview for software engineering internships.</p>
          </div>
          <img src= {adventureMapImage} style= {landingImage}/>
        </div>
      </div>

      <div style = {{displayjustifyContent: 'center'}}>
        <h1 style={headingAccentStyles}>Why Software Engineering?</h1>
        <br />
        <div style={desktopReasonsToCode}>
          {reasonsToCode.map(reason => (
            <div style={reasonWhyStyle}>
              <div style={reasonImageWithReason}>
                <img style={reasonWhyImage} src={reasonImages[reason.imageId]} alt=""/>
                <h2 style={reasonWhyText}> {reason.reason} </h2>
              </div>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{paddingTop: 200}}>
      <LevelDisplay/>
      </div>
      <Button className="btn-pbt" onClick={() => navigate("/enroll")} style = {{textAlign: 'center', padding: 0, width: 100, height: 50, alignSelf: 'center', marginTop: 20, marginBottom: 100}}>
        Enroll Now
      </Button>

      <Footer/>
    </div>
  )
}

export default IndexPage