import React, { Component } from "react";

export default class SomeComponent extends Component {
	render() {
		var tiger = new Image();
		return (
			<div >
			<span className='brownish'>Some Component</span>
			<img src={require('../images/harimau.jpg')}/>
			</div>
		);
	}
}