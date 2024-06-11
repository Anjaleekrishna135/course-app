import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import Search from './components/Search';
import View from './components/View';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCourse />} />
        <Route path='/search' element={<Search />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
