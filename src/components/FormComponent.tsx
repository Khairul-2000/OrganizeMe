import { useContext } from "react";
import UserContext from "../userContext";
import { useNavigate } from "react-router-dom";

const FormComponent = ({ refresh }) => {
  const navigate = useNavigate();
  const [data] = useContext(UserContext);
  async function addTodo(todo) {
    const result = await fetch(
      "https://todoserver-w74l.onrender.com/api/todo",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      },
    );

    if (result.ok) {
      refresh();
    }
  }
  return (
    <form
      className="mt-9 flex max-w-[455px] flex-row items-center justify-center gap-3 self-center"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const todo = {
          title: formData.get("todo"),
          description: formData.get("description"),
        };
        if (data === null) {
          navigate("/signin");
          return;
        }

        addTodo(todo);
        e.target.reset();
      }}
    >
      <div>
        <label htmlFor="todo">
          <input
            type="text"
            id="todo"
            name="todo"
            className="input mb-[8px]"
            placeholder="Write your next task"
            required
          />
        </label>
        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            className="textarea"
            placeholder="Description"
            rows={10}
            required
          />
        </label>
      </div>
      <button className="flex cursor-pointer flex-row items-center justify-center gap-2 font-bold">
        <img src="plus.png" alt="" width={50} />
      </button>
    </form>
  );
};

export default FormComponent;
