import * as React from 'react';
import Circle from './TestElement';

interface Props {
  message: string;
  style: {};
  width: number; // width from container div; refer to const divStyle from App.tsx
  height: number; // height from container div...
}

class TestContainerComponent extends React.Component<Props, {}> {
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

export default TestContainerComponent;
