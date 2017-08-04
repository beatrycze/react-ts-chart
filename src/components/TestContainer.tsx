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

  componentDidMount() {
    if (this.node) {
      this.measure();
    }
  }

  measure = () => {
    let containerSize: {width: number, height: number} = this.node.getBoundingClientRect();
    console.log(containerSize);
    console.log(containerSize.height, containerSize.width);
  }
  
  // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
  setRef = (node: any) => { // TODO How to declare type different than any
    this.node = node
  }

  render() {
    console.log(this);
    return (
      // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
      <div className="Test-container" ref={this.setRef}>
        <Circle 
          rCircle={this.props.width / 4}
        /> {/* TODO Passing current (depeded on screen size) width from <div>. How? */}
        {this.props.message}
      </div>
    );
  }
}

export default TestContainerComponent;
