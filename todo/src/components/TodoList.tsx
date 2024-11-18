import ItemList from "./ItemList";

const TodoList = ({ todos, refresh }) => {
  console.log("Todos check data: ", todos);
  return (
    <div className="my-[50px] w-full max-w-[750px]">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ItemList todo={todo} key={todo.id} refresh={refresh} />
        ))
      ) : (
        <h1 className="text-center text-3xl">No task available🚨</h1>
      )}
    </div>
  );
};

export default TodoList;
