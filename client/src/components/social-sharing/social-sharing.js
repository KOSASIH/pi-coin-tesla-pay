const share = require('share-api');

const shareOptions = {
  title: 'Pi Coin Tesla Pay',
  text: 'Join the future of electric vehicle payments!',
  url: 'https://pi-coin-tesla-pay.com',
};

share(shareOptions, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Shared => ${response}`);
  }
});
