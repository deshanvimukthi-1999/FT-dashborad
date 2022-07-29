import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nopage from './Pages/Nopage';
import NotFoundPage from './Pages/NotFoundPage';
import { Menu } from "./Pages/Menu";

function App() {
  return (
    <Router>
    <Topbar />
    <div className="container-fluid">
      <div class="row">
        <div class="col-6 col-md-4">
          <Sidebar />
        </div>
        <div class="col-12 col-md-8">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
              <Route exact path="/nopage">
                <Nopage />
              </Route>
              <Route component={NotFoundPage} />

            </Switch>
          </div>
    </div></div>
    </Router>
  );
}

export default App;