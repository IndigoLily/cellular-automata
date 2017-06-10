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

function drawGrid( grid ) {
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
}

function updateGrid( grid ) {
  grid = [ grid[0] ];
  for( let i = 0; i < dim-1; i++ ) {
    grid.push( nextPerm( grid[i], rule ) );
  }
  drawGrid( grid );
  return grid;
}

function makeGrid() {
  var grid = [];
  var init = [];
  for( let i = 0; i < dim; i++ ) {
    init.push( (Math.random()>.9)?1:0 );
  }
  grid.push( init );
  return updateGrid( grid );
}

var grid = [];
var rule = ruleNum( Math.floor(Math.random()*256) );
var dim = 64;
var mult = 10;

function setup() {
  const canv = createCanvas( dim*mult, dim*mult );
  const div = select('#container');
  const randall = select('#randall');
  const randrule = select('#randrule');
  const randcells = select('#randcells');
  div.child( canv );
  div.child( randall );
  div.child( randrule );
  div.child( randcells );
  randall.mousePressed(function(){
    rule = ruleNum( Math.floor(Math.random()*256) );
    grid = makeGrid();
  });
  randrule.mousePressed(function(){
    rule = ruleNum( Math.floor(Math.random()*256) );
    grid = updateGrid( grid );
  });
  randcells.mousePressed(function(){
    grid = makeGrid();
  });
  grid = makeGrid();
}

function draw() {
  
}
