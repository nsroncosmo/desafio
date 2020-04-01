import React from 'react';

export function guid() {

  function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


export function cell (row) {
  return (
    <div> {row} </div>
      );
}


/*
callOldAPI = async () => {
  const response = await fetch('/api/mensagem');
  const body     = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};
*/

export const GROUND             = 0;
export const AIRPORT            = 1;
export const CLOUD_OVER_GROUND  = 2;
export const CLOUD_OVER_AIRPORT = 3;


//$ ```curl -X POST localhost:3000/api/map -d "r=12&c=15&d=0"```

export async function callAPI() {
  fetch("/api/map", {
    method: 'POST',
    headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded',
      }),
    body: "r=12&c=15&d=0"
  })
  .then((response) => response.text())
  .then((responseText) => {
    console.log("Q?",responseText);
  })
  .catch((error) => {
      console.error(error);
  });
}

