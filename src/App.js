import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Payments from './components/payments';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
     <Header className="header"/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/payments" element={<Payments/>} />
      
    </Routes>
     <Footer className="footer"/>
    </BrowserRouter>
      
      
      
     
      
    

    

    
    
  );
}

export default App;
