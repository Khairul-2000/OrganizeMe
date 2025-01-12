const TodoHero = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed === true);
  return (
    <div className="flex w-11/12 max-w-[455px] items-center justify-around self-center rounded-xl border-[3px] border-[#c2b39a] p-[12px] shadow-md shadow-orange-400">
      <div>
        <p className="text-2xl font-bold">Task Done</p>
        <p className="text-xl">Keep it up</p>
        {completedTodos.length === todos.length && todos.length > 0 && (
          <p className="animate-pulse text-xl font-bold">
            🎉You are doing great🎉
          </p>
        )}
      </div>
      <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#88ab33] text-5xl">
        {completedTodos.length} /{todos.length}
      </div>
    </div>
  );
};

export default TodoHero;
