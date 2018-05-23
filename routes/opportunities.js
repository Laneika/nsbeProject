var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3')

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('opportunities', { title: 'NSBE Student Chapter' });
});

router.get('/', function(req, res, next) {
  let db = new sqlite3.Database('./db/nsbe.db');

  let sqlquery = 'SELECT * FROM Opportunities'

    db.all(sqlquery, [],(err, row)=>{
      if (err) throw err;

      res.render('mentors', { title: 'NSBE Student Chapter', OpportunitiesDatabase: row });

db.close();

 });
module.exports = router;*/

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
   let sqlquery = 'SELECT * FROM Opportunities'

    db.all(sqlquery, [],(err, row)=>{
      if (err) throw err;

        res.render('opportunities', { title: 'NSBE Student Chapter', OpportunitiesDatabase: row });
   });
  //  db.each('SELECT EMAIL AS email, PHONE AS ph FROM Members;', function (err, row) {
  //    console.log(row.email + ': ' + row.ph)
  //  })

db.close();

});

module.exports = router;
