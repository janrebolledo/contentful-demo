import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

export default PostList;
