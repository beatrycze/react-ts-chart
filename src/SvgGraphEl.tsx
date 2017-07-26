import * as React from 'react';

interface Props {
  x: number;
  value: number;
}

class SvgGraphElCmponent extends React.Component<Props, {}> {
  render() {
    return (
      <svg>
        <rect x="50" y="150" width="100" height="200" fill="#3c66a8" />
        <text x="19%" y="330" textAnchor="middle">2</text>
        <text x="17%" y="380" textAnchor="middle">Top</text>
      </svg>
    );
  }
}

export default SvgGraphElCmponent;
