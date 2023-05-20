import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../App";
import { commentsData, usersData } from "./functions";

const UserAndComments = () => {
  const context = useContext(MyContext);
  let { userId } = useParams();
  const navigate = useNavigate()
  console.log(userId);
  useEffect(() => {
    commentsData(userId, context.setComments);
  }, [userId]);
  useEffect(() => {
    usersData(userId, context.setUsers);
  }, [userId]);
  return (
    <div className="container2">
      <button onClick={()=>{
        navigate("/")
      }}>Back</button>
      <div className="heading-box2">
        <div className="left">
          <h1>Comments & User Details</h1>
        </div>
        <div className="right">
          <h2>{context.users.name}</h2>
          <p>Email: {context.users.email}</p>
          <p>Website: {context.users.website}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {context.comments && context.comments.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.postId}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAndComments;
