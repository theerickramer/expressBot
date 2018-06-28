const fetch = require('isomorphic-fetch');

const getWeather = (city, cb) => {
  // fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&apiid=4dd5d50d091f63b1bd66e568ae14334d`)
  cb(null, `It's always sunny in ${city}`)
}

const getJoke = (cb) => {
  fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
  .then(res => res.json())
  .then(json => cb(null, json.joke));
}

module.exports = { getWeather, getJoke }