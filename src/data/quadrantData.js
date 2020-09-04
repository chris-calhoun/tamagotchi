const { default: quadrants } = require('../javascripts/components/quadrants');

quadrants = [
  {
    action: 'eat',
    statusName: 'full',
    statusValue: 100,
    action1: 10,
    action2: -3,
  },
  {
    action: 'play',
    statusName: 'fun',
    statusValue: 50,
    action1: 50,
    action2: 2,
  },
  {
    action: 'fight',
    statusName: 'strength',
    statusValue: 100,
    action1: 1,
    action2: -10,
  },
  {
    action: 'sleep',
    statusName: 'energy',
    statusValue: 50,
    action1: 50,
    action2: 60,
  },
];

const getQuadrants = () => quadrants;

export default { getQuadrants };
