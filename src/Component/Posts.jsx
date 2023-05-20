import { useEffect, useContext } from "react";
import { MyContext } from "../App";
import { postsData, searchPosts } from "./functions";
import Pagination from "./Pagination";
import TableData from "./TableData";

const Posts = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    postsData(context.setPosts, context.setTotalPages, context.postsPerPage);
  }, []);

  useEffect(() => {
    searchPosts(
      context.posts,
      context.search,
      context.setPosts,
      context.setTotalPages,
      context.postsPerPage,
      context.setCurrentPage
    );
  }, [context.search]);

  return (
    <div className="container">
      <div className="heading-box">
        <h1 className="heading">Posts</h1>
        <input
          type="text"
          placeholder="Search Title....."
          value={context.search}
          onChange={(e) => {
            context.setSearch(e.target.value);
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
      <div className="page-btn-container">
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
