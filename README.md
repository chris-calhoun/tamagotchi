# Tamagotchi
    
## Motivation

This project required me to build a website that simulated a Tamagotchi pet from the 90s. 

## Build Status

Reached MVP. Working on bonus features:
- Overall progress bar
- Pet picture
- Module interactivity (when fullness goes up energy should go down)

## Screenshots

![Alt text](/src/images/tamagotchi.png "Tamagotchi Website")

## Tech/Framwork

- HTML, CSS, JS ES6
- styled using SASS

## Features

- four quadrants that display four activities: eat, sleep, play, and fight
- each quadrant should have two buttons that change the status value of the quadrant.

## Code Example 
```
const loadQuadrants = () => {
  QuadData.getQuadrants().forEach((quad) => $(`#${quad.quadName}`).html(`
  <div id = card-${quad.quadName} class = card-${quad.quadName} >
    <h2 class = quad-name>${quad.quadName}</h2>
    <h3 class = quad-status>${quad.statusValue}%</h2>
    <div class = button-container>
      <button id = '${quad.quadId}-0' type = "button">${quad.actionValues[0].actionName}</button>
      <button id = '${quad.quadId}-1' type = "button">${quad.actionValues[1].actionName}</button>
    </div>
  </div>`));
};

const btnEventFunction = () => {
  $('body').on('click', 'button', (e) => {
    const arr = e.target.id.split('-');
    const id = parseInt(arr[0], 10) - 1;
    const btnNum = arr[1];
    QuadData.getQuadrants()[id].statusValue += QuadData.getQuadrants()[id].actionValues[btnNum].actionVal;
    if (QuadData.getQuadrants()[id].statusValue > 100) {
      QuadData.getQuadrants()[id].statusValue = 100;
    }
    loadQuadrants();
  });
};
```

## Deployed Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/821f67f3-fa19-4ca8-a962-1397efd3626e/deploy-status)](https://app.netlify.com/sites/tamagotchi-cc/deploys)
