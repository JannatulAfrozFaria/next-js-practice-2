import Meals from '@/components/Meals';
import React, { useState } from 'react';

const MealsPage = () => {
    
    return (
        <div className='my-12 w-5/6 mx-auto text-center'>
            <h1 className='text-basic'>Meals Page</h1>
            <p className='py-6'>Choose meals of your choice by searching...</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;