var express = require('express');
var router = express.Router();
var cards = require('cards')

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('index', { title: 'Express', 
    deck : deck
  });
});

router.get('/getDeck', function(req,res,next){
  var deck = new cards.PokerDeck();
  deck.shuffleAll()
  res.json(deck)
})

module.exports = router;
