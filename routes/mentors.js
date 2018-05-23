var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3')

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('mentors', { title: 'NSBE Student Chapter' });
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
   //let sqlquery = "select Mentors.FIRST_NAME, Mentors.LAST_NAME, Expertise.Expertise_Name, Expertise.URL FROM Mentors INNER JOIN Mentor_Expertise ON Mentors.Mentor_id = Mentor_Expertise.Mentor_id INNER JOIN Expertise ON Mentor_Expertise.Expertise_id = Expertise.Expertise_id WHERE Expertise.Expertise_Name LIKE ?"
   let sqlquery = 'SELECT * FROM Mentors'
  //let sqlquery = 'select Mentors.FIRST_NAME, Mentors.LAST_NAME, Expertise.Expertise_Name, Expertise.URL FROM Mentors INNER JOIN Mentor_Expertise ON Mentors.Mentor_id = Mentor_Expertise.Mentor_id INNER JOIN Expertise ON Mentor_Expertise.Expertise_id = Expertise.Expertise_id'

    db.all(sqlquery, [],(err, row)=>{
      if (err) throw err;

        res.render('mentors', { title: 'NSBE Student Chapter', MentorsDatabaseGet: row ,MentorsDatabasePost: "" });
   });
  //  db.each('SELECT EMAIL AS email, PHONE AS ph FROM Members;', function (err, row) {
  //    console.log(row.email + ': ' + row.ph)
  //  })

db.close();

});

router.post('/', function(req, res) {
  var ExpertiseSearch = req.body.ExpertiseSearch;
  let db = new sqlite3.Database('./db/nsbe.db');
  let sqlquery = "select Mentors.FIRST_NAME, Mentors.LAST_NAME, Expertise.Expertise_Name, Expertise.URL FROM Mentors INNER JOIN Mentor_Expertise ON Mentors.Mentor_id = Mentor_Expertise.Mentor_id INNER JOIN Expertise ON Mentor_Expertise.Expertise_id = Expertise.Expertise_id WHERE Expertise.Expertise_Name LIKE ?"

  db.all(sqlquery, ["%" + ExpertiseSearch + "%"],(err, row)=>{
    if (err) throw err;

      res.render('mentors', { title: 'NSBE Student Chapter', MentorsDatabasePost: row , MentorsDatabaseGet: ""});
 });

 db.close();
  });


module.exports = router;
