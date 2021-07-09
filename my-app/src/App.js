import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Service from "./components/Service";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
