// Import necessary dependencies
import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    post: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    // Frontend validation
    const newErrors = {};
    if (postData.title.length < 10) {
      newErrors.title = "Title must be at least 10 characters long";
    }
    if (postData.post.length < 25) {
      newErrors.post = "Post must be at least 25 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Clear previous errors
    setErrors({});

    // // Add the author information to the postData
    // const postDataWithAuthor = { ...postData, author };

    axios
      .post("/post/create", postData)
      .then((response) => {
        console.log("New post created:", response.data);
        // Reset form
        setPostData({ title: "", post: "" });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        // Handle other errors
      });
  };

  return (
    <div className="container mt-3">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="post" className="form-label">
            Post Content
          </label>
          <textarea
            className={`form-control ${errors.post ? "is-invalid" : ""}`}
            id="post"
            name="post"
            value={postData.post}
            onChange={handleChange}
            required
          />
          {errors.post && <div className="invalid-feedback">{errors.post}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
