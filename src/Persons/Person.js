import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    
    render() {

        return (
            <div className="Person">
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p><input type="text" onChange={this.props.change}  value={this.props.name} /></p>
                <button className="btnNormal" onClick={this.props.click}>Click Me!</button>
                <button className="btnDanger" onClick={this.props.delete}>Delete Me!</button>
                {this.props.children}
            </div>
        );
    }
}

export default Person;