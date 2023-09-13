// import logo from './logo.svg';
// import './App.css';
import Home from './Home'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import UseEffect from './UseEffect';
import GlobalContext from './GlobalContext'


function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br></br>
      <NavLink to="/contact" activeStyle={{color:"red"}}>Contact</NavLink>
      <br></br>
      <Link to="/about" style={{color:"blue"}}>About</Link>
      <Routes>
        <Route path="/" element={<Home message={"Helloo"}/>}></Route>
        <Route path="/contact" element={<UseEffect/>}></Route>
        <Route path="/about" element={<GlobalContext/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
