const request = require('request-promise');

const getGeekJoke = async () => {
  const option = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET',
    json: true,
  };
  try {
    const result = await request(option)
    //console.log(result)
    return result.joke;
  } catch (err) {
      console.log(err)
  }
};

//getGeekJoke().then((data) => console.log(data))

module.exports = { getGeekJoke }