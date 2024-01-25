import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const AcendBtn = () => {


    const { movies, setMovies } = useContext(mainContext)


    const acendingByYear = () => {
        let kopiedMovies = [...movies]
        let sortiedMovies = kopiedMovies.sort((movie1, movie2) => movie1.year - movie2.year)
        setMovies(sortiedMovies)
    }


    return (
        <button onClick={acendingByYear}>Acending By Year</button>
    )
}

export default AcendBtn