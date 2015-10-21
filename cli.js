var meow = require('meow');
var easyssh = require('./');

var cli = meow(
`Usage
      $ easyssh `
);

easyssh(cli.input[0]);