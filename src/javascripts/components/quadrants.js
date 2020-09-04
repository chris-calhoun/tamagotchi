import quadrantData from '../../data/quadrantData';

const loadQuadrants = () => {
  quadrantData.getQuadrants().forEach((quad) => console.log(quad));
};

export default { loadQuadrants };
