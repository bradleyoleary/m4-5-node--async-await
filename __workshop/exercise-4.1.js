const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
    const option = {
        uri: 'http://icanhazdadjoke.com/',
        headers: { Accept: 'application/json' },
        json: true,
    };
    try {
        const result = await request(option);
        //console.log(result)
        return result.joke;
    } catch (err) {
       console.log(err)
    }
}

// 4.1
//getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke }