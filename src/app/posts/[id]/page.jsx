import Link from 'next/link';
import React from 'react';

const getDetailsPost = async(id)=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
const PostDetailsPage = ({ params }) => {
    console.log(params.id);
    return (
        <div className='w-3/4 mx-auto my-16 text-center'>
            <div className='border-2 border-yellow-800 rounded-lg p-8'>
                <h1 className='text-3xl text-yellow-600'> Details of <br /> {params.title} </h1>
                <p>{params.body} </p>
                <button className=" my-6 text-white bg-yellow-700 p-2 rounded-md">
                    <Link href={'/posts'}> Go Back</Link>
                </button>
            </div>
        </div>
    );
};

export default PostDetailsPage;