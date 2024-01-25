import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider'

const MovieDetails = () => {

    const { movies } = useContext(mainContext)

    const Movietitle = useParams()

    console.log(Movietitle);


    const einZelMovie = movies.filter((movie) => {
        return movie.title === Movietitle.title
    })

    console.log(einZelMovie);


    return (
        <>
            <div>MovieDetails</div>
            <h2>{einZelMovie[0]?.title}</h2>
            <h3>{einZelMovie[0]?.director}</h3>
            <h4>{einZelMovie[0]?.duration}</h4>
            <h5>{einZelMovie[0]?.rate}</h5>
            {einZelMovie?.[0].genre?.map((el, index) => {
                return (
                    <ul key={index}>
                        <li>{el}</li>
                    </ul>
                )
            })}
            <Link to="/">Back to Movies</Link>
        </>
    )
}

export default MovieDetails