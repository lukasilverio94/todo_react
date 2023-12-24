//Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function GetAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="mb-4">All posts: </h1>
      {posts.map((post) => (
        <div key={post._id}>
          <NavLink to={`/post/${post._id}`} className="nav-link">
            <h6 className="text-muted">Posted by: {post.author.username}</h6>
            <p className="fs-4">
              {post.post.length > 40
                ? `${post.post.substring(0, 40)}...`
                : post.post}
            </p>
            <small>{post.createdAt}</small>
            <hr />
          </NavLink>
        </div>
      ))}
    </div>
  );
}
