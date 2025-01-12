import { useContext, useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import Header from "./Header";
import TodoHero from "./TodoHero";
import TodoList from "./TodoList";
import UserContext from "../userContext";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [data] = useContext(UserContext);

  async function getTodos() {
    try {
      console.log("DATA", data.token);
      if (data.token === null) return;
      const result = await fetch(
        "https://todoserver-w74l.onrender.com/api/todo",
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        },
      );
      const todos = await result.json();
      console.log("TODOS", todos);
      if (result.ok) {
        setTodos(todos.data[0].Todo);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const refreshTodos = () => {
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header data={data} setTodos={setTodos} />
      <section className="mx-auto mt-12 flex flex-col items-center justify-center">
        <TodoHero todos={todos} />
        <FormComponent refresh={refreshTodos} />
        <TodoList todos={todos} refresh={refreshTodos} />
      </section>
    </div>
  );
};

export default Home;
