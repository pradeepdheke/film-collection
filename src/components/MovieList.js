import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CustomCard } from './CustomCard';

export const MovieList = () => {
  return (
    <div>
        <Row>
            <Col className='d-flex justify-content-between'>
            <ButtonGroup aria-label="Basic example">
      <Button variant="success">All</Button>
      <Button variant="primary">Happy</Button>
      <Button variant="secondary">Emotional</Button>
    </ButtonGroup>
           
            <ButtonGroup aria-label="Basic example">
      <Button variant="primary">Grid</Button>
      <Button variant="secondary">List</Button>
      
    </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col className= "d-flex justify-content-between flex-wrap">
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            <CustomCard/>
            </Col>
        </Row>
    </div>
  )
}
