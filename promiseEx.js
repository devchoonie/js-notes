async function inputNumber(number, callback) {

  const promise = new Promise((resolve, reject) => {

    const interval = setInterval(() => {
      const result = callback(number);
      if (result) {
        resolve(JSON.stringify({"result": result}));
      } else {
        reject('숫자가 아닙니다.');
      }
      clearInterval(interval);
    }, 200);

  });

  return promise;
}

const promise = inputNumber(9, callback);
console.log(`${promise} \n`);
promise
  .then((result) => {
    console.log(result)
  })
  .catch((result) => {
    console.log(result)
  });


function callback(num) {
  if (num && typeof num === 'number') {
    return num;
  }
  return 0;
}

 function callInputNumber(num) {
  const awaitPromise =  inputNumber(num, callback);
  //console.log('awaitPromise', awaitPromise);

  methodA(awaitPromise);
}

callInputNumber(100);

function methodA(awaitPromise) {
  console.log(awaitPromise)
  const [a, b, c] = [1, 2];
  console.log(a, b, c);
}
