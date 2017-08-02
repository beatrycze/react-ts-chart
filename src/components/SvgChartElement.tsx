import * as React from 'react';

interface Props {
  xRect: number;
  yRect: number;
  height: number;
  width: number;
  xText: number;
  yTextValue: number;
  yTextLabel: number;
  value: number;
  label: string;
}

class SvgChartElementComponent extends React.Component<Props, {}> {
  render() {
    const { xRect, yRect, width, height, xText, yTextValue, yTextLabel, label } = this.props; // object destructuring
    return (
      <g>
        <rect
          x={xRect}
          y={yRect}
          width={width}
          height={height}
          fill="#3c66a8" 
        />
        <text
          x={xText}
          y={yTextValue}
          textAnchor="middle"
        >
          {xText}
        </text>
        <text
          x={xText}
          y={yTextLabel}
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    );
  }
}

export default SvgChartElementComponent;
