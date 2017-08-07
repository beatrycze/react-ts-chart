import * as React from 'react';
import './App.css';
import './Media.css';
import { Column } from '../chart/column';
import SvgChartElement from './SvgChartElement';
import TestContainer from './TestContainer';
// import { chartParams } from '../chart/chart-params';
import { chartElementParams } from '../chart/chart-element-params';
import { getChartSize } from '../chart/chart-size';

const logo = require('../logo.svg');

interface AppProps {
  chartData: Column[];
}

interface AppState {
  width: number;
  height: number;
}

class App extends React.Component<AppProps, AppState> {
  private node: any;

  constructor(props: any) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    if (this.node) {
      this.measure();
    }
    // needed, because screen resize doesn't trigger rerendering React Component
    window.addEventListener('resize', () => this.measure());
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.measure());
  }

  measure = () => {
    let containerSize: {width: number, height: number} = this.node.getBoundingClientRect();
    this.setState(
      previousState => {
      return { width: containerSize.width, height: containerSize.height };
    });
  }

  // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
  setRef = (node: any) => { // TODO How to declare type different than any
    this.node = node
  }

  render() {
    const { chartData } = this.props;

    const chartParams = {
      height: this.state.height,
      width: this.state.width,
      spacer: 122, // svg nie wypełnia całej szerokości diva
    };

    const chartSize = getChartSize(chartParams, chartData);
    
    const MapedSvgChartElements = chartData.map((element, index) =>
      (
        <SvgChartElement
          xRect={(index + chartElementParams.xRectCalc) * chartSize.svg.width / chartData.length}
          yRect={chartSize.svg.height - element.value * chartSize.heightCalc}
          height={element.value * chartSize.heightCalc}
          width={chartSize.svg.width / chartData.length / chartElementParams.widthCalc}
          xText={(index + chartElementParams.xTextCalc) * chartSize.svg.width / chartData.length}
          yTextValue={chartSize.svg.height - chartParams.spacer / chartElementParams.yTextValueCalc}
          yTextLabel={chartSize.svg.height + chartParams.spacer / chartElementParams.yTextLabelCalc}
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
          <div className="Chart-container" ref={this.setRef}>
            <h3 className="Chart-header">Nomination Tool</h3>
            <svg className="Svg-position" width={chartSize.svg.width} height={chartSize.svg.height}>
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
