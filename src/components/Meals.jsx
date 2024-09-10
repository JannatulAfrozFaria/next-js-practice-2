import React, { useState } from 'react';

const Meals = () => {
    const [search,setSearch] = useState();
    return (
        <div>
            <div>
                <input className='p-4 outline-none border-transparent text-slate-600' type="text" placeholder='search meals here ...' />
                <button className='btn-basic'>Search </button>
            </div>
        </div>
    );
};

export default Meals;