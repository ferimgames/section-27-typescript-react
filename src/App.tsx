import "./App.css";
import Todos from "./components/Todo";

const DUMMY_ITEMS = ["Learn React", "Learn JS", "Learn TW"];

function App() {
  return (
    <div className="App">
      <Todos items={DUMMY_ITEMS} />
    </div>
  );
}

export default App;
