var grid = [];

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

var rule = ruleNum( 30 );

function neighbours( array ) {
  
}

function nextPerm( array, rule ) {
  var output = [];
  for( let i = 0; i < array.length; i++ ) {
    let nbor = '';
    if( array[i-1] === undefined ) {
      nbor += 0;
    } else {
      nbor += array[i-1];
    }
    nbor += array[i];
    if( array[i+1] === undefined ) {
      nbor += 0;
    } else {
      nbor += array[i+1];
    }
    output.push(nbor);
    
  }
  return output;
}

function setup() {
  createCanvas( 100, 100 );
  noStroke();
  fill(0);
  console.log(rule);
  grid.push([0,0,0,0,1,0,0,0,0,0]);
}

function draw() {
  background( 192 );
}
