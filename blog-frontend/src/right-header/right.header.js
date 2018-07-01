import React, { Component } from 'react';
import './right.header.css';

class RightHeaderComponent extends Component {
    constructor() {
        super();
        this.knowledge = [
            ['Java', 'Java Spring'], 
            ['Angular 1', 'Angular 4', 'ReactJs', 'Jquey', 'javascript'],
            ['Docker', 'Ansible'],
            ['Bloch Chain', 'Hyperledger Fabric', 'Composer', 'Cello'],
            ['C++', 'Android', 'Shell Script', 'Python']
        ];
    }

    whoAmAi() {
        return (
            <div>
                I am Ahmed Nasser, 24 years old I am Full Stack developer and block-chain developer at Orange lab Egypt 
                I have over 2 years of experience working in web application. Currently, 
                I work as block-chain developer and web application developer improving products and services for our customers
            </div>
        );
    }

    getListOfKnowledger = (array) => {
        var res = [];
        for (let i = 0; i < array.length; i++) {
            res.push(<span  className="knowledge-item btn" key={array[i]}> {array[i]} </span>);
        }
        return res;
    }

    popularKnowledge = () => {
        var result = [];
        
        var counter = 1;
        for (let i = 0; i < this.knowledge.length; i++) {
            result.push(
                <div key={"knowledger-counter" + counter}>
                    {this.getListOfKnowledger(this.knowledge[i])}
                </div>
            )
            result.push(<hr/>)
            counter++;
        }
        
        return result
    }

    render() {
        return (
            <div className="rightcolumn">
            <div className="card">
                <h2>About Me</h2>
                {this.whoAmAi()}
            </div>
            <div className="card">
                <h3>Popular Knowledge</h3>
                <div>{this.popularKnowledge()}</div>
            </div>
        </div>
        );
    }
}

export default RightHeaderComponent;
