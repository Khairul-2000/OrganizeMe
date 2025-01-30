export async function getTodos(data, setTodos) {
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
      console.log("TODOS", todos.data[0].Todo);
      setTodos(todos.data[0].Todo);
    }
  } catch (error) {
    console.log(error);
  }
}
