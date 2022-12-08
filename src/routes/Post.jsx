import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./Post.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost, loading, setLoading] = useState([]);
  let [color, setColor] = useState("#ffffff");
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <ClipLoader
          color={color}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
