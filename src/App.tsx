import "./App.css";
import Todos from "./components/Todos";
import TodoModule from "./modules/todo";

function App() {
  const DUMMY_ITEMS = [
    new TodoModule("Learn React"),
    new TodoModule("Learn JS"),
    new TodoModule("Learn TW"),
  ];
  return (
    <div className="App">
      <Todos items={DUMMY_ITEMS} />
    </div>
  );
}

export default App;
