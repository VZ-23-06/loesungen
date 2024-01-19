import MovieCard from "../movieCard/MovieCard";

const MoviesGallery = ({ movies }) => {
    console.log(movies);
    return (
        <>
            <main>
                {movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <MovieCard
                                title={movie.title}
                                director={movie.director}
                                duration={movie.duration}
                                rate={movie.rate}
                                year={movie.year}
                                genres={movie.genre}
                            />
                        </div>
                    )
                })}
            </main>
        </>);
}

export default MoviesGallery;