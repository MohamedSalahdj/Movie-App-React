import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import MovieCardFunction from "../../Components/MovieCardFunction";
import './ListMovie.css'
import { useSelector, useDispatch } from "react-redux";
import { changeFavorites } from '../Store/Actions/CounterAction'

function ListMoviesfunction() {

    const [allMoviesData, setAllMoviesData] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPageNumbers, settotalPageNumbers] = useState(1)
    const favCounter = useSelector((state) => state.counter);
    const getMoviesId = useSelector((state) => state.moviesId)

    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e935b945a020cd3baec59bc8b4a8b491&page=${pageNumber}`)
        .then((res) => {
            setAllMoviesData(res.data.results)
            settotalPageNumbers(res.data.total_pages)
        })
        .catch((err) => console.log(err))
        console.log(allMoviesData)
    },[pageNumber])

    const previousPage = (pagenum) => {
        if (pagenum > 1){
            setPageNumber(pageNumber-1)
        }
        else {
            setPageNumber(1)
        }
        console.log(pageNumber)
    }

    const nextPage = (pagenum) => {
        setPageNumber(pageNumber + 1);
        console.log("next -----------",pageNumber)

    }

    const addToFavourit = (e) => {
        console.log("Target element:", e.target);
        console.log("Parent element:", e.target.parentElement);
    console.log("Grandparent element:", e.target.parentElement.parentElement);
        const singleMovieId = e.target.parentElement.id;
        console.log(singleMovieId)
        const addmovie = getMoviesId;
        if (addmovie.includes(singleMovieId)) {
            const updateProducts = getMoviesId.filter((movieID) => movieID !== singleMovieId);
            dispatch(changeFavorites(favCounter - 1, updateProducts));
        } else {
            addmovie.push(singleMovieId);
            dispatch(changeFavorites(favCounter + 1, addmovie));
        }
    }
   

    return (
        <>
            <h1 className="text-center my-5">Popular Movies</h1>
            <div className="mx-lg-5 mx-md-4 mx-sm-3 mb-5">
                <div className="row d-flex mx-lg-0 mx-md-2 mx-sm-0 ">
                        { allMoviesData.map((movie, index) => {
                            return(
                                <div className="col-lg-2 col-md-4 col-sm-6 parent-card" id={movie.id}>
                                    
                                    <p className={`fas fa-heart top-heart ${getMoviesId.includes(`${movie.id}`) && 'text-warning bg-black' }}`}></p>
                                    <Link to={`/moviedetail/${movie.id}`}>              
                                        <MovieCardFunction movieId={movie.id} key={index} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} movieTitle={movie.original_language} movieOverview={movie.overview}/>
                                    </Link>
                                    <button onClick={(e)=> addToFavourit(e)} className='btn btn-warning my-2 text-decoration-none d-flex btn-favv'>Add To Favourit</button>
                                </div> 
                            )
                        })}

        <nav aria-label="Page navigation example mt-5  ">
            <ul class="pagination d-flex justify-content-center ">
                {pageNumber!=1 ? <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link bg-warning text-black'>Previous</button></li>
                :<li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link bg-black text-light disabled'>Previous</button></li>}
                {/* {pageNumber!=1 && <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link'>1</button></li>}
                {pageNumber!=1 && <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link'>2</button></li>}
                {pageNumber!=1 && <li className="page-item"><button onClick={()=> previousPage(pageNumber)} className='page-link'>3</button></li>} */}
                {pageNumber < 42376 && <li className="page-item"> <button onClick={()=> nextPage(pageNumber)} className='page-link bg-warning text-black'>Next</button></li>}
            </ul>
            </nav>
                </div>
            </div>
        </>
    )
}

export default ListMoviesfunction;