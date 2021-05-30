import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
