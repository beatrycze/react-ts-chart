import * as React from 'react';
import './App.css';
import { Column } from '../chart/column';
import SvgChartEl from './SvgChartEl';
import TestContainer from './TestContainer';
import { chartParams } from '../chart/chart-params';
import { getChartSize } from '../chart/chart-size';

const logo = require('../logo.svg');

interface AppProps {
  chartData: Column[];
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { chartData } = this.props;

    const graphParams = getChartSize(chartParams, chartData);
    
    const MapedSvgElements = chartData.map((element, index) =>
      (
        <SvgChartEl
          xRect={(index + 0.25) * graphParams.svg.width / chartData.length}
          yRect={graphParams.svg.height - element.value * graphParams.heightCalc}
          height={element.value * graphParams.heightCalc}
          width={graphParams.svg.width / chartData.length / 2}
          xText={(index + 0.50) * graphParams.svg.width / chartData.length}
          yTextValue={graphParams.svg.height - chartParams.textPositionCalc}
          yTextLabel={graphParams.svg.height + chartParams.textPositionCalc}
          value={element.value}
          label={element.label}
        />
      )      
    );

    const divStyle = {
      height: 200,
      width: 200
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="Graph-container" style={{width: chartParams.width, height: chartParams.height}}>
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

        <TestContainer
          message="Lorem ipsum..." 
          style={divStyle}
          width={divStyle.width}
          height={divStyle.height}
        />
      </div>
    );
  }
}

export default App;
