import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  const [posts, setPosts, loading, setLoading] = useState([]);
  let [color, setColor] = useState("#ffffff");

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <ClipLoader
          color={color}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
