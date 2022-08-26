//간단한 변수 타입지정가능
let names = "kim";
//array 타입 지정
let nameArr = ["kim", "park"];
//object 타입 지정
//name? 물음표는 name속성이 옵션임을 표현
let nameObj = { name: "kim" };
//다양한 타입이 들어올 수 있게 하려면 Union type
// :string[] 문자열이 가득담긴 배열 가능
let hyo = "kim";
let young = 0;
let 이름 = "kim";
//함수 만들때도 타입지정 가능 파라미터와 return 값이 어떤 타입일지 지정가능 wow..
function funcName(x) {
    return x * 2;
}
//에러 why? 매개변수의 타입을 숫자 또는 문자열로 했는데 x는 지금 변수의 타입이 확실하지 않으므로 마음대로 연산할 수 없기 때문에 에러이다.
//function funcName1(x: number | string): number {
//  return x * 2;
//}
//가능
function funcName2(x) {
    if (typeof x === "number") {
        return x * 2;
    }
}
let su = [100, false];
let haydee = { name: "kim", age: "20" };
//class 타입지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
//내일은 변수 문법 공부하기
//변수만들기 변수에 타입지정가능 변수명: 타입명
//변수에 타입지정 = 변수에 실드 씌우는 것이다. ex) myName 변수에 string이라는 실드를 씌우는것이다. 해당 변수는 string type만 가능하다
let myName = "hyo0";
let age = 20;
let isMerried = false;
//변수 하나에 여러자료 집어넣고 싶으면 array 자료형을 쓰자 배열안에 들어갈 타입을 지정해야한다.
let members = ["hyo0", "su"];
//obj
let memberObj = {
    member1: "hyo0",
    member2: "su",
};
let likeSong = {
    singer: "Lauv",
    song: "I Like Me Better",
};
//type 지정해보기
let project = {
    member: ["hyo0", "su"],
    days: 14,
    started: true,
};
//TIP!! typeScript는 자동으로 타입지정이 된다. 타입지정 문법 생략가능
let numArr = [1, 2, 3];
let user = {
    name: "hyo",
    age: 20,
    birthYear: 2000,
    1: "A",
    2: "B",
};
user.age = 10;
user.gender = "male";
const add = function (x, y) {
    return x + y;
};
const a = (age) => {
    return age > 19;
};
a(22);
const benz = {
    door: 5,
    stop() {
        console.log("stop!");
    },
    color: "grey",
    wheels: 4,
    start() { },
};
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log("Go!");
    }
}
const b = new Bmw("green");
//함수
function isAdult(age) {
    return age > 19;
}
function hello(name, age) {
    if (age !== undefined) {
        return `hello, ${name}. You are ${age}.`;
    }
    else {
        return `Hello. ${name}`;
    }
}
//name에 물음표를 붙여주면 아래코드 가능
//const result = hello();
//...사용시 전달받은 매개변수 배열로 나타낼수있다.
function sum(...nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}
sum(1, 2, 3);
const Sam = { name: "Sam" }; //Sam이라는 객체는 person 타입이고
function showName() {
    console.log(this.name);
}
const nameBind = showName.bind(Sam);
nameBind();
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
const sam = join("Sam", 30);
const jane = join("Jane", "30");
