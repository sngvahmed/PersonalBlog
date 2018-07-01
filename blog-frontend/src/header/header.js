import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './header.css';

class HeaderComponent extends Component {
	render() {
		return (
            <div className="header row border-radios">
				<h1 className="float-left col-md-11 title"> 
					Welcome, in Nasser Blog 
				</h1>

				<Button className="col-md-1" color="success">Login</Button>
            </div>
		);
	}
}

export default HeaderComponent;
