import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";

const TodoList = ({ todos, refresh }) => {
  console.log("Todos check data: ", todos);
  const [loading, setLoading] = useState(true);
  console.log("Loading: ", loading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [todos]);

  return (
    <div className="my-[50px] w-full max-w-[750px]">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <ItemList todo={todo} key={todo.id} refresh={refresh} />
            ))
          ) : (
            <h1 className="text-center text-3xl">No task available🚨</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
