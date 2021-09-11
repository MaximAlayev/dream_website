import * as React from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/buttons.css'

const headingAccentStyles = {
  paddingTop: 0,
  marginTop: 0,
  color: "#6331d8",
  fontWeight: "medium",
  textAlign: 'center'
}

const levelShowcaseWrapper = {
  paddingTop: 200,
  height: 700,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column'
}


const levelButtonArrangementStyle = {
  paddingTop: 50,
  marginLeft: '30%',
  marginRight: '30%',
  width: '40%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}

const levelDisplayStyle = {
  fontSize: 18,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '80%',
  width: '80%',
  backgroundColor: '#dddddd',
  marginLeft: '10%',
  marginRight: '10%',
}


const levels = [
  {
    experienceLevel: "No experience required",
    description: "In level 1, you'll get you comfortable with Python syntax and complete several small projects.",
  },
  {
    experienceLevel: "Basic Python understanding required",
    description: "In level 2, you'll develop complex Python projects, learn advanced programming techniques in Python, and learn the fundamentals of Java.",
    //Students can learn C# instead of Java honestly (Because XAML is pretty easy to pickup)
  },
  {
    experienceLevel: "Advanced Python understanding required",
    description: "In level 3, you'll learn various algorithms and programming strategies to do well in the technical portion software engineering interviews. You'll have worked on various programming assigments that test your abiltiy to put software architecture into practice.",
  },
  {
    experienceLevel: "Solid understanding of algorithms, data structures, and dynamic programming required",
    description: "In level 4, you'll learn several advanced computer science topics that will come up in your university career, and be ready for both the behavioral and technical portions for interviews."
  }
]




const LevelDisplay = () => {

  const [levelSelected, setLevel] = useState(1);

  const handleChange = (val) => {
    setLevel(val)
    console.log(levels[val - 1].level)
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })


  if (isDesktopOrLaptop)
  {
    return (
      <div style={levelShowcaseWrapper}>  
        <h1 style={headingAccentStyles}>
          What We Offer
        </h1>
        <ToggleButtonGroup type="radio" name='levelSelected' value={levelSelected} onChange={handleChange} style={levelButtonArrangementStyle}>
          <ToggleButton id="1" value={1} className="btn-pbt">Level 1</ToggleButton>
          <ToggleButton id="2" value={2} className="btn-pbt">Level 2</ToggleButton>
          <ToggleButton id="3" value={3} className="btn-pbt">Level 3</ToggleButton>
          <ToggleButton id="4" value={4} className="btn-pbt">Level 4</ToggleButton>
        </ToggleButtonGroup>
        <div style={levelDisplayStyle}>
          <p style= {{paddingTop: 15, fontWeight: 'bold'}}>Experience Level</p>
          <div style={{paddingLeft: '25%', paddingRight:'25%'}}> 
            <p >{levels[levelSelected - 1].experienceLevel}</p>
          </div>
            <p style= {{paddingTop: 15, fontWeight: 'bold'}}>What You'll Learn</p>
          <div style={{paddingLeft: '25%', paddingRight:'25%'}}> 
            <p >{levels[levelSelected - 1].description}</p>
          </div>
        </div>
      </div>
    )
  }
  else
  {
    //mobile navbar
    return (
      <p>:)</p>
    )
  }
}
export default LevelDisplay
    
    
    
    
    