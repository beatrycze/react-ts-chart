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

  handleSomething() {
    console.log(this.node);
  }

  measure = () => {
    const containerSize: {} = this.node.getBoundingClientRect();
    console.log(containerSize);
  }
  
  // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
  // doesn't work
  // setRef = (node) => {
  //   this.node = node
  // }

  componentDidMount() {
    if (this.node) {
      this.measure(); // TODO how to get access to element width & height
    }
  }

  render() {
    console.log(this);
    console.log(this.refs);
    // console.log(this.refs.size); // undefined
    // console.log(this.refs.size.clientWidth); // can not find this property, compilation errror
    // console.log(this.node.clientWidth); // can not find this property, compilation errror
    // console.log(this.node.childNodes.length); // can not find this property, compilation errror

    // this.measure();

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
