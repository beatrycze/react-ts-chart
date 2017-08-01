import * as React from 'react';
import './App.css';
import { Graph } from './data';
import SvgGraphEl from './SvgGraphEl';
import GraphContainer from './GraphContainer';

const logo = require('./logo.svg');

interface AppProps {
  graphData: Graph[];
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { graphData } = this.props;

    // const calc = 100;
    const maxRect: Graph = graphData.reduce((prev: Graph, current: Graph) => (prev.value > current.value) ? prev : current);
    // const svgHeight = maxRect.value * calc;
    // const svgWidth = 150 * graphData.length + 50;

    // const xRectPosition = 50;
    // const xRectCalc = 150;
    const xTextValueCalc = 40;
    const yTextLabelCalc = 40;

    const containerStyle = {
      height: 600,
      width: 1200
    };

    const containerSpacer = 50; // svg nie wypłenia całej szerokości diva
    const heightCalc = (containerStyle.height - containerSpacer / 2) / maxRect.value;
    // console.log(heightCalc);
    const widthCalc = (containerStyle.width - containerSpacer) / graphData.length;
    // console.log(widthCalc);
    const svgHeight = heightCalc * maxRect.value;
    const svgWidth = widthCalc * graphData.length;


    const divStyle = {
      height: 200,
      width: 200
    };

    const MapedSvgElements = graphData.map((element, index) =>
      (
        <SvgGraphEl 
          xRect={(index + 0.25) * svgWidth / graphData.length}
          yRect={svgHeight - element.value * heightCalc}
          height={element.value * heightCalc}
          width={svgWidth / graphData.length / 2}
          xText={(index + 0.50) * svgWidth / graphData.length}
          yTextValue={svgHeight - xTextValueCalc}
          yTextLabel={svgHeight + yTextLabelCalc}
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
        <div className="Graph-container" style={containerStyle}>
          <h3 className="Graph-header">Nomination Tool</h3>
          <svg className="position" width={svgWidth} height={svgHeight}>
              {MapedSvgElements}
              <line 
                x1="0" 
                y1={svgHeight} 
                x2={svgWidth}
                y2={svgHeight}
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
