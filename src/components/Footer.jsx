import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='bg-dark py-2 container-fluid '>
      <Row className='p-5'>
        <Col sm={12} md={5}>
          <h3>ToDo Mate</h3>
          <p style={{textAlign:'justify'}}>
          Stay organized and get more done with our easy-to-use task manager, designed to help you streamline your workflow effortlessly.Easily manage your tasks, set priorities, and track progress with our intuitive task manager built for productivity.</p>        
</Col>

        <Col sm={12} md={2}>
        <h3>Links</h3>
        <div className='d-flex flex-column info'>
          
          <Link to={`/`}>Landing</Link>
          <Link to={'/home'}>Home</Link>
        </div>
        </Col>
        
        <Col sm={12} md={5}>
          <h3>Feedback</h3>
          <textarea name="" id="" className='form-control'></textarea>
          <button className='btn btn-info mt-4'>Send</button>
        </Col>
      </Row>

    </div>   
    </>
  )
}

export default Footer