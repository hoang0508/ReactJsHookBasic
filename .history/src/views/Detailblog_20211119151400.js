import { useParams } from "react-router";
const DetailsBlog = () => {
  let { id } = useParams();
  return (
    <>
      <h1>hello word width id = {id}</h1>
    </>
  );
};
export default DetailsBlog;
