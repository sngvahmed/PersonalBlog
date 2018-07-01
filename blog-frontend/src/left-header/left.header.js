import React, { Component } from 'react';
import './left.header.css';

class LeftHeaderComponent extends Component {
    render() {
        return (
            <div className="left-column">
                <div className="card">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg">Image</div>
                    <p>Some text..</p>
                </div>
                <div className="card">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg" >Image</div>
                    <p>Some text..</p>
                </div>
            </div>

        );
    }
}

export default LeftHeaderComponent;
