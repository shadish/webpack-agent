import React, { Component } from "react";

export default class SomeComponent extends Component {
	render() {
		var tiger = new Image();
		return (
			<div >
				<div className='tigerLabel'>This is a Tiger.</div>
				<img src={require('../images/harimau.jpg')} />
			</div>
		);
	}
}