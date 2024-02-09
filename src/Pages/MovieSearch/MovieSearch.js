import axios from "axios";
import { useEffect, useState } from "react";
import HeaderFormComponent from "../../Components/HeaderFormComponent";
import { Link } from "react-router-dom"
import MovieCardFunction from "../../Components/MovieCardFunction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function MovieSearch(props){


    const [searchResults, setSearchResults] = useState([])

    const searchQuery = useParams()
    
    console.log(searchQuery)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e935b945a020cd3baec59bc8b4a8b491&query=${searchQuery.moviename}`)
        .then((res) => console.log(setSearchResults(res.data.results)))
        .catch((err)=> console.log(err))
    },[searchResults])

    console.log("movie",searchQuery.moviename)

    return (
        <>
        <div className="mx-lg-5 mx-md-4 mx-sm-3 my-5">
         <div className="row d-flex mx-lg-0 mx-md-2 mx-sm-0 ">
             {searchResults.map((movie, index) => {
                            return(
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <Link to={`/moviedetail/${movie.id}`}>              
                                        <MovieCardFunction  key={index} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.original_language} movieOverview={movie.overview}/>
                                    </Link>

                                </div> 
                            )
                        })}
              </div>
            </div>
        </>
    )
}

export default MovieSearch;