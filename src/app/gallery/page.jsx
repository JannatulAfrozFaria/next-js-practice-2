import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-3xl'>Gallery Page</h1>
            <div className=''>
                {
                    [1, 2, 3, 4, 5]?.map((img) => (
                        <div key={img} className="card bg-base-100 w-96 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Image Optimization</h2>
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