import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Home className="home"/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
