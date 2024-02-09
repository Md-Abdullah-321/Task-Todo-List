/* eslint-disable react/prop-types */
import TodoCart from "./TodoCart";

function Todo({ todos }) {
  const keys = Object.keys(todos);
  return (
    <div className="w-full mt-4">
      {keys.map((date) => {
        if (todos[date] && date !== "_persist") {
          return (
            <div key={date} className="mt-2">
              {todos[date].length > 0 && (
                <p className="text-xs text-gray-600">{date}</p>
              )}
              {todos[date].map((todo) => {
                return <TodoCart key={todo.id} todo={todo} />;
              })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Todo;
