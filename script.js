const api_key = '8a918faa24381101ba8edd6a4668058d2eda55d42ce4e92a060b9993a14af795';

const clientID = 'fb6f52cbbca9da328e5869a4e27910ef18471fbc8975de4a3e861efc65900c63';

const clientSecret = '27c327f64cb0e1745bcfde92e63ac5eb087c4ebae2b66a839cedddaa71de76b5';


var urlParams = new URLSearchParams(window.location.search);
const accessToken = urlParams.get('code');

console.log(accessToken);
const searchURL = 'https://api.youneedabudget.com/v1';

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }
}

