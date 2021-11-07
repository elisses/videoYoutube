import './App.css';
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import store from './store/index'
import { Provider } from 'react-redux'
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar />
          <Player />
        </Provider>
      </div>
    );
  }

}

export default App;
