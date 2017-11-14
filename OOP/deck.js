/*OOP implementation for deck of cards*/
function Deck(){
    this.suits = [" of Spades"," of Hearts"," of Diamonds"," of Clubs"];
    this.values = ["Ace","King","Queen","Jack","10","9","8","7","6","5","4","3","2"];
    this.deck = [];
    for(var i = 0; i < this.values.length; i++){
        for(var j = 0; j < this.suits.length; j++){
            this.deck.push(this.values[i]+this.suits[j]);
        }
    }
   this.shuffle();
}

Deck.prototype.shuffle = function(){
    
    for(var i = 0; i < this.deck.length; i++){
        var rand_idx = Math.floor(Math.random() * 51);
        var temp = this.deck[i];
        this.deck[i] = this.deck[rand_idx];
        this.deck[rand_idx] = temp;
    }
    return this;
}