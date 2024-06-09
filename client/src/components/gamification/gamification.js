const rewards = [
  { id: 1, name: 'Bronze Badge', points: 100 },
  { id: 2, name: 'Silver Badge', points: 500 },
  { id: 3, name: 'Gold Badge', points: 1000 },
];

const userPoints = 500;

const reward = rewards.find((reward) => userPoints >= reward.points);
if (reward) {
  console.log(`User earned => ${reward.name}`);
} else {
  console.log('User did not earn a reward');
}
