export const API_HOST =
  process.env.FE_PROFILE === 'prod'
    ? 'https://yasu-route-yasu.itzroks-120000mck6-wefx4z-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/'
    : 'http://localhost:3000'; // dev
