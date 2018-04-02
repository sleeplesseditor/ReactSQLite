import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default census">
                    <span className="navbar-text title">US Census Data</span>
                </nav>
            </div>
        )
    }
}

export default Header;