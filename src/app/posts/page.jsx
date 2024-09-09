import React from 'react';

const getPosts = async() =>{
  const res = await  fetch('https://jsonplaceholder.typicode.com/posts');
  const data =  await res.json();
  return data;
//   console.log(data);
}
const PostPage = async() => {
    const postsData =  await getPosts();
    console.log(postsData);
    return (
        <div className='w-5/6 mx-auto text-center'>
            <h1>Posts will be Displayed Below</h1>
            <div className="grid grid-cols-4 gap-3">
                {postsData.map((post)=>
                <div className='border-2 border-yellow-800 p-6'>
                    <h1 className='text-3xl text-yellow-600'> {post.title} </h1>
                    <p>{post.body} </p>
                </div>
                )}
            </div>
        </div>
    );
};

export default PostPage;