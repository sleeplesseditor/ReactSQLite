import React, { Component } from 'react';
import './style.css';

/*import Database from '../../../index';

var connection = Database.getConnection();*/

/* 
Potential use of db
var sqlite3 = require('sqlite3').verbose();
let dbSrc = 'us-census.db';

var fetchDBData = (census_learn_sql) => {
    var db = new sqlite3.Database(dbSrc);
    var queries = [];
        db.each("SELECT Name FROM " + census_learn_sql, function(err, row) {
            queries.push(row);
        });

        db.close();
        return queries;
};


*/

class Selector extends Component {
    /* 
    constructor(props) {
        super(props);
        this.state = {};
    }
    */

    render() {
        return(
            <div className="form-group">
                <select className="form-control selector">
                    <option value="" disabled selected>Select your variable</option>
                    <option>{}</option>
                </select>
            </div>
        )
    };
}

export default Selector;