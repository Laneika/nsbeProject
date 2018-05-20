var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3')



/* GET home page. */
router.get('/', function(req, res, next) {
  let db = new sqlite3.Database('./db/nsbe.db');
  //db.serialize(function () {

    /*db.run('SELECT * FROM Members;')
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

    for (var i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i)
    }
    db.all('SELECT * FROM Post LIMIT 10')
    stmt.finalize()*/
   // db.all('SELECT * FROM Members', [],(err, row)=>{
   let sqlquery = 'SELECT `USER _ID` as uid,\
   `USER _NAME` as uname,\
    POSITION as ps,\
    EMAIL as em,\
    PHONE as ph,\
    PASSWORD as pass\
    FROM Members'


    db.all(sqlquery, [],(err, row)=>{
      if (err) throw err;

        res.render('team', { title: 'NSBE Student Chapter', TeamDatabase: row });
   });
  //  db.each('SELECT EMAIL AS email, PHONE AS ph FROM Members;', function (err, row) {
  //    console.log(row.email + ': ' + row.ph)
  //  })

db.close();

});



module.exports = router;
