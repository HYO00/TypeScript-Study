//간단한 변수 타입지정가능
let names: string = "kim";

//array 타입 지정
let nameArr: string[] = ["kim", "park"];

//object 타입 지정
//name? 물음표는 name속성이 옵션임을 표현
let nameObj: { name: string } = { name: "kim" };

//다양한 타입이 들어올 수 있게 하려면 Union type
// :string[] 문자열이 가득담긴 배열 가능
let hyo: string | number = "kim";

//타입은 변수에 담아쓸 수 있음 Type alias 일반 변수랑 차별화를 위해 첫글자는 대문자로 작성
type Name = string | number;

let young: Name = 0;
//literal type 나만의 타입을 만들어서 사용가능
type NameType = "kim" | "lee";
let 이름: NameType = "kim";

//함수 만들때도 타입지정 가능 파라미터와 return 값이 어떤 타입일지 지정가능 wow..
function funcName(x: number): number {
  return x * 2;
}

//에러 why? 매개변수의 타입을 숫자 또는 문자열로 했는데 x는 지금 변수의 타입이 확실하지 않으므로 마음대로 연산할 수 없기 때문에 에러이다.
//function funcName1(x: number | string): number {
//  return x * 2;
//}

//가능
function funcName2(x: number | string) {
  if (typeof x === "number") {
    return x * 2;
  }
}

//array에 쓸 수 있는 tuple 타입 대괄호 [ ] 안에 들어올 자료의 타입을 차례로 적어
type Member = [number, boolean];
let su: Member = [100, false];

//object에 타입지정해야할 속성이 너무 많으면
//특정 속성이 선택사항이면 물음표를 기입가능 name? : string
type Members = {
  //모든 object 속성 obj key string value string
  [key: string]: string;
};

let haydee: Members = { name: "kim", age: "20" };

//class 타입지정 가능
class User {
  //중괄호 내에 미리 name 이렇게 변수를 만들어놔야 constructor 안에서 this.name 이렇게 사용가능
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//내일은 변수 문법 공부하기

//변수만들기 변수에 타입지정가능 변수명: 타입명
//변수에 타입지정 = 변수에 실드 씌우는 것이다. ex) myName 변수에 string이라는 실드를 씌우는것이다. 해당 변수는 string type만 가능하다
let myName: string = "hyo0";
let age: number = 20;
let isMerried: boolean = false;

//변수 하나에 여러자료 집어넣고 싶으면 array 자료형을 쓰자 배열안에 들어갈 타입을 지정해야한다.
let members: string[] = ["hyo0", "su"];

//obj
let memberObj: { member1: string; member2: string } = {
  member1: "hyo0",
  member2: "su",
};
let likeSong: { singer: string; song: string } = {
  singer: "Lauv",
  song: "I Like Me Better",
};

//type 지정해보기
let project: { member: string[]; days: number; started: boolean } = {
  member: ["hyo0", "su"],
  days: 14,
  started: true,
};

//TIP!! typeScript는 자동으로 타입지정이 된다. 타입지정 문법 생략가능
let numArr = [1, 2, 3];
