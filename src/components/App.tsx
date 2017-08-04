import * as React from 'react';
import './App.css';
import './Media.css';
import { Column } from '../chart/column';
import SvgChartElement from './SvgChartElement';
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

    const chartSize = getChartSize(chartParams, chartData);
    
    const MapedSvgChartElements = chartData.map((element, index) =>
      (
        <SvgChartElement
          xRect={(index + 0.25) * chartSize.svg.width / chartData.length}
          yRect={chartSize.svg.height - element.value * chartSize.heightCalc}
          height={element.value * chartSize.heightCalc}
          width={chartSize.svg.width / chartData.length / 2}
          xText={(index + 0.50) * chartSize.svg.width / chartData.length}
          yTextValue={chartSize.svg.height - chartParams.textPositionCalc}
          yTextLabel={chartSize.svg.height + chartParams.textPositionCalc}
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
          <div className="Chart-container" style={{width: chartParams.width, height: chartParams.height}}>
            <h3 className="Chart-header">Nomination Tool</h3>
            <svg className="Chart-position" width={chartSize.svg.width} height={chartSize.svg.height}>
                {MapedSvgChartElements}
                <line
                  x1="0"
                  y1={chartSize.svg.height}
                  x2={chartSize.svg.width}
                  y2={chartSize.svg.height}
                  strokeWidth="1"
                  stroke="#878383"
                />
            </svg>
          </div>

        <TestContainer
          message="Lorem ipsum..." 
        />
      </div>
    );
  }
}

export default App;
