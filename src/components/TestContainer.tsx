import * as React from 'react';
import Circle from './TestElement';

interface Props {
  message: string;
  style: {};
  width: number; // width from container div; refer to const divStyle from App.tsx
  height: number; // height from container div...
}

class TestContainerComponent extends React.Component<Props, {}> {
  private el: any;

  handleSomething() {
    console.log(this.el);
  }

  render() {
    // console.log(this);
    // let refs = this.refs;
    // console.log(refs);
    return (
      <div className="Test-container">
        <Circle 
          rCircle={this.props.width / 4}
          ref={(element) => { this.el = element; }}
        /> {/* TODO Passing current (depeded on screen size) width from <div>. How? */}
        {this.props.message}
      </div>
    );
  }
}

export default TestContainerComponent;
