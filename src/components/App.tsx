import * as React from 'react';
import './App.css';
import './Media.css';
import { Column } from '../chart/column';
import SvgChartElement from './SvgChartElement';
import TestContainer from './TestContainer';
import { getChartSize } from '../chart/chart-size';

const logo = require('../logo.svg');

const CHART_SPACER = 122; // svg nie wypełnia całej szerokości diva

const CHART_XRECT_CALC = 0.25;
const CHART_WIDTH_CALC = 2;
const CHART_XTEXT_CALC = 0.50;
const CHART_YTEXT_CALC = 4;
const CHART_YTEXT_LABEL_CALC = 3;

const CHART_LINE_X1 = '0';
const CHART_LINE_STROKE_WIDTH = '1';
const CHART_LINE_STROKE_COLOR = '#878383';

const CHART_YLINE_Y1 = '0';
const CHART_YLINE_X2 = '0';

interface AppProps {
  chartData: Column[];
}

interface AppState {
  width: number;
  height: number;
  // node: HTMLElement;
}

class App extends React.Component<AppProps, AppState> {
  // TODO ? potem mutuję tę zmienną (źle!)
  private node: any;

  constructor(props: AppProps) {
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
    // 2 zmienne zamiast obiektu
    const { width, height } = this.node.getBoundingClientRect();
    // setState bez użycia callbacka
    this.setState( { width, height } );
  }

  // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
  setRef = (node: any) => { // TODO How to declare type different than any
    this.node = node;
  }

  render() {
    const { chartData } = this.props;

    const chartParams = {
      ...this.state,
      spacer: CHART_SPACER,
    };

    const { heightScale, svgHeight, svgWidth } = getChartSize(chartParams, chartData);

    const svgCapacity = svgWidth / chartData.length;

    const chartElementParams = {
      width: svgCapacity / CHART_WIDTH_CALC,
      yTextValue: svgHeight - chartParams.spacer / CHART_YTEXT_CALC,
      yTextLabel: svgHeight + chartParams.spacer / CHART_YTEXT_LABEL_CALC
    };

    const MapedSvgChartElements = chartData.map( (element, index) => {
      const key = index; // Each child in an array or iterator should have a unique "key" prop.
      const xRect = (index + CHART_XRECT_CALC) * svgCapacity;
      const yRect = svgHeight - element.value * heightScale;
      const height = element.value * heightScale;
      const xText = (index + CHART_XTEXT_CALC) * svgCapacity;
      const yTickPosition = svgHeight - element.value * heightScale + 14; // TODO

      return (
        <SvgChartElement
          key={key}
          xRect={xRect}
          yRect={yRect}
          height={height}
          width={chartElementParams.width}
          xText={xText}
          yTextValue={chartElementParams.yTextValue}
          yTextLabel={chartElementParams.yTextLabel}
          value={element.value}
          label={element.label}
          yTickPosition={yTickPosition}
          yTick={element.value}
        />
      );
    });

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="chart-container" ref={this.setRef}>
            <h3 className="chart-header">Nomination Tool</h3>
            <svg className="svg-position" width={svgWidth} height={svgHeight}>
                {MapedSvgChartElements}
                <line
                  x1={CHART_LINE_X1}
                  y1={svgHeight}
                  x2={svgWidth}
                  y2={svgHeight}
                  strokeWidth={CHART_LINE_STROKE_WIDTH}
                  stroke={CHART_LINE_STROKE_COLOR}
                />
                <line
                  x1={CHART_LINE_X1}
                  y1={CHART_YLINE_Y1}
                  x2={CHART_YLINE_X2}
                  y2={svgHeight}
                  strokeWidth={CHART_LINE_STROKE_WIDTH}
                  stroke={CHART_LINE_STROKE_COLOR}
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
