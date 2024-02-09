import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodoButton from "./components/AddTodoButton";
import AddTodoForm from "./components/AddTodoForm";
import SearchAndFilter from "./components/SearchAndFilter";
import Todo from "./components/Todo";
import TodosCounter from "./components/todosCounter";
import { getFilteredTodos } from "./helpers/getFilteredTodos";
import { getSearchedTodos } from "./helpers/getSearchedTodos";

function Todos() {
  const [popup, setPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  let todos = getFilteredTodos(
    useSelector((state) => state),
    filter
  );

  todos = getSearchedTodos(todos, search);

  return (
    <div className="h-full w-full mt-10">
      <SearchAndFilter
        setFilter={setFilter}
        setSearch={setSearch}
        search={search}
      />
      <TodosCounter todos={todos} />
      <AddTodoButton setPopup={setPopup} />
      <Todo todos={todos} />
      {popup && (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-50 flex justify-center items-center opacity-95">
          <AddTodoForm setPopup={setPopup} />
        </div>
      )}
    </div>
  );
}

export default Todos;
