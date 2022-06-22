import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CustomCard } from './CustomCard';

export const MovieList = ({movieList, deleteMovie}) => {

const [displayList, setDisplayList] = useState([])
useEffect(() => {
    setDisplayList(movieList)
}, [movieList])

const filterMovie = (mood) => {

    if (mood === 'all') {
        return setDisplayList(movieList)
    }
    const tempArg = movieList.filter((item)=> item.mood === mood)
    setDisplayList(tempArg)
}

  return (
    <div>
        <Row>
            <Col className='d-flex justify-content-between'>
            <ButtonGroup aria-label="Basic example">
      <Button variant="success" onClick = {() => filterMovie('all')}>All</Button>
      <Button variant="primary" onClick = {() => filterMovie('happy')}>Happy</Button>
      <Button variant="secondary" onClick = {() => filterMovie('emotional')}>Emotional</Button>
    </ButtonGroup>
           
            <ButtonGroup aria-label="Basic example">
      <Button variant="primary">Grid</Button>
      <Button variant="secondary">List</Button>
      
    </ButtonGroup>
            </Col>
        </Row>
        <Row className='mt-3'>
            
         {  movieList.length <= 1 ? (

             <h4>{movieList.length} movie collected</h4>
         ) : (

             <h4>{movieList.length} movies collected</h4>
         ) }
            
        </Row>
        <Row className='mt-3'>
            <Col className= "d-flex flex-wrap justify-content-between">
                {displayList.map((item, i)=> (
            <CustomCard key = {i} movie={item} func = {deleteMovie}/>
                ))}
            
            </Col>
        </Row>
    </div>
  )
}
