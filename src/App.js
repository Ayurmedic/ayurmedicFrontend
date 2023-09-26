import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Pres from './components/Pres';
import { Provider } from "react-redux"
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route element={<About/>} path={"/"}/>
          <Route element={<Pres/>} path={"/pres"}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
