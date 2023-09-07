import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/*" element="404 page not found" />
        </Routes>
    </div>
  );
}

export default App;
