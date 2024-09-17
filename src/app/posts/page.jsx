import { getPosts } from '@/services/postApi';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import React from 'react';

//REDIRECT:-----
// const getPosts = async() =>{
//   const res = await  fetch('https://jsonplaceholder.typicode.com/posts');
//   const data =  await res.json();
//   if(data){
//     redirect(`/posts/${data[0].id}`)
//   }
//   return data;
// };
const PostPage = async() => {
    const postsData =  await getPosts();
    // console.log(postsData);
    return (
        <div className='w-5/6 mx-auto text-center'>
            <h1 className='mt-8 p-6 text-4xl text-yellow-800'>Posts will be Displayed Below</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {postsData?.slice(0,16)?.map((post)=>
                <div key={post.id} className='border-2 border-yellow-800 rounded-lg p-6 flex flex-col justify-center items-stretch'>
                   <div>
                        <h1 className='text-3xl text-yellow-600'> {post.title} </h1>
                        <p>{post.body} </p>
                   </div>
                    <div className='flex justify-center'>
                        <button className=" my-5 text-white bg-yellow-700 p-2 rounded-md">
                            <Link href={`/posts/${post.id}`} >View Details</Link>
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default PostPage;