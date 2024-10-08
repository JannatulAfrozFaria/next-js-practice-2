import Image from 'next/image';
import React from 'react';
export const metadata = {
    title: "Gallery",
    description: "Background Image Gallery",
    keywords: ["about","about page"]
  };
const page = () => {
    return (
        <div>
            <h1 className='text-3xl'>Gallery Page</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    [1, 2, 3, 4, 5]?.map((img,index) => (
                        <div key={img} className="card bg-yellow-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Image Optimization {index + 1}</h2>
                            </div>
                            <figure>
                                <Image width="1920" height="1080" src={`/${img}.jpg`}
                                    alt="Shoes"></Image>
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;