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
  xAxisY: number;
  axisYtickPosition: number;
  axisYtickValue: number;
}

class SvgChartElementComponent extends React.Component<Props, {}> {
  render() {
    // object destructuring
    const { xRect, yRect, width, height, xText, yTextValue, yTextLabel, value, label, xAxisY, axisYtickPosition, axisYtickValue } = this.props;
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
          {value}
        </text>
        <text
          x={xText}
          y={yTextLabel}
          textAnchor="middle"
        >
          {label}
        </text>
        <text
          x={xAxisY}
          y={axisYtickPosition}
          textAnchor="middle"
        >
          {axisYtickValue}
        </text>
      </g>
    );
  }
}

export default SvgChartElementComponent;
