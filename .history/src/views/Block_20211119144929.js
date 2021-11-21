import { Link } from "react-router-dom";
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
    newData = dataBlog.slice(0, 9);
  }
  return (
    <>
      <div className="single">
        {newData &&
          newData.length &&
          newData.map((item) => (
            <>
              <div className="single-blog">
                <div className="single-title">{item.title}</div>
                <div className="single-content">{item.body}</div>
                <button className="single-btn">
                  <Link to={`/blog/${item.id}`}>View Details</Link>
                </button>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Blog;
