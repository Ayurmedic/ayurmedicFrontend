import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailForm from './components/DetailForm';
import Pres from './components/Pres';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<DetailForm/>} path={"/"}/>
          <Route element={<Pres/>} path={"/pres"}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
