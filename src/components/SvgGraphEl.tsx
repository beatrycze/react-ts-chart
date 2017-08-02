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

class SvgGraphElComponent extends React.Component<Props, {}> {
  render() {
    return (
      <g>
        <rect
          x={this.props.xRect}
          y={this.props.yRect}
          width={this.props.width}
          height={this.props.height}
          fill="#3c66a8" 
        />
        <text
          x={this.props.xText}
          y={this.props.yTextValue}
          textAnchor="middle"
        >
          {this.props.value}
        </text>
        <text
          x={this.props.xText}
          y={this.props.yTextLabel}
          textAnchor="middle"
        >
          {this.props.label}
        </text>
      </g>
    );
  }
}

export default SvgGraphElComponent;
