import QuadData from '../../data/quadrantData';

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
    loadQuadrants();
  });
};

export default { loadQuadrants, btnEventFunction };
