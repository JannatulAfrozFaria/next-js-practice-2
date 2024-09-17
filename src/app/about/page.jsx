import React from 'react';
import { Headland_One } from 'next/font/google';
const headland = Headland_One({weight:['400'],subsets:['latin']});
export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about","about page"]
  };
  const getTime = async() =>{
    const res = await fetch('http://localhost:3000/time', 
        // {cache: 'no-store'}
        {next: {revalidate: 5}}  //5 sec por por new data dekhabe
    );
    const data = await res.json()
    console.log(data);
    return data.currentTime;
  }
const page = async () => {
    const currentTime = await getTime();
    return (
        <div className={`${headland.className} text-3xl min-h-screen p-12`}>
            <h1 >This is our Details Page</h1>
            <h2 className='text-yellow-600 my-3'>Time : {currentTime} </h2>
        </div>
    );
};

export default page;