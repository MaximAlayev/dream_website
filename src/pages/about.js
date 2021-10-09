import * as React from 'react'
import Navbar from '../components/navbar.js'
import useWindowDimensions from '../hooks/useWindowDimension' 
import growthImage from "../images/Growth.svg"

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



const AboutPage = () => {
  /*
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
              About us
              <br />
            </h1>
            <p style={descriptionStyle}>We are a 501(c)3 non-profit organization dedicated to empowering equitable STEM education through free programming classes and competitions. We aim to expose sotware engineering as a viable career path for highschool students and inspire them to continue their trajectory after graduation. Dream does all it can to give clarity and hope to students uncertain about their future.</p>
          </div>
          <img src= {growthImage} style= {landingImage}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage