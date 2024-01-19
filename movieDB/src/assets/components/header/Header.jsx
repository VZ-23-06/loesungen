import { useState } from "react";
import data from "../../data/moives"
import MoviesGallery from "../moviesGallery/MoviesGallery";

const Header = () => {
    // console.log(data);
    const [movies, setMovies] = useState(data)
    // console.log(movies);
    // const [moviesBackUp, setMoviesBackup] = useState(data)
    const [search, setSearch] = useState("")



    const yearAscending = () => {
        let kopiedMovies = [...movies]
        let sortedMovies = kopiedMovies.sort((movie1, movie2) => movie1.year - movie2.year)
        setMovies(sortedMovies)
    }



    const yearDescending = () => {
        let kopiedMovies = [...movies]
        let sortedMovies = kopiedMovies.sort((a, b) => b.year - a.year)
        setMovies(sortedMovies)
    }

    const reset = () => {
        setMovies(data)
    }

    const sortByRate = () => {
        let kopiedMovies = [...movies]
        let sortedMovies = kopiedMovies.sort((a, b) => a.rate - b.rate)
        setMovies(sortedMovies)
    }


    const AtoZ = () => {
        let kopiedMovies = [...movies]
        let sortedMovies = kopiedMovies.sort((a, b) => a.title < b.title ? -1 : 1)
        setMovies(sortedMovies)
    }

    const ZtoA = () => {
        let kopiedMovies = [...movies]
        let sortedMovies = kopiedMovies.sort((a, b) => {
            if (a.title < b.title) {
                return 1
            }
            else if (a.title > b.title) {
                return -1
            } else {
                return 0
            }
        })
        setMovies(sortedMovies)
    }


    const searchFunc = () => {
        setMovies([...data].filter((movie) => {
            if (movie.title.toLowerCase().includes(search.toLowerCase().trim())) {
                setSearch("")
                return movie
            } else if (movie.director.toLowerCase().includes(search.toLowerCase().trim())) {
                setSearch("")
                return movie
            } else {
                setSearch("")
            }
        }))
    }
    // ! Entweder ohne Geschweifte Klammer dann brauchen wir kein return ansonsten immer mit Geschweifte Klammer kommt return

    const filterGenre = (event) => {
        let sortMoviesArray = movies.filter((movie) => {
            return (
                movie.genre.includes(event.target.value)
            )
        })
        console.log(sortMoviesArray);
        setMovies(sortMoviesArray)
    }




    return (
        <>
            <header>
                <h1 onClick={reset}>MovieDB</h1>
                <button onClick={yearAscending}>Sort by Year Ascending</button>
                <button onClick={yearDescending}>Sort by Year Descending</button>
                <button onClick={sortByRate}>Sort by Rate</button>
                <button onClick={AtoZ}>AtoZ</button>
                <button onClick={ZtoA}>ZtoA</button>
                <div>
                    <input
                        type="text"
                        placeholder="Search the title"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button onClick={searchFunc}>Search</button>
                </div>

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
            </header>

            <MoviesGallery movies={movies} />

        </>
    );
}

export default Header;