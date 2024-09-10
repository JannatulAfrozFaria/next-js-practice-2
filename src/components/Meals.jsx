"use client"
import React, { useState } from 'react';

const Meals = () => {
    const [search,setSearch] = useState();
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