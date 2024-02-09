/* eslint-disable react/prop-types */
import { countCompletedTodos, countTodos } from "../helpers/Counter";

function TodosCounter({ todos }) {
  return (
    <div className="mt-2 flex flex-col md:flex-row justify-between items-center w-full gap-2">
      <div className="w-full sm:w-1/2 flex justify-between items-center shadow-md">
        <div className="w-1/2 text-center text-xl font-semibold">
          {countTodos(todos)}
        </div>
        <div className="w-1/2 text-center bg-violet-500 py-3 text-sm uppercase">
          Total Todos
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-between items-center shadow-md">
        <div className="w-1/2 text-center text-xl font-semibold">
          {countCompletedTodos(todos)}
        </div>
        <div className="w-1/2 text-center bg-violet-500 text-sm uppercase py-3 sm:py-0.5 lg:py-3">
          Completed Todos
        </div>
      </div>
    </div>
  );
}

export default TodosCounter;
