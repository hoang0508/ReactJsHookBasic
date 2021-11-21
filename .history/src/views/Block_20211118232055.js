import useFetch from "../customize/fetch";
const Blog = () => {
  const {
    data: dataBlog,
    isloading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  console.log(">>> check data", dataBlog);
  return <h1>hello blogs</h1>;
};

export default Blog;
