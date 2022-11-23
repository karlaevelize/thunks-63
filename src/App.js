import "./App.css";
import { Routes, Route } from "react-router-dom";
import PizzaList from "./pages/PizzaList";
import PostsPage from "./pages/PostsPage";
import PostDetails from "./pages/PostDetails";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pizzas" element={<PizzaList />} />
      </Routes>
    </div>
  );
}

export default App;
