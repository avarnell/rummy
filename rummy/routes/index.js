var express = require('express');
var router = express.Router();
var cards = require('cards')

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express'
  });
});

router.get('/getDeck', function(req,res,next){
  var deck = new cards.PokerDeck();
  deck.shuffleAll()
  res.json(deck)
})


router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public'
  })
});


module.exports = router;
