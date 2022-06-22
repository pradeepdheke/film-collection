import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CustomList = ({movie = {}, func, inSearchForm}) => {
    const {Title, Poster, imdbRating, Year, Plot} = movie
  return (
    
        <Card style={{ width: '100%' }} className="mt-3 d-flex flex-row justify-content-between">
      <div style={{width:"150px"}}>

      <Card.Img variant="top" src={Poster} style = {{width: "150px"}} />
      </div>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        
        <Card.Title>Rating: {imdbRating}</Card.Title>
        <Card.Title>Year Released: {Year}</Card.Title>
        <div>{Plot}</div>


        {inSearchForm ? (
            <div className="d-flex justify-content-between mt-2">
            <Button variant='primary' onClick={()=>func({...movie, mood:'happy'})}>Happy</Button>
            <Button variant='warning' onClick={()=>func({...movie, mood:'emotional'})}>Emotional</Button>
        </div>
        ) : (
            <div className="mt-3 text-end">
      <Button variant="danger" size="lg" onClick={() => func(movie.imdbID)}>
        Delete Movie
      </Button>
      
    </div>
        )
}
        
       
      </Card.Body>
    </Card>
    
  )
}
