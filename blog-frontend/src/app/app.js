import React, { Component } from 'react';
import './app.css';
import HeaderComponent from './../header/header';
import RightHeaderComponent from './../right-header/right.header'
import LeftHeaderComponent from './../left-header/left.header'

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeaderComponent />

				<div className="row">
					<LeftHeaderComponent />
					<RightHeaderComponent />
				</div>
			</div>
		);
	}
}

export default App;
