import done from "/done-icon.png";
import delete_logo from "/delete.png";
import { useContext, useState } from "react";
import UserContext from "../userContext";

const ItemList = ({ todo, refresh }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [data] = useContext(UserContext);

  async function updateTodo() {
    setCompleted(true);
    await fetch(`https://todoserver-w74l.onrender.com/api/todo/${todo.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    console.log("Todo updated");
    refresh();
  }

  async function deleteTodo() {
    await fetch(`https://todoserver-w74l.onrender.com/api/todo/${todo.id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });
    refresh();
    console.log("Todo deleted");
  }

  return (
    <div className="my-[10px] flex items-center justify-between gap-3 border border-green-300 p-3 shadow-md shadow-orange-400">
      <div className="flex items-center gap-2">
        <div
          className={`h-[20px] w-[20px] rounded-full ${completed ? "bg-green-400" : "border-[2px] border-green-300"}`}
        ></div>
        <div>
          <h2 className={`text-orange-200 ${completed ? "line-through" : ""}`}>
            {todo.title}
          </h2>
          <p>{todo.description}</p>
        </div>
      </div>
      <div className="space-x-1 bg-white">
        <button className="rounded-md p-2" onClick={() => updateTodo()}>
          <img src={done} alt="logo" className="w-[40px]" />
        </button>
        <button
          className="rounded-md p-2"
          onClick={() => {
            deleteTodo();
          }}
        >
          <img src={delete_logo} alt="" className="w-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default ItemList;
