import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/blog/blog-get/${postId}`,
          {
            withCredentials: true,
          }
        );
        setPost(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/blog/blog-delete/${postId}`,
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // const getText = (html) =>{
  //   const doc = new DOMParser().parseFromString(html, "text/html")
  //   return doc.body.textContent
  // }

  return (
    <div className="single">
      <div className="content">
        <img
          src={post?.image ? `../upload/${post.image}` : "../upload/blog.jpg"}
          alt=""
        />
        <div className="user">
          {post.user && (
            <img
              src={post.user.image ? post.user.image : "../upload/blog.jpg"}
              alt="User"
            />
          )}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></p>{" "}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
