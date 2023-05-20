import "./App.css";
import { createContext, useState } from "react";
import Posts from "./Component/Posts";
import UserAndComments from "./Component/UserAndComments";
import { Route, Routes } from "react-router-dom";

export const MyContext = createContext();
function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [comments, setComments] = useState([])
  const [users, setUsers] = useState([])
  const postsPerPage = 10;
  return (
    <div className="App">
      <MyContext.Provider
        value={{
          posts: posts,
          setPosts: setPosts,
          search: search,
          setSearch: setSearch,
          currentPage: currentPage,
          setCurrentPage: setCurrentPage,
          totalPages: totalPages,
          setTotalPages: setTotalPages,
          postsPerPage : postsPerPage,
          comments : comments,
          setComments : setComments,
          users : users,
          setUsers : setUsers,
        }}
      >
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/comments/:userId" element={<UserAndComments/>}/>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
