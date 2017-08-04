import * as React from 'react';
import Circle from './TestElement';

interface Props {
  message: string;
  style: {};
  width: number; // width from container div; refer to const divStyle from App.tsx
  height: number; // height from container div...
}

class TestContainerComponent extends React.Component<Props, {}> {
  private node: any;

  measure = () => {
    const containerSize: {width: number, height: number} = this.node.getBoundingClientRect();
    console.log(containerSize);
    console.log(containerSize.height, containerSize.width);
  }

  componentDidMount() {
    if (this.node) {
      this.measure();
    }
  }

  render() {
    console.log(this);

    return (
      <div className="Test-container" ref={(node) => { this.node = node; }}>
        <Circle 
          rCircle={this.props.width / 4}
        /> {/* TODO Passing current (depeded on screen size) width from <div>. How? */}
        {this.props.message}
      </div>
    );
  }
}

export default TestContainerComponent;
