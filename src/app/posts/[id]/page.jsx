import React from 'react';

const PostDetailsPage = ({params}) => {
    console.log(params.id);
    return (
        <div>
             <div className="grid grid-cols-4 gap-4 mb-8">
                <div key={post.id} className='border-2 border-yellow-800 rounded-lg p-6'>
                    <h1 className='text-3xl text-yellow-600'> {post.title} </h1>
                    <p>{post.body} </p>
                    <button onClick={'/posts'} className="text-white bg-yellow-700 p-2 rounded-md">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;