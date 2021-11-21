import useFetch from "../customize/fetch";
import "./blog.scss";
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
      <div className="single" key={item.id}>
        {newData &&
          newData.length &&
          newData.map((item) => (
            <div class="single-item">
              <div className="single-title">{item.title}</div>
              <div className="single-content">{item.body}</div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Blog;
