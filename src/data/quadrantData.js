const quadrants = [
  {
    quadId: 1,
    quadName: 'eat',
    statusName: 'full',
    statusValue: 100,
    actionValues: [
      { actionName: 'healthy food', actionVal: 10 },
      { actionName: 'unhealthy food', actionVal: -3 },
    ],
  },
  {
    quadId: 2,
    quadName: 'play',
    statusName: 'fun',
    statusValue: 50,
    actionValues: [
      { actionName: 'super fun', actionVal: 50 },
      { actionName: 'slightly fun', actionVal: 2 },
    ],
  },
  {
    quadId: 3,
    quadName: 'fight',
    statusName: 'strength',
    statusValue: 100,
    actionValues: [
      { actionName: 'flight', actionVal: 1 },
      { actionName: 'fight', actionVal: -10 },
    ],
  },
  {
    quadId: 4,
    quadName: 'sleep',
    statusName: 'energy',
    statusValue: 50,
    actionValues: [
      { actionName: 'deep slumber', actionVal: 60 },
      { actionName: 'nap', actionVal: 50 },
    ],
  },
];

const getQuadrants = () => quadrants;

export default { getQuadrants };
