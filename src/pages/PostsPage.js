import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/posts/thunks";
import { selectCharacters } from "../store/posts/selectors";

const PostsPage = () => {
  //Goal: Display a list of posts on the Posts Page
  //Problem:
  //1. The data has to be managed by Redux
  //2. The data has to be fetched

  //Steps -> TODO
  //1. Write a thunk and make an axios request
  //2. Import thunk and call it inside useEffect
  //3. Dispatch action in thunk and update the state in slice

  const dispatch = useDispatch();

  const characters = useSelector(selectCharacters);
  console.log("chars selector component", characters);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts Page</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {characters &&
          characters.map((char) => {
            return (
              <div>
                <Link to={`/post/${char.id}`}>
                  <h3>{char.name}</h3>
                </Link>
                <img style={{ width: 200 }} src={char.imageUrl} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostsPage;
