// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import Greeting from './components/greeting';

function App() {
  return (
    <div>
      <h2>React and Rails As one App</h2>
      <NavBar />
      <Routes>
      <Route
        path="/"
        element={<Greeting />}
      />  
      </Routes> 
    </div>
  );
}

ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root'),
);