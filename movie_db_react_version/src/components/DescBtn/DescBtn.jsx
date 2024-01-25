import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const DescBtn = () => {

    const { movies, setMovies } = useContext(mainContext)

    const DescendingByYear = () => {
        let kopiedMovies = [...movies]
        let sortiedMovies = kopiedMovies.sort((movie1, movie2) => movie2.year - movie1.year)
        setMovies(sortiedMovies)
    }



    return (
        <button onClick={DescendingByYear}>Descnding By Year</button>
    )
}

export default DescBtn