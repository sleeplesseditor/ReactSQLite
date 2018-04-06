import React, { Component } from 'react';
import Selector from './Selector';
import './style.css';

/* Potentially import database as exported function here to populate table */


class SQLTable extends Component {
    render() {

        /* State implementation to be added here once database issue resolved 
        Action creators and reducers to be placed in relevant folders in components directory
        */
       
        /* shouldComponentUpdate()
        }; */

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