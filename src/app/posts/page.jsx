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
        <div className='h-screen'>
            <h1>Posts will be Displayed Below</h1>
        </div>
    );
};

export default PostPage;