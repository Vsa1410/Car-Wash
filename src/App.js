import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Payments from './components/payments';
import AddNew from './components/addNew';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import AddNewUser from './components/addNewUser';
import Saldo from './components/saldo';



function App() {
  return (
    <BrowserRouter>
     <Header className="header"/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/payments" element={<Payments/>} />
      <Route path="/new" element={<AddNew/>} />
      <Route path="/saldo" element={<Saldo/>}/>
      <Route path="/addnewuser" element={<AddNewUser/>}/>

      
    </Routes>
    
     <Footer className="footer"/>
    </BrowserRouter>
      
      
      
     
      
    

    

    
    
  );
}

export default App;
