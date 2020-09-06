import '../styles/main.scss';
import Quadrants from './components/quadrants';

const init = () => {
  Quadrants.loadQuadrants();
  Quadrants.btnEventFunction();
};

init();
