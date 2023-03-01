// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import Greeting from './components/greeting';
import { useEffect } from 'react';
import { getMessages } from './redux/messages';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMessages());
    }, [dispatch]);
  const message = useSelector((state) => state.message.messages[0]);
  const val = 345
  //console.log(message)
  return (
    <div>
      <h2>React and Rails As one App</h2>
      <NavBar />
      <Routes>
        <Route
          path="/message"
          element={<Greeting prop={message} />}
        />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);