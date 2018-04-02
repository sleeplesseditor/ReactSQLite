const sqlite3 = require('sqlite3').verbose();

//Open Database
let db = new sqlite3.Database('./us-census.db', sqlite3.OPEN_READONLY, (err) => {
   if (err) {
       console.error(err.message);
   }
   console.log('Connected to US Census Database');
});