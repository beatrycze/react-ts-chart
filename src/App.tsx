import * as React from 'react';
import './App.css';
import { GraphData } from './data';

const logo = require('./logo.svg');

interface AppProps {
  data: GraphData;
}

class SvgGraphEl extends React.Component {
  render() {
    return (
      <svg>
        <rect x="50" y="150" width="100" height="200" fill="#3c66a8" />
        <text x="19%" y="330" text-anchor="middle">2</text>
        <text x="17%" y="380" text-anchor="middle">Top</text>
      </svg>
    );
  }
}

class App extends React.Component<AppProps, {}> {
  render() {
    const {graph2, graph3} = this.props.data;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Graph-container">
          <h3 className="Graph-header">Nomination Tool</h3>
          <svg width="500" height="390">
              <SvgGraphEl />
              {/* <rect x="50" y={350 - graph1.value * 100} width="100" height={graph1.value * 100} fill="#3c66e8" />
              <text x="19%" y="330" text-anchor="middle">{graph1.value}</text>
              <text x="17%" y="380" text-anchor="middle">{graph1.label}</text> */}

              <rect x="200" y={350 - graph2.value * 100} width="100" height={graph2.value * 100} fill="#3c66e8" />
              <text x="49%" y="330" text-anchor="middle">{graph2.value}</text>
              <text x="45%" y="380" text-anchor="middle">{graph2.label}</text>

              <rect x="350" y={350 - graph3.value * 100} width="100" height={graph3.value * 100} fill="#3c66e8" />
              <text x="79%" y="330" text-anchor="middle">{graph3.value}</text>
              <text x="77%" y="380" text-anchor="middle">{graph3.label}</text>

              <line 
                x1="0" 
                y1="350" 
                x2="500"
                y2="350"
                stroke-width="0.2"
                stroke="#878383"
              />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
