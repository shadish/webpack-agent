import * as React from 'react';
import '../css/some-style.css';
import '../less/style.less';
import * as monster_cat from "../images/monster_cat.png";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
        <span className="tigerLabel">Tiger</span>
        <monster_cat />
      </div>
    );
  }
}
