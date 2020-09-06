import QuadData from '../../data/quadrantData';

const loadQuadrants = () => {
  QuadData.getQuadrants().forEach((quad) => $(`#${quad.quadName}`).html(`
  <div id = card-${quad.quadName} class = card-${quad.quadName} >
    <h2 class = quad-name>${quad.quadName}</h2>
    <h3 class = quad-status>${quad.statusValue}%</h2>
    <div class = button-container>
      <button id = '${quad.actionValues[0].actionName}' type = "button">${quad.actionValues[0].actionName}</button>
      <button id = '${quad.actionValues[1].actionName}' type = "button">${quad.actionValues[1].actionName}</button>
    </div>
  </div>`));
};

const btnEventFunction = () => {
  $('button').click((e) => {
    const target = e.target.id;
    console.log(target);
    // const seletedQuadObject = QuadData.getQuadrants().find(quad => quad.actionValues)
  });
};

export default { loadQuadrants, btnEventFunction };
