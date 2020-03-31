// add solution here

var music = []
var musicians = ["justin", "carl", "chester"]
var instruments = ["guitar", "flute", "piano"]

var theBeatlesPlay = function(musicians, instruments){
  for (let i = 0; i < musicians.length; i++){
    const array =   music.push(musicians[i] + " plays " + instruments[i])
  }
    return array
}


console.log(theBeatlesPlay(musicians, instruments))
