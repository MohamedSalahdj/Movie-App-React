import { Link } from "react-router-dom"
import MovieCardFunction from "../../Components/MovieCardFunction";
import {addToFav} from "../../Store/Actions/AddToFavourit"
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";


function MovieFavourit(){
    
    const moviesFavouritList = useSelector((state) => state.moviesFavouritList)
    
    console.log("All id",moviesFavouritList)
    const [ moviesFavouritListDetails, setMoviesFavouritListDetails ] =  useState([])
    
    console.log("yes sended", moviesFavouritList)

  const new_arr = []

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const promises = moviesFavouritList.map((movieId) => {
          return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e935b945a020cd3baec59bc8b4a8b491`);
        });

        const responses = await Promise.all(promises);
        const newDetails = responses.map((res) => res.data);

        setMoviesFavouritListDetails(newDetails);
      } catch (err) {
        console.log("Error fetching movie details", err);
      }
    };

    fetchMovieDetails();
  }, [moviesFavouritList]);
  console.log("Favorited movie details:", moviesFavouritListDetails);

    return (
        <>
            <h1 className="text-center">Movie Favourit</h1>
            <div className="mx-lg-5 mx-md-4 mx-sm-3">
                <div className="row d-flex mx-lg-0 mx-md-2 mx-sm-0 ">
               { moviesFavouritListDetails.map((movie, index) => {
                        return (
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <MovieCardFunction  key={index} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.original_language} movieOverview={movie.overview}/>
                        </div> 
                        )
                    })}
    
                </div>
            </div>


        </>
    )
}

export default MovieFavourit;