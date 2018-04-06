const sqlite3 = require('sqlite3').verbose();

//Set up as exported function to be imported in React components?
/* module.exports = {

}
*/

//Open Database in read only mode for safety
let db = new sqlite3.Database('./us-census.db', sqlite3.OPEN_READONLY, (err) => {
   if (err) {
       console.error(err.message);
   }
   console.log('Connected to US Census Database.');
});

//Select Column Headers for Selector Component
db.each('SELECT rowid AS id, info FROM census_learn_sql', function(err, row) {

});

//Place in .each function?

//SQLite AVG Function for Age column
db.each('SELECT avg(val) FROM census_learn_sql', function (err, row) {

});

//Close database
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close connection to US Census Database.');
});
