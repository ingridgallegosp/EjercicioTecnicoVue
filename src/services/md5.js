

const PUBLIC_API_KEY = 'd10ae8c1113276699ffd0c24255ab5df';

const PRIVATE_API_KEY = '7b8dbe24c7a58da18f262d6198754670e64db061';
  
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/series';
const TIMESTAMP = new Date().getTime().toString();
const HASHBASE = TIMESTAMP + PRIVATE_API_KEY + PUBLIC_API_KEY;
console.log(HASHBASE)
const HASH = '6389973393cf49c5fafe8437aacd113c'

  
export const FULL_URL = `${BASE_URL}?ts=${TIMESTAMP}&apikey=${PUBLIC_API_KEY}&hash=${HASH}`;