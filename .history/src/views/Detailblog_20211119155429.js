import { useParams } from "react-router";
import { IconName } from "react-icons/fa";
const DetailsBlog = () => {
  let { id } = useParams();
  return (
    <>
      <div className="back-blog">
        <i class="fas fa-long-arrow-alt-left"></i>
      </div>
      <h1>hello word width id = {id}</h1>
    </>
  );
};
export default DetailsBlog;
