import "./App.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
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
=======
import Home from "./components/Home/Home";
function App() {
  return (
    <div>
      <Home />
    </div>
>>>>>>> d38702a45d99825d8afb999b18bfbb3bd833c2d4
  );
}

export default App;
