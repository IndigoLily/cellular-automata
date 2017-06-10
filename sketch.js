function ruleNum( n ) {
  if( n > 255 ) {
    n = 255;
  } else if( n < 0 ) {
    n = 0;
  }
  var r = n.toString(2).split("");
  for( let i = 0; i < r.length; i++ ) {
    r[i] = Number( r[i] );
  }
  while( r.length < 8 ) {
    r.unshift( 0 );
  }
  return r;
}

function neighbours( array ) {
  var nbors = [];
  for( let i = 0; i < array.length; i++ ) {
    let nbor = '';
    
    nbor += ( array[i-1] === undefined ) ? 0 : array[i-1];
    nbor += array[i];
    nbor += ( array[i+1] === undefined ) ? 0 : array[i+1] ;
    nbor = parseInt( nbor, 2 );
    // nbor = 7 - nbor;
    nbors.push( nbor );
  }
  return nbors;
}

function nextPerm( array, rule ) {
  var output = [];
  var patterns = neighbours( array );
  for( let i = 0; i < array.length; i++ ) {
    output[i] = rule[ patterns[i] ];
  }
  return output;
}

var grid = [];
var rule = ruleNum( 30 );
const mult = 10;
const dim = 10;

function setup() {
  createCanvas( dim*mult, dim*mult );
  noStroke();
  fill(0);
  grid.push([0,0,0,0,1,0,0,0,0,0]);
}

function draw() {
  background( 192 );
}
