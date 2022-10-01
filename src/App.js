// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Israel" profession="CEO">
        <p>This is children props</p>
      </Greet>
      <Greet name="Ruth" profession="Model">
        <button>Action</button>
      </Greet>
      <Greet name="Caesar" profession="Leader" />
    </div>
  );
}

export default App;
