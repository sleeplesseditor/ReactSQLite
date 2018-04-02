import React, { Component } from 'react';
import './style.css';

class Selector extends Component {
    render() {
        return(
            <div className="form-group">
                <select className="form-control selector">
                    <option value="" disabled selected>Select your option</option>
                </select>
            </div>
        )
    };
}

export default Selector;