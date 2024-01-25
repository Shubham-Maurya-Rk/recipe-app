import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import Loading from './Loading';


function CategoriesList() {
    const [recipes, setrecipes] = useState([]);
    useEffect(() => {
        fetch("https://themealdb.com/api/json/v1/1/categories.php").then(res => res.json()).then(res => setrecipes(res.categories));
    }, [])
    return (
        <div className='container my-4'>
            <h1 className='text-center'>Various tastes available for your tounge !</h1>
            <div className='categories my-5 row d-flex justify-content-center'>
                {
                    recipes.length ? recipes.map((recipe, index) => {
                        return (
                            <Link to={`/category/${recipe.strCategory}`} className="col-lg-3 mx-2 card my-2" style={{ width: "18rem" }} key={index}>
                                <img src={recipe.strCategoryThumb} className="card-img-top card-img" style={{ height: "14rem" }} alt="..." />
                                <div className="card-body w-100">
                                    <p className="card-text h5">{recipe.strCategory}</p>
                                </div>
                            </Link>
                        )
                    }):<Loading/>
                }
            </div>
        </div>
    )
}

export default CategoriesList