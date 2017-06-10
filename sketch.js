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
    nbor = 7 - nbor;
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
var rule = ruleNum( Math.floor(Math.random()*256) );
var dim = 256;
var mult = 3;

function setup() {
  createCanvas( dim*mult, dim*mult );
  var init = [];
  for( let i = 0; i < dim; i++ ) {
    init.push( (Math.random()>.9)?1:0 );
  }
  grid.push( init );
  for( let i = 0; i < dim; i++ ) {
    grid.push( nextPerm( grid[i], rule ) );
  }
  
  background( 255 );
  fill( 0 );
  noStroke();
  for( let y = 0; y < dim; y++ ) {
    for( let x = 0; x < dim; x++ ) {
      if( grid[y][x] === 1 ) {
        rect(x*mult,y*mult,mult,mult);
      }
    }
  }
  noLoop();
}

function draw() {}
