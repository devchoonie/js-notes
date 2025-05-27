
const arr = [1,2,3,4];

arr.push(5);
console.log(arr);

arr.pop();
console.log(arr);

//요소를 배열릐 앞에 추가한다 배열 복사 일어나기 때문에 성능에 좋지않다.
arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log( arr.includes(2) );
console.log( arr.includes(5) );


const method = (value, number) => {
  return value % number === 0;
}


//첫번째로 일치하는 index를 반환. 인자로 익명함수를 선언해서 true를 리턴하는 값의 위치를 반환한다.
console.log(arr.findIndex((value) => {
  return method(value, 2);
}));

console.log(arr.findLastIndex((value) => {
  return method(value, 2);
}));

//첫번째로 일치하는 index를 반환
console.log(arr.indexOf(3));

//첫번째로 일치하는 '값'을 반환
console.log(arr.find((value, index) => {
  return method(value, 2);
}));

//filter 는 인자에 익명함수를 넣고 조건식에서 true 를 리턴하는 모든 값을 반환
console.log(arr.filter((value, index) => {
    return method(value, 2);
}));

//정렬
let arr2 = [5,3,1,2,4];
console.log(arr2.sort((a, b) => {
    if(a > b){
      return -1;
    }else if(a < b){
      return 1;
    }else{
      return 0;
    }
}));




