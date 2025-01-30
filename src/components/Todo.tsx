import { useContext, useEffect } from "react";
import FormComponent from "./FormComponent";
import TodoHero from "./TodoHero";
import TodoList from "./TodoList";
import UserContext from "../userContext";
import { getTodos } from "../lib/getTodo";

const Todo = () => {
  const { newuser, todos, setTodos } = useContext(UserContext);
  console.log("Check from Todo, checking Data: ", newuser);

  const refreshTodos = () => {
    getTodos(newuser, setTodos);
  };

  useEffect(() => {
    getTodos(newuser, setTodos);
  }, []);

  return (
    <div className="min-h-screen w-full p-4">
      <section className="mx-auto mt-12 flex flex-col items-center justify-center">
        <TodoHero todos={todos} />
        <FormComponent refresh={refreshTodos} />

        <TodoList todos={todos} refresh={refreshTodos} />
      </section>
    </div>
  );
};

export default Todo;
