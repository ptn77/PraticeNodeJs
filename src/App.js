import {
  BrowserRouter as Router,
  Route,
}from 'react-router-dom';
import Homepage from "./pages/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
