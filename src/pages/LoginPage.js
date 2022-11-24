import { useDispatch } from "react-redux";
import { login } from "../store/user/thunks";
import { logout } from "../store/user/slice";

const LoginPage = () => {
  //GOALS
  //1. Implement login
  //2. Persist login after refreshing the page

  //Steps:
  //1. Write a thunk and make an axios request
  //2. console.log the response
  //3. dispatch thunk in the component (onClick in button)
  // // ex: dispatch(login("kelley@codaisseur.com", "abcd"))
  //4. Write a reducer (case) in the slice and console.log action
  //5. Dispatch the action in the thunk
  //6. Write the logic to update the store
  //7. Write a selector for user and token

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => dispatch(login("kelley@codaisseur.com", "abcd"))}>
        Click here to test login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default LoginPage;
