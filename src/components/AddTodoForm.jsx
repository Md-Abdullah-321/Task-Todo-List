/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../features/todoSlice";
import { getCurrentDate } from "../helpers/getCurrentDate";

function AddTodoForm({ setPopup }) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    status: "incomplete",
    priority: "high-priority",
    date: getCurrentDate(),
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClosePopup = () => {
    setPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title === "" || formData.description === "") {
      alert("Please, fill all the input fields.");
      return;
    }
    const newTodo = { ...formData, id: uuidv4() };
    dispatch(addTodo(newTodo));
    setFormData({
      id: "",
      title: "",
      description: "",
      status: "incomplete",
      priority: "high-priority",
      date: getCurrentDate(),
    });
    setPopup(false);
  };

  return (
    <div className="w-11/12 sm:w-9/12 md:w-6/12 h-80 bg-violet-500 flex flex-col p-2 rounded-md">
      <div className="w-full flex justify-end">
        <FaTimes className="cursor-pointer" onClick={handleClosePopup} />
      </div>

      <h1 className="text-center text-lg uppercase font-medium">Create Todo</h1>
      <form className="mt-2">
        <input
          type="text"
          name="title"
          placeholder="Todo title"
          className="w-full py-1 px-2 rounded-sm outline-none"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Todo description"
          className="mt-2 w-full h-24 py-1 px-2 rounded-sm outline-none"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full bg-white px-2 py-1 outline-none"
        >
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full mt-2 bg-white px-2 py-1 outline-none"
        >
          <option value="high-priority">High Priority</option>
          <option value="medium-priority">Medium Priority</option>
          <option value="low-priority">Low Priority</option>
          <option value="no-priority">No Priority</option>
        </select>
      </form>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-violet-950 text-white px-2 py-1 rounded-sm uppercase font-semibold cursor-pointer hover:shadow-lg"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodoForm;
