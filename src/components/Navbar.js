import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [area, setarea] = useState([]);
    const [search, setsearch] = useState("");
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`).then(res => res.json()).then(res => setarea(res.meals));
    }, [area])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">CookBook</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Areas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    area && area.map((a,index)=>{
                                        return <li key={index}><Link className="dropdown-item" to={`/area/${a.strArea}`}>{a.strArea}</Link></li>
                                    })
                                }
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/random">RandomMeal</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" onChange={(e)=>setsearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        <Link className="btn btn-outline-success" to={`/search/${search}`}>Search</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar