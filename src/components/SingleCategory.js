import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import Loading from './Loading';

function SingleCategory() {
  const [itemlist, setitemlist] = useState([]);
  let {category,area,search}=useParams();
  useEffect(() => {
    console.log(category,area);
    fetch(category?`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`:area?`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`:`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res =>res.json()).then(res=>setitemlist(res.meals?res.meals:[]));
  }, [category,area,search])
  return (
    <div className='container my-4'>
            <h1 className='text-center'>{category?category:area?area:`Result for "${search}"`}</h1>
            {
                search && (!itemlist.length) && <h4 className='text-center mt-4'>Not Found any recipe !</h4>
            }
            {
                <div className='categories my-5 row d-flex justify-content-center'>
                    {
                        itemlist.length ? itemlist.map((item, index) => {
                            return (
                                <Link to={`/recipe/${item.idMeal}`} className="col-lg-3 mx-2 card my-2" style={{ width: "18rem" }} key={index}>
                                    <img src={item.strMealThumb} className="card-img-top card-img" style={{ height: "14rem" }} alt="..." />
                                    <div className="card-body w-100">
                                        <p className="card-text h5">{item.strMeal}</p>
                                    </div>
                                </Link>
                            )
                        }):<Loading/>
                    }
                </div>
            }
        </div>
  )
}

export default SingleCategory