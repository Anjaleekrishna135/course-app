import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div>
      <AddCourse />
      <Search />
      <View />
    </div>
  );
}

export default App;
