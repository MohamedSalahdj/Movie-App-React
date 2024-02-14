import { useState } from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";


function NavBarComponent() {
    const favCounter = useSelector((state) => state.counter);
    console.log('counter',favCounter)
    const [searchQuery, setSearchQuery] = useState('')

    const handelSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
       <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid ">
        <a className="navbar-brand text-warning" href="#">
            <img src="movies-logo.jpg" alt="Movie Logo" width="50" height="50" className="d-inline-block me-2" />
            Movie app
            {/* <span className="ms-2"></span> */}
        </a>
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-warning"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active text-warning" aria-current="page" to="/movies">Home</Link>
                </li>
                <Link type="button" to='/moviefavorit' class="nav-link active text-warning position-relative">
                    Favorit
                    <span class="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-warning text-bl">
                        {favCounter}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </Link>

             </ul>
             {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                    <Link to='/login' className="nav-link active text-warning" aria-current="page" href="#">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/register' className="nav-link active text-warning" aria-current="page" href="#">Register</Link>
                </li>
             </ul> */}
                <form className="d-flex" role="search">
                <select className="form-select me-3 w-25" aria-label="Default select example">
                    <option selected value="EN">EN</option>
                    <option value="AR">AR</option>
                </select>
                    <input className="form-control me-2" type="search" placeholder="Movie Search" aria-label="Search" 
                        onChange={(e)=> handelSearch(e)} value={searchQuery}
                    />
                    <Link to={`/movies/${searchQuery}`} className="btn btn-outline-warning" type="submit">Search</Link>
                </form>
        </div>
    </div>
</nav>
        
        </>



    )
}
export default NavBarComponent;