var express = require('express');
var router = express.Router();
var Parser = require('rss-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
/*  parser.parseURL('https://www.reddit.com/.rss', function(err, parsed) {
    console.log(parsed.title);
    //  res.render('index', {data: parsed.feed.entries});

  });*/

  let parser = new Parser({
    customFields: {
      feed: ['title', 'description'],
      item: ['title','link', 'description'],
    }
  });
  //let parser = new Parser();
  parser.parseURL('http://feeds.reuters.com/reuters/technologyNews', function(err, feed) {
    console.log(feed.title);

    feed.items.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link + ':' + entry.description);
  })

  res.render('index', { title: 'NSBE Student Chapter', rss:feed.items});
    /*feed.items.forEach(function(entry) {
      console.log(entry.coAuthor + ':' + entry.subtitle);
    })*/
  })

  //res.render('index', { title: 'NSBE Student Chapter', rss:feed.title });
});



module.exports = router;
