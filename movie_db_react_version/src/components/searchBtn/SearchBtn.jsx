import { useContext, useRef, useState, React } from "react"
import { mainContext } from "../../context/mainProvider"

const SearchBtn = () => {

    const { movies, backUpMovies, setMovies } = useContext(mainContext)


    // const [search, setSearch] = useState("")

    const searchRef = useRef()


    const searchFunction = () => {
        setMovies([...backUpMovies].filter((movie) => {
            if (movie.title.toLowerCase().includes(searchRef.current.value.toLowerCase().trim())) {
                return movie
            } else if (movie.director.toLowerCase().includes(searchRef.current.value.toLowerCase().trim())) {
                return movie
            }
        }))
        searchRef.current.value = ""
    }


    return (
        <>
            {/* <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            /> */}
            <input
                type="text"
                ref={searchRef}
            />
            <button onClick={searchFunction}>Search</button>
        </>
    )
}

export default SearchBtn