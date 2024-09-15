import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-3xl'>Gallery Page</h1>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Image Optimization</h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                </div>
                <figure>
                    <Image width="1920" height="1080" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"></Image>
                </figure>
            </div>
        </div>
    );
};

export default page;