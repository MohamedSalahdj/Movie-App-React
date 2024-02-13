import '../Pages/ListMovies/ListMovie.css'

function MovieCardFunction(props){



    return (
        <>
            <div className="card mb-3" id={props.movieId}>
                <img src={props.image} className="card-img-top movie-card" alt="..." />
        </div>
   
        </>
    )
}

export default MovieCardFunction;