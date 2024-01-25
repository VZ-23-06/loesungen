import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const AtoZBtn = () => {

    const { movies, setMovies } = useContext(mainContext)


    const atoZFunction = () => {
        let kopiedMovies = [...movies]
        let sortiedMovies = kopiedMovies.sort((a, b) => a.title < b.title ? -1 : 1)
        setMovies(sortiedMovies)
    }



    return (
        <button onClick={atoZFunction}>AtoZ</button>
    )
}

export default AtoZBtn