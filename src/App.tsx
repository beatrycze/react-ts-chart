import * as React from 'react';
import './App.css';
import { Graph } from './data';
import SvgGraphEl from './SvgGraphEl';

const logo = require('./logo.svg');

interface AppProps {
  data: Graph[];
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { data } = this.props;
    const MapedSvgElements = data.map((element, index) => {
      let xRectPosition = 50 + index * 150;
      let yRectPosition = 350 - element.value * 100;
      let heightRect = element.value * 100;
      let xTextPosition = `${20 + index * 30}%`;

      return (
        <SvgGraphEl 
          xRect={xRectPosition}
          yRect={yRectPosition}
          height={heightRect}
          value={element.value}
          label={element.label}
          xText={xTextPosition}
        />
      );      
    }
      
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
