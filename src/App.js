import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom';
import HomePage from "./components/Home";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent"
import './style.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : 'null'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/List">List</NavLink>
                </li>
                <li>
                    <NavLink to="/Register">Register</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/Home" element={<HomePage />}/>
                <Route path="/List" element={<ListEmployeeComponent />}/>
                <Route path="/Register" element={<CreateEmployeeComponent/>}/>
                <Route path="/edit-employee/:id" element={<CreateEmployeeComponent/>}/>
                <Route path="*" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
