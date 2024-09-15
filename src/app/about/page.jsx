import React from 'react';
import { Headland_One } from 'next/font/google';
const headland = Headland_One({weight:['400'],subsets:['']});
export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about","about page"]
  };
const page = () => {
    return (
        <div>
            <h1 className="text-3xl">This is our Details Page</h1>
        </div>
    );
};

export default page;