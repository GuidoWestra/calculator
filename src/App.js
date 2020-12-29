import "./App.css";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App-header">
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
