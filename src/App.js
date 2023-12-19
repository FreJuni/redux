import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";

function App() {
  const login = useSelector((state) => state.auth.isLoading);
  return (
    <div className="App">
      <Todo />
      <NavBar />
      <Login />
      {login && <Counter />}
    </div>
  );
}

export default App;
