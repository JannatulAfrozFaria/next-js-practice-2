"use client"
import React, { useState } from 'react';

const Meals = () => {
    const [search,setSearch] = useState();
    const [meals,setMeals] = useState();
    const loadData =  async () =>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data =  res.json();
        setMeals(data);
    }
    const handler = (e) =>{
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <div>
                <input onChange={handler} className='p-4 outline-none border-transparent text-slate-600' type="text" placeholder='search meals here ...' />
                <button className='btn-basic'>Search </button>
            </div>
        </div>
    );
};

export default Meals;