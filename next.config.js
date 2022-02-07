const withLinaria = require('next-linaria');
module.exports = withLinaria({
  env: {
    FE_PROFILE: process.env.FE_PROFILE
  }
});
