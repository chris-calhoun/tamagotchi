import quadrantData from '../../data/quadrantData';

const loadQuadrants = () => {
  quadrantData
    .getQuadrants()
    .forEach((quad) => $(`#${quad.quadName}`).html(`${quad.quadName}`));
};

export default { loadQuadrants };
