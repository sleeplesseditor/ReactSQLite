import React, { Component } from 'react';
import './style.css';

class SQLTable extends Component {
    render() {
        return (
            <div>
                <table className="table table-hover census-table">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Count</th>
                            <th>Average Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                </table>
            </div>
        )
    } 
}

export default SQLTable;