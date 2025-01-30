import { useContext, useState } from "react";
import UserContext from "../userContext";
import { CgProfile } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const ItemList = ({ todo, refresh }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const { newuser } = useContext(UserContext);

  const formattedDate = new Date(todo.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  async function updateTodo() {
    setCompleted(true);
    await fetch(`https://todoserver-w74l.onrender.com/api/todo/${todo.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${newuser.token}`,
      },
    });
    console.log("Todo updated");
    refresh();
  }

  async function deleteTodo() {
    await fetch(`https://todoserver-w74l.onrender.com/api/todo/${todo.id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${newuser.token}`,
      },
    });
    refresh();
    console.log("Todo deleted");
  }

  return (
    <div className="h-[200px] w-[400px] space-y-5 rounded-lg bg-black p-5 text-white">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <h3>{todo.title}</h3>
          <p>{formattedDate}</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-6">
          <SiTicktick
            color="green"
            size="25"
            onClick={() => updateTodo()}
            className="cursor-pointer"
          />
          <MdDeleteOutline
            color="red"
            size="25"
            onClick={() => deleteTodo()}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-3">
        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-cyan-200">
          <CgProfile color="black" />
        </div>
        <div className="h-[5px] w-[5px] rounded-full bg-green-400"></div>
        <p className="text-gray-500">
          {completed ? "Completed" : "In progress"}
        </p>
      </div>
      <div className="space-y-3">
        <div
          className={`h-[10px] w-full rounded-full border border-gray-500 ${completed ? "bg-cyan-200" : ""} `}
        ></div>
        <div className="flex flex-row items-center justify-between">
          <p>{todo.description}</p>
          <span>{completed ? "100%" : "0%"}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
