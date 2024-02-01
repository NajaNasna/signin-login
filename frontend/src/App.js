import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
    <div><Navbar/></div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>

    <div><Footer/></div>
      </Router>
      
    </div>
  );
}

export default App;
