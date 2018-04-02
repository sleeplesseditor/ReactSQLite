import React, { Component } from 'react';

import Header from './Header';
import Selector from './Selector';
import SQLTable from './SQLTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Selector />
        <SQLTable />
      </div>
    );
  }
}

export default App;
