

function Movie(title, studio){
  this.title = title;
  this.studio = studio;
}

const mul = x => y => z => { return `${x} * ${y} * ${z} = `+ x*y*z };

console.log(mul(2)(3)(4));


console.log(var1);
var var1 = 3;
let let1 = 1;
const const2 = 2;


((p) => {
  console.log(p);
})({name:"홍길동",age:35});


let movies = ["타이타닉","아바타","겨울왕국","어벤져스","인터스텔라","반지의제왕","글래디에이터"];

const slice = movies.slice(1,3);
console.log(`slice(1, 3) = ${slice}`);
//console.log(`movies = ${movies}`);
//const splice = countries.splice(1,3);
//console.log(`splice = ${splice}`);
//console.log(`movies = ${movies}`);


//정렬
//sort함수 - 정렬된 배열을 반환
/*const sortMovies= movies.sort((a,b) => {
  //const sortNumber = a > b ? 1 : a < b ? -1 : 0; //오름차순
  const sortNumber = a > b ? -1 : a < b ? 1 : 0; //내림차순
  return sortNumber;
});
console.log(sortMovies);
console.log(sortMovies === movies);*/ //같은 주소이므로 true
//toSorted함수 - 정렬된 새로운 복사본의 배열을 반환
const toSortedMovies = movies.toSorted((a,b) => {
  const sortNumber = a > b ? -1 : a < b ? 1 : 0; //내림차순
  return sortNumber;
});
console.log(`movies.toSorted함수 : `+ toSortedMovies);
console.log(toSortedMovies === movies); //새배열이라 주소값이 달라서 false

//concat함수 - a.concat(b) a요소와 b요소를 합친 배열의 복사본 반환. a,b는 변화없음
const concatMovies = movies.concat(["아이언맨"]);
console.log(`movies.concat(["아이언맨"]) : \n\t\t\t ${concatMovies}`);


//fill함수 - 지정한 위치의 값들을 첫번째 인자의 값으로 바꿉니다.
/*
* a.fill(0, start, end) start부터 end까지 0으로
* a.fill(0, start) 처음부터 끝까지 0으로
* a.fill(0) 전부 0으로
* */
console.log(`[...movies].fill("미개봉", [...movies].length-2) : \n\t\t\t ${[...movies].fill("미개봉", [...movies].length-2)}`);



let objMovies = [];
objMovies.push(new Movie("캡틴아메리카","마블"))
objMovies.push(new Movie("조커","워너브로스"))
objMovies.push(new Movie("인터스텔라","레전더리픽쳐스"))
objMovies.push(new Movie("해리포터","워너브로스"))
objMovies.push(new Movie("어벤져스:엔드게임","마블"))
objMovies.push(new Movie("보헤미안랩소디","20세기스튜디오"))
console.log(objMovies);

const findMarble = objMovies.find((t) => t.studio === "마블");
console.log("findMarble : \n\t\t\t ");
console.log(findMarble);

const filterMarble = objMovies.filter((t) => t.studio === "마블");
console.log("filterMarble : \n\t\t\t ");
console.log(filterMarble);

const includes = objMovies.includes({title:"어벤져스:엔드게임",studio:"마블"});
console.log(includes);


console.log('고영의' < '고구니');


const selectSroted = ['정도','선덕','신정','구정','신정','청출어람'];
let temp = 0;

for(let i=0; i<selectSroted.length-1; i++){

  let minIndex = i;
  for(let j=i+1; j<selectSroted.length; j++){
    if(selectSroted[minIndex] > selectSroted[j]){
      minIndex = j;
    }
  }

  temp = selectSroted[i];
  selectSroted[i] = selectSroted[minIndex];
  selectSroted[minIndex] = temp;

}

console.log(selectSroted);



