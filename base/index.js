const sqlite3 = require('sqlite3').verbose();

//Open Database in read only mode for safety
let db = new sqlite3.Database('./us-census.db', sqlite3.OPEN_READONLY, (err) => {
   if (err) {
       console.error(err.message);
   }
   console.log('Connected to US Census Database.');
});

//Select Column Headers for Selector Component


//Close database
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close connection to US Census Database.');
});

//SQLite AVG Function