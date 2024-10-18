import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = new URLSearchParams(useLocation().search).get("cat");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (cat) {
          res = await axios.get(
            `http://localhost:5000/api/v1/blog/blog-get-cat/${cat}`,
            {
              withCredentials: true,
            }
          );
        } else {
          res = await axios.get(`http://localhost:5000/api/v1/blog/blog-get`, {
            withCredentials: true,
          });
        }
        setPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post._id}>
              <div className="img">
                <img
                  src={
                    post?.image
                      ? `../upload/${post.image}`
                      : "../upload/blog.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post._id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.content)}</p>
                <button>Read More</button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            There are currently no blog posts available for {cat}.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
