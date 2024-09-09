import React from 'react';

const page = () => {
    return (
        <div className='p-8 m-16 w-1/2 mx-auto text-center border-2 border-blue-400'>
            <h1>Login form</h1>
            <h2>Email: </h2>
            <input type="email" name="Your Email" id="" />
            <h2>Password: </h2>
            <input type="password" name="Your Password" id="" />
            <br />
            <button className='my-3 text-white bg-sky-500 p-2 rounded-lg'>Login</button>
        </div>
    );
};

export default page;