import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import {Routes, Route} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <h1>React App</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/delete/:id" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
