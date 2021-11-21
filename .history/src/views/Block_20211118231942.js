import useFetch from "../customize/fetch";
const Blog = () => {
  const {
    data: dataCovid,
    isloading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  return <h1>hello blogs</h1>;
};

export default Blog;
