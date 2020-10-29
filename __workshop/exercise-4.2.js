const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  const option = {
    uri: 'https://api.tronalddump.io/random/quote',
    headers: { Accept: 'application/json' },
    json: true,
  };
  try {
    const result = await request(option)
    //console.log(result)
    return result.value;
  } catch (err) {
    console.log(err)
  }
};

//getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote }