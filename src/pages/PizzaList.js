import { selectPizzas } from "../store/pizzas/selectors";
import { selectUser } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/user/slice";
import AddPizzaForm from "../components/AddPizzaForm";
import Restaurants from "../components/Restaurants";
import { useState } from "react";

const PizzaList = () => {
  //1. Display a list of pizzas -> write a selector, import selector, map
  //2. Add a new pizza ->
  //3. User slice
  //4. Toggle favorite
  //5. Delete a pizza

  const [displayForm, setDisplayForm] = useState(false);
  const [displayRestaurants, setDisplayRestaurants] = useState(false);

  const dispatch = useDispatch();

  const pizzas = useSelector(selectPizzas);

  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <button onClick={() => setDisplayForm(!displayForm)}>Add a Pizza</button>
      <button onClick={() => setDisplayRestaurants(!displayRestaurants)}>
        See Restaurants
      </button>
      {displayForm && <AddPizzaForm />}
      {displayRestaurants && <Restaurants />}
      {!pizzas
        ? "Loading"
        : pizzas.map((pizza) => {
            return (
              <div style={{ maxWidth: 300, margin: "auto" }} key={pizza.id}>
                <h3>{pizza.name}</h3>
                <button onClick={() => dispatch(toggleFavorite(pizza.id))}>
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
                <p>Bought: {pizza.bought}</p>
                <img style={{ width: 200 }} src={pizza.image} />
                <p>{pizza.description}</p>
              </div>
            );
          })}
    </div>
  );
};

export default PizzaList;
