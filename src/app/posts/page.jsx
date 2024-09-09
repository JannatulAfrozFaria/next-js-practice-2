import React from 'react';

const getPosts = async(req,res,next) =>{
  const res = await  fetch('https://jsonplaceholder.typicode.com/posts');
  const data =  await res.data();
  console.log(data);
}
const PostPage = () => {
    return (
        <div className='h-screen'>
            <h1>Posts will be Displayed Below</h1>
        </div>
    );
};

export default PostPage;