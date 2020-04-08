const TERRAIN            = 0;
const AIRPORT            = 1;
const CLOUD_OVER_TERRAIN = 2;
//const CLOUD_OVER_AIRPORT = 3;

let mapCalc, mapAirport = [], coordAirport = [], calcAirport, totAirport;

function rndInteger( min, max ) {
return Math.floor( Math.random() * (max - min) ) + min;
}

function createArray( width, height ) {
let w = parseInt(width) + 2, h = parseInt(height) + 2;

mapCalc = null;
mapCalc = new Array(w);

for (x = 0; x < w; x++) {
  mapCalc[x] = new Array(h);

  for (y = 0; y < h; y++)
    mapCalc[x][y] = TERRAIN;
}
//console.log(`width [${width}] / w [${w}] / map.length ${mapCalc.length}`)
//console.log(`height [${height}] / h [${h}] / map[0].length ${mapCalc[0].length}`)
}

function populateMap( nAirports, nClouds ) {
let count, x, y, map;
const width  = mapCalc.length    - 1;
const height = mapCalc[0].length - 1;

totAirport = nAirports
count      = nAirports;
while ( count > 0 ) {
  x = rndInteger( 1, width  );
  y = rndInteger( 1, height );

  if ( mapCalc[x][y] === TERRAIN ) {
       mapCalc[x][y] = AIRPORT;

    map        = {x,y};
    coordAirport = [ ...coordAirport, map ];
    count      --;
  }
}

console.log("coordAirport")
console.table(coordAirport);

count = nClouds;
while ( count > 0 ) {
  x = rndInteger( 1, width  );
  y = rndInteger( 1, height );

  if ( mapCalc[x][y] === TERRAIN ) {
  //console.log(`${x}x${y} = ${CLOUD_OVER_TERRAIN}`);

       mapCalc[x][y] = CLOUD_OVER_TERRAIN;
    count--;
  }
}

}

function createMap( width, height, nAirports, nClouds ) {
{ // Validações
  width     = width     < 10 || undefined == width     ? 10 : width    ;
  height    = height    < 10 || undefined == height    ? 10 : height   ;
  nAirports = nAirports <  3 || undefined == nAirports ?  3 : nAirports;
  nClouds   = nClouds   <  4 || undefined == nClouds   ?  4 : nClouds  ;
}

//console.log("Dentro da createMap");
console.table( { width, height, nAirports, nClouds } )

width = 4; height = 4;

createArray( width, height );

//console.log(`mapCalc.length [${mapCalc.length}]`);
//console.log(`mapCalc[0].length [${mapCalc[0].length}]`);

//console.log("Mapa vazio");
//console.table( mapCalc )

populateMap( nAirports, nClouds );

//console.log("Mapa populado");
//console.table( mapCalc )

//return mapCalc;
}

function spreadCloud(x,y) {

}

function updateMap( map, day ) {
let x, y;
let mapRes = [...mapCalc], mapInit = [...mapCalc];
const width  = mapRes.length - 2;
const height = mapRes[0].length - 2;

/*
const TERRAIN            = 0;
const AIRPORT            = 1;
const CLOUD_OVER_TERRAIN = 2;
const CLOUD_OVER_AIRPORT = 3; 
*/

calcAirport = 0

for ( x = 1; x < width; x++ ) {
  for ( y = 1; y < height; y++ ) {
   if( mapInit[x][y] >= CLOUD_OVER_TERRAIN ) {
      mapRes[x+1][y] = mapRes[x+1][y] <= AIRPORT ? mapRes[x+1][y] += CLOUD_OVER_TERRAIN : mapRes[x+1][y];
      mapRes[x-1][y] = mapRes[x-1][y] <= AIRPORT ? mapRes[x-1][y] += CLOUD_OVER_TERRAIN : mapRes[x-1][y];
      mapRes[x][y-1] = mapRes[x][y-1] <= AIRPORT ? mapRes[x][y-1] += CLOUD_OVER_TERRAIN : mapRes[x][y-1];
      mapRes[x][y+1] = mapRes[x][y+1] <= AIRPORT ? mapRes[x][y+1] += CLOUD_OVER_TERRAIN : mapRes[x][y+1];
    }
  }
}

mapAirport = [ {mapRes}, ...mapAirport ];

console.log("mapRes --------------");
console.table(mapRes);

coordAirport.forEach( coord => {
    if ( mapRes[coord.x][coord.y] === AIRPORT ) calcAirport++;
} );

return (calcAirport===totAirport); //mapRes;
}

function calcMap( width, height, nAirports, nClouds ) {

createMap( width, height, nAirports, nClouds );

while ( updateMap() ) {}

console.log("mapAirport --------------");
console.table(mapAirport);

//  console.log("init" ,mapCalc);
//  console.log("dia 1",updateMap(1));
}

calcMap()

//Module.exports = {
//	doDaMap,
//	};


