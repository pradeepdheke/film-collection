import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CustomCard = ({movie = {}}) => {
    const {Title, Poster, imdbRating, Year} = movie
  return (
    <div className='mt-3'>
        <Card style={{ width: '18rem' }} className="mt-3">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        
        <Card.Title>Rating: {imdbRating}</Card.Title>
        <Card.Title>Year Released: {Year}</Card.Title>
        
        <div className="d-flex justify-content-between mt-2">
            <Button variant='primary'>Happy</Button>
            <Button variant='warning'>Emotional</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
