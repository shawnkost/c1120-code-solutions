let count = 3;

const reduceNumber = () => {
  if (count === 0) {
    console.log("Blast off");
    clearInterval(intervalId);
  } else {
    console.log(count);
    count --;
  }
}

const intervalId = setInterval(reduceNumber, 1000);
