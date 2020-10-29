const { getDadJoke } = require('./__workshop/exercise-4.1')
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2')
const { getGeekJoke } = require('./__workshop/exercise-4.3')

const handleJoke = async (type) => {
    let joke;
    try {
        switch (type) {
            case 'dad':
                joke = await getDadJoke();
                break;
            case 'tronald':
                joke = await getTronaldDumpQuote();
                break;
            case 'geek':
                joke = await getGeekJoke();
                break;
        }
    } catch(error) {
        console.log(error)
    }
    return joke;
}

module.exports = { handleJoke }