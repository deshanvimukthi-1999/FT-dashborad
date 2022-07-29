import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css';
import './custom.scss';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <Topbar />
        <div className="container-fluid p-0">
          <div className="row">
          <div class="col-6 col-md-4">
          <Sidebar />
        </div>
        <div class="col-12 col-md-8">
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
    </Router>
   
  );
}

export default App;