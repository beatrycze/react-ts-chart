import * as React from 'react';

interface Props {
  rCircle: number;
}

class CircleComponent extends React.Component<Props, {}> {
  render() {
    return (
      <svg>
        <circle cx="100" cy="50" r={this.props.rCircle}/>
      </svg>
    );
  }
}

export default CircleComponent;
