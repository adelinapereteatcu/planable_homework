import React, { useState } from 'react';
import  Post from './Post';
import { useTracker } from 'meteor/react-meteor-data';
import Posts from '/imports/api/posts';
import Pagination from './Pagination';


export const App = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const posts = useTracker(() => Posts.find({}).fetch());
  console.log(posts);

  //get current posts
  const indexOfLastPost = currentPage *postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
  const paginate = (pageNumber) => setcurrentPage(pageNumber)

  return (
    <div>
      <h1>Reddit posts</h1>

      <ul>
        {currentPosts.map(post => <Post key={post._id} post={post} />)}
        {/* {posts.map(post => <PostCard key={post._id} post={post} />)} */}
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      </ul>
    </div>
  )
  
};
