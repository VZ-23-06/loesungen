import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    return (
        <>
            <h2>{movie.title}</h2>
            <h4>{movie.director}</h4>
            <Link to={`/${movie.title}`}>Read More about title</Link>
        </>

    )
}

export default MovieCard