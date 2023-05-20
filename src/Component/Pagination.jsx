import { useContext } from "react";
import { MyContext } from "../App";
import { handlePage } from "./functions";

const Pagination = () => {
  const context = useContext(MyContext);
  const pageArr = [];
  for (let i = 1; i <= context.totalPages; i++) {
    pageArr.push(
      <button
        key={i}
        onClick={() => handlePage(i, context.setCurrentPage)}
        className={i === context.currentPage? "selected" : ""}
      >
        {i}
      </button>
    );
  }
  return pageArr;
};
export default Pagination;
