import { useState } from 'react';
import {Alert, Container } from 'react-bootstrap';
import './App.css';
import { CustomCard } from './components/CustomCard';
import { MovieList } from './components/MovieList';
import { SearchForm } from './components/SearchForm';
import {fetchMovieInfo} from './helper/axiosHelper'
import a from './a.mp3'

function App() {
  const [audio] = useState(new Audio(a))
const [movie, setMovie] = useState({})
const [showError, setShowError] = useState("")
const [movieList, setMovieList] = useState([])

  const handleOnSubmit = async (str) => {

const result = await fetchMovieInfo(str)

setMovie(result)

  result.Response === "False" ? setShowError(result.Error) : setShowError("")

}

const movieSelect = (movie) => {
  setMovieList([...movieList, movie])
  setMovie({})
}

const deleteMovie = (imdbID) => {

  if(window.confirm("Are you sure you want to delete this movie?")) {

    const filteredArg = movieList.filter((item) => item.imdbID !== imdbID)
    setMovieList(filteredArg)
  }
}

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className='mt-4 d-flex justify-content-center'>
          {movie.imdbID && <CustomCard movie = {movie} func= {movieSelect} inSearchForm = {true}/>}
          
           {showError && audio.play(a) &&<Alert variant = "danger">{showError}</Alert>}
          
        </div>

        <hr />
              <MovieList movieList={movieList} deleteMovie = {deleteMovie}/>

      </Container>
    </div>
  );
}

export default App;
