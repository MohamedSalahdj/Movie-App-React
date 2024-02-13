import axios from "axios"

export const GetMoviesAction = () => (dispatch) =>
{
    return (
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=da4e0d3bd6b4f860b5788aa43ae24d86")
        .then((res) => dispatch({
            type: "MOVIES_DATA",
            payload: res.data.results
        } ))
        .catch((err) => console.log(err))
    )
}