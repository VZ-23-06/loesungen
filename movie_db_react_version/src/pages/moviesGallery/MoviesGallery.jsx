import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'
import MovieCard from '../movieCard/MovieCard'

const MoviesGallery = () => {

    const { movies } = useContext(mainContext)


    return (
        <>
            <h2>MoviesGallery</h2>
            <main>
                {movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <MovieCard movie={movie} />
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default MoviesGallery