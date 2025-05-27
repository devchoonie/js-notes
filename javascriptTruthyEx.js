
//truthy 한 값
const name = '남궁이';
const numberValue = 2;
const minusValue1 = -1;
const objectValue = {};
const arrValue = [];
const functionValue = function(){};
const functionReturnValue = function(){return 0};
//여기 부터 falsy 한 값
const zeroValue = 0; //0은 양수표시던 음수표시든 falsy
const minusValue = -0; //0은 양수표시던 음수표시든 falsy
const undefinedValue = undefined; // undefined 는 falsy
const emptyValue = ''; // 빈 문자열 falsy
const notNumber = NaN; // NaN (숫자가 아닌 것) falsy
const nullValue = null; // null 값 falsy
const bool = false; // false 는 당연히 falsy


const work = (value) => {
  if(value){
    console.log("[" + typeof(value) + "타입] '"+value+ "'" + ' 값은 truthy');
  }else{
    console.log("[" + typeof(value) + "타입] '"+value+ "'" + ' 값은 falsy');
  }
}

work(name);
work(numberValue);
work(minusValue1);
work(objectValue);
work(arrValue);
work(functionValue);
work(functionReturnValue());
work(minusValue);
work(zeroValue);
work(undefinedValue);
work(emptyValue);
work(notNumber);
work(nullValue);
work(bool);
