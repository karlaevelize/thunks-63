import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCharater } from "../store/posts/thunks";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id", id);

  useEffect(() => {
    dispatch(fetchOneCharater(id));
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default PostDetails;
