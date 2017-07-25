import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    const {graph1, graph2, graph3} = this.props.data;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Graph-container">
          <h3 className="Graph-header">Nomination Tool</h3>
            <svg width="150" height={graph1.value * 100} viewBox="0 0 100 200">
              <rect x="10" y="0" width="100" height="200" fill="#3c66e8" />
              <text x="50%" y="190" text-anchor="middle">{graph1.value}</text>
            </svg>
            <svg width="150" height={graph2.value * 100} viewBox="0 0 100 300">
              <rect x="10" y="0" width="100" height="300" fill="#3c66e8" />
              <text x="50%" y="290" text-anchor="middle">{graph2.value}</text>
            </svg>
            <svg width="150" height={graph3.value * 100} viewBox="0 0 100 100">
              <rect x="10" y="0" width="100" height="100" fill="#3c66e8" />
              <text x="50%" y="90" text-anchor="middle">{graph3.value}</text>
            </svg>
            <svg width="500" height="5" viewBox="0 0 500 5">
              <line x1="0" y1="0" x2="500" y2="0"
                stroke-width="0.2" stroke="#878383"/>
            </svg>
            <div>
              <div className="Graph-label">{graph1.label}</div>
              <div className="Graph-label">{graph2.label}</div>
              <div className="Graph-label">{graph3.label}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
