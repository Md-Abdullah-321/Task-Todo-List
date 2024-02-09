/* eslint-disable react/prop-types */
function AddTodoButton({ setPopup }) {
  const handleClick = () => {
    setPopup(true);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-violet-500 w-full font-medium uppercase rounded-sm p-1 shadow-md mt-2"
    >
      Add Todo
    </button>
  );
}

export default AddTodoButton;
