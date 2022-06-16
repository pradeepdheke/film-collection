import React from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const SearchForm = () => {
  return (
    <div className='mt-5'>
        <h1 className='text-center'>My Film List</h1>
        <Form className='mt-5'>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control placeholder="Type Film Name..." />
        </Col>
        <Col>
          <Button variant = "primary">Search</Button>
        </Col>
      </Row>
    </Form>
    </div>
  )
}
