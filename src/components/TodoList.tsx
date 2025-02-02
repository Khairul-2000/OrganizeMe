import ItemList from "./ItemList";

const TodoList = ({ todos, refresh }) => {
  console.log("Todos check data: ", todos.length > 1);

  return (
    <div className="mt-8">
      <div
        className={`grid ${todos.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-3`}
      >
        {todos.length > 0 &&
          todos.map((todo) => (
            <ItemList todo={todo} key={todo.id} refresh={refresh} />
          ))}
      </div>
      {todos.length === 0 && (
        <h1 className="text-center text-3xl">
          You have no task to do. Create one
        </h1>
      )}
    </div>
  );
};

export default TodoList;
