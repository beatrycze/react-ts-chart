import * as React from 'react';
import Circle from './test';

interface Props {
  message: string;
  style: {};
  width: number; // width from container div; refer to const divStyle from App.tsx
  height: number; // height from container div...
}

class GraphContainerComponent extends React.Component<Props, {}> {
  render() {
    // console.log(this);
    return (
      <div style={this.props.style}>
        <Circle rCircle={this.props.width / 4}/>
        {this.props.message}
      </div>
    );
  }
}

export default GraphContainerComponent;
