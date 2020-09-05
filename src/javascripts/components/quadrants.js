import quadrantData from '../../data/quadrantData';

const loadQuadrants = () => {
  quadrantData.getQuadrants().forEach((quad) => $(`#${quad.quadName}`).html(`
  <div id = card-${quad.quadName} class = card-${quad.quadName} >
    <h2 class = quad-name>${quad.quadName}</h2>
    <h3 class = quad-status>${quad.statusValue}%</h2>
    <div class = button-container>
      <button type = "button">${quad.actionValues[0].actionName}</button>
      <button type = "button">${quad.actionValues[1].actionName}</button>
    </div>
  </div>`));
};

export default { loadQuadrants };
