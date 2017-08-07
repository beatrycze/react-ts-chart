import * as React from 'react';
import Circle from './TestElement';

interface Props {
  message: string;
}

interface State {
  width: number;
  height: number;
}

class TestContainerComponent extends React.Component<Props, State> {
  private node: any;

  constructor(props: any) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    if (this.node) {
      this.measure();
    }
    // needed, because screen resize doesn't trigger rerendering React Component
    window.addEventListener('resize', () => this.measure());
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.measure());
  }

  measure = () => {
    let containerSize: {width: number, height: number} = this.node.getBoundingClientRect();
    // console.log(containerSize);
    // console.log(containerSize.height, containerSize.width);
    this.setState(
      // alternative with spread operator:
      // {
      // ...this.state,
      // width: containerSize.width,
      // height: containerSize.height
      previousState => {
      return { width: containerSize.width, height: containerSize.height };
    });
  }
  
  // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
  setRef = (node: any) => { // TODO How to declare type different than any
    this.node = node
  }

  render() {
    // console.log(this);
    // console.log(this.state.height);
    return (
      // https://medium.com/@kylpo/all-about-refs-e8d2546d052c
      <div className="Chart-container" ref={this.setRef}>
        <Circle 
          rCircle={this.state.width / 30}
        />
        {this.props.message}
      </div>
    );
  }
}

export default TestContainerComponent;
