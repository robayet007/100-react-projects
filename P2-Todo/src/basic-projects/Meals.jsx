import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"

const Meals = () => {
  const [item, setItem] = useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res)=>{
      console.log(res.data.meals)
      setItem(res.data.meals)
    }).catch((err)=>{
      console.log(err)
    })
  },[])



  return (
    <div className="container">
      <section className="meals">
      {item.map(({strMeal , strMealThumb , idMeal})=>
          <div>
            <img src={strMealThumb} alt={strMealThumb} />
            <h2>{strMeal}</h2>
          </div>
        )}
      </section>
    </div>
  )
};

export default Meals;
