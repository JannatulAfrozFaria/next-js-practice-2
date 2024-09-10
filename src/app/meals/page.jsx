import React from 'react';

const MealsPage = () => {
    return (
        <div className='my-12 w-5/6 mx-auto text-center'>
            <h1 className='text-basic'>Meals Page</h1>
            <p>Choose meals of your choice by searching...</p>
            <div>
                <input type="text" placeholder='search meals here ...' />
                <button></button>
            </div>
        </div>
    );
};

export default MealsPage;