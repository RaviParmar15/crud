import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route  path='/create' element={<Create/>}></Route>
      <Route  path='/read' element={<Read/>}></Route>
      <Route path='/update' element={<Update/>}></Route>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
