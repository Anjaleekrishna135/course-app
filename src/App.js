import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import Search from './components/Search';
import View from './components/View';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <AddCourse />
      <Search />
      <View />
      <NavBar />
    </div>
  );
}

export default App;
