import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"; // router v6 thay thế useHistory
import { FaArrowLeft } from "react-icons/fa";
import useFetch from "../customize/fetch";
import "./blog.scss";
const DetailsBlog = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const {
    data: dataDetailBlog,
    isloading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  console.log(">>> check data details: ", dataDetailBlog);

  const handleBackBlog = () => {
    navigate("/blog"); // cách 1
    // navigate(-1); // cách 2
  };
  return (
    <>
      <button className="back-blog" onClick={handleBackBlog}>
        <FaArrowLeft /> back
      </button>
      <h1>hello word width id = {id}</h1>
    </>
  );
};
export default DetailsBlog;
