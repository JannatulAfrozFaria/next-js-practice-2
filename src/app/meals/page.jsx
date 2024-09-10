'use client'
import React, { useState } from 'react';

const MealsPage = () => {
    const [search,setSearch] = useState();
    return (
        <div className='my-12 w-5/6 mx-auto text-center'>
            <h1 className='text-basic'>Meals Page</h1>
            <p className='py-6'>Choose meals of your choice by searching...</p>
            <div>
                <input className='p-4 outline-none border-transparent text-slate-600' type="text" placeholder='search meals here ...' />
                <button className='btn-basic'>Search </button>
            </div>
        </div>
    );
};

export default MealsPage;