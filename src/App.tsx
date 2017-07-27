import * as React from 'react';
import './App.css';
import { Graph } from './data';
import SvgGraphEl from './SvgGraphEl';

const logo = require('./logo.svg');

interface AppProps {
  graphData: Graph[];
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { graphData } = this.props;
    const xRectPosition = 50;
    const xRectCalc = 150;
    const yRectPosition = 350;
    const yRectCalc = 100;
    const rectHeigh = 100;
    const xTextPosition = 20;
    const xTextCalc = 30;

    const MapedSvgElements = graphData.map((element, index) =>
      (
        <SvgGraphEl 
          xRect={xRectPosition + index * xRectCalc}
          yRect={yRectPosition - element.value * yRectCalc}
          height={element.value * rectHeigh}
          value={element.value}
          label={element.label}
          xText={`${xTextPosition + index * xTextCalc}%`}
        />
      )      
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Graph-container">
          <h3 className="Graph-header">Nomination Tool</h3>
          <svg width="500" height="390">
              {MapedSvgElements}
              <line 
                x1="0" 
                y1="350" 
                x2="500"
                y2="350"
                strokeWidth="0.2"
                stroke="#878383"
              />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
