import { useContext } from "react";
import UserContext from "../userContext";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ refresh }) => {
  const navigate = useNavigate();
  const { newuser } = useContext(UserContext);
  async function addTodo(todo) {
    const result = await fetch(
      "https://todoserver-w74l.onrender.com/api/todo",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newuser.token}`,
        },
      },
    );

    if (result.ok) {
      refresh();
    }
  }
  return (
    <form
      className="mt-9 flex max-w-[455px] flex-col items-center justify-center gap-3 self-center"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const todo = {
          title: formData.get("todo"),
          description: formData.get("description"),
        };

        console.log(todo);
        if (newuser === null) {
          navigate("/signin");
          return;
        }

        addTodo(todo);
        form.reset();
      }}
    >
      <div>
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            name="todo"
            className="input mb-[8px] w-full"
            placeholder="Write your next task"
            required
          />
        </label>
        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            className="textarea w-full"
            placeholder="Description"
            rows={10}
            required
          />
        </label>
      </div>
      <button className="w-full cursor-pointer rounded-2xl bg-cyan-100 p-2 text-black">
        Add
      </button>
    </form>
  );
};

export default FormComponent;
