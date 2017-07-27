import * as React from 'react';

interface Props {
  xRect: number;
  yRect: number;
  height: number;
  xText: string;
  value: number;
  label: string;
}

class SvgGraphElCmponent extends React.Component<Props, {}> {
  render() {
    return (
      <g>
        <rect x={this.props.xRect} y={this.props.yRect} width="100" height={this.props.height} fill="#3c66a8" />
        <text x={this.props.xText} y="330" textAnchor="middle">{this.props.value}</text>
        <text x={this.props.xText} y="380" textAnchor="middle">{this.props.label}</text>
      </g>
    );
  }
}

export default SvgGraphElCmponent;
