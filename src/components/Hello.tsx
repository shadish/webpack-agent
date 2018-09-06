import * as React from 'react'
import '../css/some-style.css'
import '../less/style.less'
import '../fonts/Quicksand/Quicksand-Medium.ttf'
import '../fonts/Josefin_Sans/JosefinSans-SemiBold.ttf'

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {

    const monster_cat = require('../images/monster_cat.png')

    return (
      <div className="mainBody">
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <span className="logoLabel">Some Logo (quicksand font)</span>
        <img src={monster_cat} />
      </div>
    );
  }
}
