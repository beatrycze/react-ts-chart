import * as React from 'react';

interface Props {
  x: number;
  value: number;
  label: string;
}

class SvgGraphElCmponent extends React.Component<Props, {}> {
  render() {
    return (
      <svg>
        <rect x="50" y={350 - this.props.value * 100} width="100" height={this.props.value * 100} fill="#3c66a8" />
        <text x="19%" y="330" textAnchor="middle">{this.props.value}</text>
        <text x="17%" y="380" textAnchor="middle">{this.props.label}</text>
      </svg>
    );
  }
}

export default SvgGraphElCmponent;
