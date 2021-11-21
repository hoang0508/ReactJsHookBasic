import useFetch from "../customize/fetch";
const Blog = () => {
  const {
    data: dataBlog,
    isloading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  let newData = [];
  if (dataBlog && dataBlog.length > 0) {
    newData = dataBlog.slice(0, 10);
  }
  return (
    <>
      {newData &&
        newData.length &&
        newData.map((item) => (
          <div className="single-blog" key={item.id}>
            <div className="title">{item.title}</div>
            <div className="content">{item.body}</div>
          </div>
        ))}
    </>
  );
};

export default Blog;
