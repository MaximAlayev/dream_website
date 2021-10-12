import * as React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar.js'
import useWindowDimensions from '../hooks/useWindowDimension' 
import { Form, Button, Row, Col, Alert} from 'react-bootstrap'
import '../css/buttons.css'
import Axios from 'axios'

const API_ID = 'http://localhost:5000'

const pageStyles = {
  margin: 0,
  padding: 0,
  color: "#232129",
  fontFamily: "Lato, sans-serif",
  display: 'flex',
  flexDirection: 'column'
}

const applyWrapper = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  textAlign: 'center',
  paddingBottom: '3%'
}

const headingAccentStyles = {
  paddingTop: 0,
  marginTop: 0,
  textAlign: 'center',
  color: "#6331d8",
  fontWeight: "medium",
}

const formStyle = {
  paddingTop: '3%',
  paddingBottom: '3%',
  backgroundColor: '#f5f5f5',
  paddingLeft: '25%',
  paddingRight: '25%'
}

const ApplyPage = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [validated, setValidated] = useState(false);
  const { height } = useWindowDimensions();

  const [firstName, setFirstName] = useState(""),
      onFirstNameChange = (e) => {console.log(e.firstName)}
      //onFirstNameChange = ({target:{firstName}}) => {console.log(firstName); setFirstName(firstName)};

  const [lastName, setLastName] = useState(""),
        onLastNameChange = ({target:{lastName}}) => setLastName(lastName);

  const [email, setEmail] = useState(""),
        onEmailChange = ({target:{email}}) => setEmail(email);

  const [phone, setPhone] = useState(""),
        onPhoneChange = ({target:{phone}}) => setPhone(phone);

  const [resume, setResume] = useState(),
        onResumeChange = ({target:{resume}}) => setResume(resume);

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    }
    else
    {
      var formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('resume', resume);

      for (var p of formData) {
        console.log(p);
      }

      Axios.post(`${API_ID}/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          if (res.data !== "Failure")
          {
            console.log(res);
            setShowSuccess(true)
            setFirstName();
            setLastName();
            setEmail();
            setPhone();
            setResume();
            e.target.reset();
            setValidated(false);
          }
          else
          {
            setShowError(true);
          }
        })
        .catch((err) => {
          console.log(err)
          setShowError(true)
        });

      
    }

  }


  return (
    <div style={pageStyles}>
      <title>Dream Coding Institute</title>
      <div style={{height: height}}>
        <Navbar/>
        <div style={applyWrapper}> 
          <h1 style={headingAccentStyles}> Apply </h1>
        </div>
        <Form style = {formStyle} noValidate validated={validated} onSubmit={onFormSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="volFirstName">
            <Form.Label column sm="2">First Name</Form.Label>
            <Col sm='10'>
              <Form.Control required type="firstName" onChange = {(e) => setFirstName(e.target.value)}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="volLastName" >
            <Form.Label column sm="2">Last Name</Form.Label>
            <Col sm='10'>
              <Form.Control required type="lastName" onChange={(e) => setLastName(e.target.value)}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="volEmail" >
            <Form.Label column sm="2">Email</Form.Label>
            <Col sm='10'>
              <Form.Control required type="email" onChange={(e) => setEmail(e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="volPhone" >
            <Form.Label column sm="2">Phone</Form.Label>
            <Col sm='10'>
              <Form.Control required type="phone" onChange={(e) => setPhone(e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row}controlId="volResume" className="mb-3">
            <Form.Label column sm="2">Resume/CV</Form.Label>
            <Col sm='10'> 
              <Form.Control required type="file" onChange={(e) => setResume(e.target.files[0])}/>
            </Col>
          </Form.Group>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="submit" className='btn-pbt'>
              Submit
            </Button>
          </div>
        </Form>
        <Alert show = {showSuccess} variant="success"  onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading> Application Submitted </Alert.Heading>
          <p>
            Thank you for your interest! Your application has been submitted and we'll be in contact with you.
          </p>
        </Alert>
        <Alert show = {showError} variant="danger"  onClose={() => setShowError(false)} dismissible>
          <Alert.Heading> Application Not Submitted </Alert.Heading>
          <p>
            It looks like something went wrong. Please refresh the page and resubmit your application.
          </p>
        </Alert>
      </div>
    </div>
  )
}

export default ApplyPage