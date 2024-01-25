import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../App.css"
import Loading from './Loading';

function Recipe() {
    let { recipeid } = useParams();
    const [recipe, setrecipe] = useState({});
    useEffect(() => {
        fetch(recipeid?`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeid}`:"https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()).then(res => {setrecipe(res.meals[0])});
    }, [recipeid])
    return (
        Object.keys(recipe).length ?<div className='container text-center my-5 d-flex justify-content-center flex-column'>
            <h1>{recipe.strCategory}</h1>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} className="img-fluid recipe-img my-5" alt="..." />
            <table>
                <tr>
                    <th>Ingridients</th>
                    <th>Measure</th>
                </tr>
                {
                    [...Array(20)].map((x, i) => {
                        if (recipe["strIngredient" + (i + 1)]) return <tr key={i}>
                            <td>{recipe["strIngredient" + (i + 1)]}</td>
                            <td className='p-1'>{recipe["strMeasure" + (i + 1)]}</td>
                        </tr>
                        else return <></>
                    })
                }
            </table>
            <div className='my-5 font-size1_2rem'>
                <h3>Instruction</h3>
                <p>{recipe.strInstructions}</p>
            </div>
            <a href={recipe.strYoutube} target='_blank' rel="noreferrer">
                <img className='recipe-img border border-1' alt={recipe.strMeal} src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"/>
            </a>
        </div>:<Loading/>
    )
}

export default Recipe