const quadrants = [
  {
    action: 'eat',
    statusName: 'full',
    statusValue: 100,
    actionValues: [10, -3],
  },
  {
    action: 'play',
    statusName: 'fun',
    statusValue: 50,
    actionValues: [50, 2],
  },
  {
    action: 'fight',
    statusName: 'strength',
    statusValue: 100,
    actionValues: [1, -10],
  },
  {
    action: 'sleep',
    statusName: 'energy',
    statusValue: 50,
    actionValues: [50, 60],
  },
];

const getQuadrants = () => quadrants;

export default { getQuadrants };
