import { Link } from "react-router-dom"
function HomePage() {

    return (
        <>
            <h1 className="mt-5 text-center text-dark"> Lab-02</h1>
           <div className="container p-5">
                <div className="d-flex justify-content-evenly">
                        <Link to="/login" type="Link" className="btn btn-primary">Login</Link>
                        <Link to="/register" type="Link" className="btn btn-primary">Register</Link>
                        <Link to="/todo" type="Link" className="btn btn-primary">To-do</Link>
                        <Link to="/movies" type="Link" className="btn btn-primary">Moives App</Link>
                </div>
           </div>
      
        </>
    )
}

export default HomePage;