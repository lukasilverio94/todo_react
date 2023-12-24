import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
  const [postInfo, setPostInfo] = useState();
  const navigate = useNavigate();
  const params = useParams();

  // Handle Delete
  const handleDelete = (postId) => {
    axios
      .delete(`/post/del/${postId}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  //Fetch Single Post Data
  useEffect(() => {
    axios
      .get(`/post/${params.id}`)
      .then((response) => setPostInfo(response.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="container">
      {postInfo ? (
        <div>
          <h4>Posted by: {postInfo.author.username}</h4>
          <p>{postInfo.post}</p>
          <small>{postInfo.createdAt}</small>
          <div>
            <button className="btn btn-secondary mt-2 me-2">Edit</button>
            <button
              onClick={() => handleDelete(postInfo._id)}
              className="btn btn-danger mt-2"
            >
              Delete
            </button>
          </div>
          <hr />
        </div>
      ) : (
        <p>No post to display</p>
      )}
    </div>
  );
}
