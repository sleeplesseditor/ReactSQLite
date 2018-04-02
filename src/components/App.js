import React, { Component } from 'react';

import Header from './Header';
import SQLTable from './SQLTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SQLTable />
      </div>
    );
  }
}

export default App;
