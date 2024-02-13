import { Link } from "react-router-dom"
import MovieCardFunction from "../../Components/MovieCardFunction";
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";



function MovieFavourit(){
    const dispatch = useDispatch()

    const [favMovies, setFavMovies] = useState([])
    const getMoviesId = useSelector((state) => state.moviesId)
    const favCounter = useSelector((state) => state.counter);

    const moviesApi = getMoviesId.map((movie)=>{
        return (
            `https://api.themoviedb.org/3/movie/${movie}?api_key=e935b945a020cd3baec59bc8b4a8b491`
        )})
    useEffect(() => {
        axios.all(moviesApi.map((movie) => axios.get(movie)))
        .then((res)=> {
                 const movieData = res.map((res) => res.data);
                 setFavMovies(movieData)
     } )}
    , [getMoviesId])
    console.log(favMovies)



    
    return (
        <>
            <h1 className="text-center">Movie Favourit</h1>
            <div className="mx-lg-5 mx-md-4 mx-sm-3 mb-5">
                <div className="row d-flex mx-lg-0 mx-md-2 mx-sm-0 ">
                        { favMovies.map((movie, index) => {
                            return(
                                <div className="col-lg-2 col-md-4 col-sm-6" id={movie.id}>
                                    <Link to={`/moviedetail/${movie.id}`}>              
                                        <MovieCardFunction movieId={movie.id} key={index} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.original_language} movieOverview={movie.overview}/>
                                    </Link>

                                </div> 


                            )
                        })}
                </div>
            </div>

        </>
    )
}

export default MovieFavourit;