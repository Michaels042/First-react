// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
function App() {
  return (
    <div className="App">
      <FunctionClick />
      <PersonList />
      <Greet name="Israel" profession="CEO">
        <p>This is children props</p>
      </Greet>
      <Greet name="Ruth" profession="Model">
        <button>Action</button>
      </Greet>
      <Greet name="Caesar" profession="Leader" />
      <NameList />
    </div>
  );
}

export default App;
