import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Edit from './components/Edit';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Router>
        <Routes>
          <Route 
          path='/'
          element={<Hero/>}
          />
          <Route 
          path='/Edit'
          element={ <Edit/>}
          />
           <Route 
          path='/Add'
          element={<Add/>}
          />
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
