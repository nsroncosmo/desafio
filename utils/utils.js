const TERRAIN            = 0;
const AIRPORT            = 1;
const CLOUD_OVER_TERRAIN = 2;
//const CLOUD_OVER_AIRPORT = 3;

let mapInit;

function rndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function createArray( width, height ){
  let w = width + 2, h = height + 2;

  mapInit = null;
  mapInit = new Array(w);

  for (x = 0; x < w; x++) {
    mapInit[x] = new Array(h);

    for (y = 0; y < h; y++)
      mapInit[x][y] = TERRAIN;
  }
  //console.log(`width [${width}] / w [${w}] / map.length ${mapInit.length}`)
  //console.log(`height [${height}] / h [${h}] / map[0].length ${mapInit[0].length}`)
}

function populateMap( nAirports, nClouds ){
  let count, x, y;
  const width  = mapInit.length - 1;
  const height = mapInit[0].length - 1;

  count = nAirports;
  while(count>0){
    x = rndInteger( 1, width  );
    y = rndInteger( 1, height );

    if (mapInit[x][y] === TERRAIN){
        mapInit[x][y] = AIRPORT;
      count--;
    }
  }

  count = nClouds;
  while(count>0){
    x = rndInteger( 1, width  );
    y = rndInteger( 1, height );

    if (mapInit[x][y] === TERRAIN){
//console.log(`${x}x${y} = ${CLOUD_OVER_TERRAIN}`);

        mapInit[x][y] = CLOUD_OVER_TERRAIN;
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

  createArray( width, height );

  populateMap( nAirports, nClouds );

	return mapInit;
}

module.exports = {
	createMap,
	};