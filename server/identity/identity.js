const uport = require('uport');

const identity = new uport.Identity({
  did: 'did:uport:0x1234567890abcdef',
  privateKey: '0x1234567890abcdef',
});

const credentials = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

identity.addCredentials(credentials, (err, credentials) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Credentials added => ${credentials}`);
  }
});

const request = {
  type: 'email',
  value: 'johndoe@example.com',
};

identity.request(request, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Response => ${response}`);
  }
});
