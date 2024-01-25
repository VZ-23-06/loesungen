import { Route, Routes } from 'react-router-dom'
import './App.css'
import MoviesGallery from './pages/moviesGallery/MoviesGallery'
import MovieDetails from './pages/movieDetails/MovieDetails'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MoviesGallery />} />
        <Route path='/:title' element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
