import Link from 'next/link';
import React from 'react';

const PostDetailsPage = ({ params }) => {
    console.log(params.id);
    return (
        <div className='w-3/4 mx-auto my-16'>
            <div className='border-2 border-yellow-800 rounded-lg p-8'>
                <h1 className='text-3xl text-yellow-600'> Details of <br /> {post.title} </h1>
                <p>{post.body} </p>
                <button className="text-white bg-yellow-700 p-2 rounded-md">
                    <Link href={'/posts'} >Go Back</Link>
                </button>
            </div>
        </div>
    );
};

export default PostDetailsPage;