import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

const TableData = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const start = (context.currentPage - 1) * context.postsPerPage;
  const end = start + context.postsPerPage;
  const tablePostData = context.posts.slice(start, end);

  return tablePostData.map((ele) => (
    <tr
      key={ele.id}
      onClick={() => {
        navigate(`/comments/${ele.userId}`);
      }}
    >
      <td>{ele.id}</td>
      <td>{ele.userId}</td>
      <td>{ele.title}</td>
      <td>{ele.body}</td>
    </tr>
  ));
};
export default TableData;
