import * as React from 'react';
import './App.css';
import { Graph } from './chart/chart';
import SvgGraphEl from './SvgGraphEl';
import GraphContainer from './GraphContainer';
import { staticParams } from './graph-params';
import { getChartSize } from './chart/chart-size';

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

    const graphParams = getChartSize(staticParams, graphData);
    
    const MapedSvgElements = graphData.map((element, index) =>
      (
        <SvgGraphEl 
          xRect={(index + 0.25) * graphParams.svg.width / graphData.length}
          yRect={graphParams.svg.height - element.value * graphParams.heightCalc}
          height={element.value * graphParams.heightCalc}
          width={graphParams.svg.width / graphData.length / 2}
          xText={(index + 0.50) * graphParams.svg.width / graphData.length}
          yTextValue={graphParams.svg.height - staticParams.textPositionCalc}
          yTextLabel={graphParams.svg.height + staticParams.textPositionCalc}
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
          <svg className="position" width={graphParams.svg.width} height={graphParams.svg.height}>
              {MapedSvgElements}
              <line 
                x1="0" 
                y1={graphParams.svg.height} 
                x2={graphParams.svg.width}
                y2={graphParams.svg.height}
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
