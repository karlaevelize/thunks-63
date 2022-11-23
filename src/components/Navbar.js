import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <NavLink to="/">Posts</NavLink> <NavLink to="/login">Login</NavLink>{" "}
      <NavLink to="/pizzas">Pizzas</NavLink>{" "}
    </div>
  );
};

export default Navbar;
