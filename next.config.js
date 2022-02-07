const withLinaria = require('next-linaria');
console.log('process.env.FE_PROFILE:nextconfig', process.env.FE_PROFILE);
module.exports = withLinaria({
  env: {
    FE_PROFILE: process.env.FE_PROFILE
  }
});
