import Todos from "./Todos";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="h-full w-11/12 sm:w-9/12 md:w-1/2">
        <Todos />
      </div>
    </div>
  );
}

export default App;
