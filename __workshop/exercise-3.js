// Exercise 3
// ----------

const doublesLater = (num) => {
  //console.log(num)
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise ((resolve) => {
    console.log('Calcualting...')
    setTimeout(() => {
      resolve(num * 2)
      console.log('The number has been doubled!')
    }, 2000)
  })
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let sum = num;
  try {
    sum = await doublesLater(sum);
    sum = await doublesLater(sum);
    sum = await doublesLater(sum);
    
    return sum;
  } catch {
    console.log('error')
  }
}

// 4. verification
handleSum(10).then((ans) => console.log(ans));
