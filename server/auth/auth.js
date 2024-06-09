const authy = require('authy');

const auth = new authy.Authy('YOUR_API_KEY');

const user = {
  id: 1,
  email: 'user@example.com',
  phone: '1234567890',
};

auth.registerUser(user, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`User registered => ${user.id}`);
  }
});

const token = '123456';
auth.verifyToken(token, (err, token) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Tokenverified => ${token}`);
  }
});
