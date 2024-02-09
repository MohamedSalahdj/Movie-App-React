function MovieDetailscomponent(props) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}className="card-img-top" alt="..." />
                </div>
                <div className="col-lg-6">
                <h4 className="card-title">{props.movieTitle}</h4>
                <hr></hr>
                <p>{props.overview}</p>
                <p><span className="text-warning">Language</span> {props.original_language}</p>
                <p><span className="text-warning">Rate</span> {props.vote_average}<span className="text-warning"> Based on</span>{props.vote_count} Votes</p>
                <p><span className="text-warning">Genres </span>
                {props.genres && props.genres.map((genre, index) => (
                    <span key={index}>{props.name}, </span>
                ))}
                </p>
                </div>

            </div>

        </div>
        </>
    )
}
export default MovieDetailscomponent;