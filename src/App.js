
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar';
import HomePage from './Pages/homePage';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import AddUser from './User/addUser';
import EditUser from './User/editUser';
import ViewUser from './User/viewUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route excat path="/" element = {<HomePage/>}/>
          <Route excat path="/adduser" element = {<AddUser/>}/>
          <Route excat path="/edituser/:id" element = {<EditUser/>}/>
          <Route excat path="/viewuser/:id" element = {<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
