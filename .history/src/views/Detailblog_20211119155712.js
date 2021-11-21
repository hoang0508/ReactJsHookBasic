import { useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
const DetailsBlog = () => {
  let { id } = useParams();
  return (
    <>
      <div className="back-blog">
        <FaArrowLeft /> back
      </div>
      <h1>hello word width id = {id}</h1>
    </>
  );
};
export default DetailsBlog;
