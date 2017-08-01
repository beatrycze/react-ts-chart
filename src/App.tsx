import * as React from 'react';
import './App.css';
import { Graph } from './data';
import SvgGraphEl from './SvgGraphEl';
import GraphContainer from './GraphContainer';
import { staticParams } from './graph-params';
import { calcGraphParams } from './helpers/chart-counting';

const logo = require('./logo.svg');

interface AppProps {
  graphData: Graph[];
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { graphData } = this.props;

    const divStyle = {
      height: 200,
      width: 200
    };

    const graphParams = calcGraphParams(staticParams);
    
    const MapedSvgElements = graphData.map((element, index) =>
      (
        <SvgGraphEl 
          xRect={(index + 0.25) * graphParams.svgWidth / graphData.length}
          yRect={graphParams.svgHeight - element.value * graphParams.heightCalc}
          height={element.value * graphParams.heightCalc}
          width={graphParams.svgWidth / graphData.length / 2}
          xText={(index + 0.50) * graphParams.svgWidth / graphData.length}
          yTextValue={graphParams.svgHeight - staticParams.textPositionCalc}
          yTextLabel={graphParams.svgHeight + staticParams.textPositionCalc}
          value={element.value}
          label={element.label}
        />
      )      
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="Graph-container" style={{width: staticParams.width, height: staticParams.height}}>
          <h3 className="Graph-header">Nomination Tool</h3>
          <svg className="position" width={graphParams.svgWidth} height={graphParams.svgHeight}>
              {MapedSvgElements}
              <line 
                x1="0" 
                y1={graphParams.svgHeight} 
                x2={graphParams.svgWidth}
                y2={graphParams.svgHeight}
                strokeWidth="1"
                stroke="#878383"
              />
          </svg>
        </div>

        <GraphContainer message="Lorem ipsum..." style={divStyle} width={divStyle.width} height={divStyle.height}/>
      </div>
    );
  }
}

export default App;
