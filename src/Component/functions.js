export const postsData = async (setPosts, setTotalPages, postsPerPage) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setTotalPages(Math.ceil(data.length / postsPerPage));
};

export const searchPosts = (
  posts,
  search,
  setPosts,
  setTotalPages,
  postsPerPage,
  setCurrentPage
) => {
  if (search) {
    const filteredData = posts.filter((ele) =>
      ele.title.toLowerCase().includes(search.toLowerCase())
    ); 
    setCurrentPage(1);
    setPosts(filteredData);
    setTotalPages(Math.ceil(filteredData.length / postsPerPage));
  } else {
    postsData(setPosts, setTotalPages, postsPerPage);
  }
};

export const commentsData = async (userId,setComments) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`);
  const data = await response.json();
  setComments(data);
};

export const usersData = async (userId,setUsers) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  setUsers(data);
};

export const handlePage = (page,setCurrentPage) => {
    setCurrentPage(page);
  };