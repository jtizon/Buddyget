const api_key = '8a918faa24381101ba8edd6a4668058d2eda55d42ce4e92a060b9993a14af795';

const clientID = 'fb6f52cbbca9da328e5869a4e27910ef18471fbc8975de4a3e861efc65900c63';

const clientSecret = '27c327f64cb0e1745bcfde92e63ac5eb087c4ebae2b66a839cedddaa71de76b5';

const queryString = new URLSearchParams('https://jtizon.github.io/Buddyget/?code=02577198d65477a8014de41b760cf2e862a6696a470d0fa576d0053bb9f05a36');
const accessToken = queryString.get('code');

console.log(accessToken);