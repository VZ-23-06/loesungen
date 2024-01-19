const MovieCard = ({ title, director, duration, rate, year, genres }) => {
    return (
        <>
            <h2>{title}</h2>
            <h3>{director}</h3>
            <h4>{duration}</h4>
            <p>{rate}</p>
            <p>{year}</p>
            {genres.map((genre, index) => {
                return (
                    <ul key={index}>
                        <li>{genre}</li>
                    </ul>
                )
            })}
        </>
    );
}

export default MovieCard;