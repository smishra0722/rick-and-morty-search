import React from 'react';
import './App.css';

import Homepage from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    )
  }
}

export default App;
