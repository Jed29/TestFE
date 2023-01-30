import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Login from './views/Login';
import Store from './views/Store'
import ShopingCart from './views/ShopingCart';
import routes from './routes'
function App() {
  let login = localStorage.getItem("login")
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/shopingCart' element={<ShopingCart/>} />
      </Routes>
    </Router>
  );
}

export default App;
