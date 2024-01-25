import React, { createContext, useState } from 'react'
import data from "../data/moives"


export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [movies, setMovies] = useState(data)
    const [backUpMovies] = useState(data)


    console.log("vom Provider", movies);



    return (
        <mainContext.Provider value={{ movies, setMovies, backUpMovies }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainProvider