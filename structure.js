
//구조 분해 할당
const [animal, speed, avgAge] = ['고양이', 50, 15];
console.log(`'${animal}'의 속도는 ${speed}이고, 평균 ${avgAge}년 정도의 수명을 갖습니다.`);


const arr = [1,2,3,4];

//배열 구조문해 할당
const [first, second, third, fourth,fifth] = arr;
console.log(first, second, third, fourth, fifth); // 1 2 3 4 undefined
console.log(second, fourth);  // 2 4
console.log();


const [one, two, ...numbers] = [1, 2, 3, 4, 5];
console.log(one); // 1
console.log(two); // 2
console.log(numbers); // 3 4 5
console.log();


//객체 구조분해 할당
/* 변수 선언하는곳에 객체괄호를 만들어 객체의 변수명을 선언
* 그 값에는 변수선언한 객체 필드에 맞춰 객체 할당
* */
const {name, age, job, born = 'korea'} = {name:'홍길동', age:30};

console.log(name, age); // 홍길동 30
//job은 선언 했으나 초기화 되지 않았기 때문에 undefined
console.log(name, age, job); // 홍길동 30 undefined
//구조분해할당 변수선언시에 바로 초기화 가능 (배열도 마찬가지)
console.log(born); // korea


const schoolInfo = {
  school : 'high',
  grade : 1,
}

const personInfo = {
  name : '철수',
  ...schoolInfo, //schoolInfo의 값을 풀어서 배치한다.
  age : 17
}

// 그래서 아래 personInfo 출력은
// { name: '철수', school: 'high', grade: 1, age: 17 }
console.log(personInfo);


