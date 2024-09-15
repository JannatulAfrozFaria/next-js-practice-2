import Link from 'next/link';
import React from 'react';

const getDetailsPost = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: { absolute: `${postData.title}` },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
  }
const PostDetailsPage = async({ params }) => {
    // console.log(params.id);
    const postDetails = await getDetailsPost(params.id);
    // const {title,body} = await getDetailsPost(params.id);
    return (
        <div className='w-3/4 mx-auto my-16 text-center h-screen'>
            <div className='border-2 border-yellow-800 rounded-lg p-8'>
                <h1 className='text-3xl text-yellow-600'> Details of <br /> {postDetails.title} </h1>
                <p>{postDetails.body} </p>
                <button className=" my-6 text-white bg-yellow-700 p-2 rounded-md">
                    <Link href={'/posts'}> Go Back</Link>
                </button>
            </div>
        </div>
    );
};

export default PostDetailsPage;