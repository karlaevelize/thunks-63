import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  return (
    <div>
      <NavLink to="/">Posts</NavLink> <NavLink to="/login">Login</NavLink>{" "}
      {token && <NavLink to="/pizzas">Pizzas</NavLink>}
    </div>
  );
};

export default Navbar;
