import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function MovieDetailsFunction() {

    const[movieDetails, setMovieDetails] = useState({})
    const {movieId} = useParams();

    useEffect(()=>{
        // console.log()
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e935b945a020cd3baec59bc8b4a8b491`)
        .then((res) => setMovieDetails(res.data))
        .catch((err)=> console.log("Error in request"))
    },[])
    console.log(movieDetails)

     {/* <div className="card-body">
                <h5 className="card-title">{props.movieTitle}</h5>
                <p className="card-text">{props.movieOverview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
             </div> */}

    return (
        <>
        <h1 className="text-center mb-3 hh">Movie Details</h1>
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-lg-3">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}className="card-img-top" alt="..." 
                    // style={{ height: "50%", maxWidth: "100%" }}
                    />
                </div>
                    <div className="col-lg-9">
                        <h4 className="card-title">{movieDetails.original_title}</h4>
                        <hr></hr>
                        <p className="mb-3">{movieDetails.overview}</p>
                        <p className="mb-2"><span className="text-warning me-2 font-weight-bold fs-4">Language</span> {movieDetails.original_language}</p>
                        <hr></hr>
                        <p className="mb-2"><span className="text-warning me-2 font-weight-bold fs-4">Rate</span> <span className="text-warning">{movieDetails.vote_average}</span><span className="mx-2 "> Based on</span>{movieDetails.vote_count} Votes</p>
                        <hr></hr>
                        <p><span className="text-warning me-2 font-weight-bold fs-4">Genres </span>
                        {movieDetails.genres && movieDetails.genres.map((genre, index) => (
                            <span className="me-2" key={index}>{genre.name}, </span>
                        ))}
                        </p>
                        <hr></hr>
                </div>

            </div>

        </div>

        </>
    )
}

export default MovieDetailsFunction;