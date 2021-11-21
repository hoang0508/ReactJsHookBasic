import { useParams, useHistory } from "react-router";

import { FaArrowLeft } from "react-icons/fa";
import "./blog.scss";
const DetailsBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  return (
    <>
      <button className="back-blog">
        <FaArrowLeft /> back
      </button>
      <h1>hello word width id = {id}</h1>
    </>
  );
};
export default DetailsBlog;
