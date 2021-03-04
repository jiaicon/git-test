var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res) {
  const text = [];
  var page = req.param('page');
  if (!page) {
    res.json({
      title: null,
      cat: text,
    });
  }
  request(`https://www.85xs.cc/book/douluodalu1/${page}.html`, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      $('.m-post p').each(function () {
        text.push($(this).text());
      });
      let title = '';
      $('.entry-tit h1').each(function() {
        title = $(this).text();
      });
      res.json({
        title,
        cat: text,
      });
    }
  })
});

app.get('/catalogue', function(req, res) {
  request('https://www.85xs.cc/book/douluodalu1/', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      const list = [];
      const xsbox = $('.xsbox').eq(1);
      xsbox.find('ul li').each(function () {
        const _this = $(this).find('a');
        list.push({
          page: _this.attr("href").split('.html')[0].split('/book/douluodalu1/')[1],
          name: _this.text(),
        })
      });
      res.json({
        list,
      });
    }
  })
});

var server = app.listen(2525, function() {
  console.log('listening at: http://localhost:2525');
});
