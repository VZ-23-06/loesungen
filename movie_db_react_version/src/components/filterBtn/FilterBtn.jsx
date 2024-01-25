import React, { useContext } from 'react'
import { mainContext } from '../../context/mainProvider'

const FilterBtn = () => {

    const { backUpMovies, setMovies } = useContext(mainContext)


    const filterGenre = (event) => {
        let sortedByGenre = backUpMovies.filter((movie) => {
            return (
                movie.genre.includes(event.target.value)
            )
        })
        setMovies(sortedByGenre)
    }



    return (
        <select onChange={filterGenre}>
            <option value="Action">Action</option>
            <option value="Adventure">Adeventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Horror">Horror</option>
            <option value="History">History</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sport">Sport</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
        </select>
    )
}

export default FilterBtn