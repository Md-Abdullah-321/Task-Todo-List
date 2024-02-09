import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice";
import EditTodoForm from "./EditTodoForm";

/* eslint-disable react/prop-types */
function TodoCart({ todo }) {
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const statusColor =
    todo.status === "complete"
      ? "font-medium text-green-500"
      : "font-medium text-red-500";

  let priorityColor = "";

  if (todo.priority === "high-priority") {
    priorityColor = "text-red-500";
  } else if (todo.priority === "medium-priority") {
    priorityColor = "text-orange-500";
  } else if (todo.priority === "low-priority") {
    priorityColor = "text-yellow-500";
  } else {
    priorityColor = "text-gray-500";
  }
  return (
    <div className="w-full h-full mt-1 shadow-sm">
      <div className="w-full border-violet-500 border-4 p-1 rounded-sm flex justify-between items-center">
        <div className="w-9/12">
          <h3 className="text-sm">
            <span className="font-medium">Title: </span>
            {todo.title}
          </h3>
          <p className="text-xs">
            <span className="font-medium">Description: </span>
            {todo.description}
          </p>
          <p className="text-xs">
            <span className="font-medium">Priority: </span>
            <span className={priorityColor}>{todo.priority}</span>
          </p>
          <p className="text-xs">
            <span className="font-medium">Status: </span>
            <span className={statusColor}>{todo.status}</span>
          </p>
        </div>
        <div className="w-3/12 h-full flex flex-col items-end gap-y-4 text-xs">
          <button
            onClick={() => setPopup(true)}
            className="bg-green-500 px-4 py-0.5 rounded-sm cursor-pointer hover:shadow-md uppercase"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-2 py-0.5 rounded-sm cursor-pointer hover:shadow-md uppercase"
          >
            Delete
          </button>
        </div>
      </div>

      {popup && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-50 flex justify-center items-center opacity-95">
          <EditTodoForm todo={todo} setPopup={setPopup} />
        </div>
      )}
    </div>
  );
}

export default TodoCart;
