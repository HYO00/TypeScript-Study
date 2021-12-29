//간단한 변수 타입지정가능
var names = "kim";
//array 타입 지정
var nameArr = ["kim", "park"];
//object 타입 지정
//name? 물음표는 name속성이 옵션임을 표현
var nameObj = { name: "kim" };
//다양한 타입이 들어올 수 있게 하려면 Union type
// :string[] 문자열이 가득담긴 배열 가능
var hyo = "kim";
var young = 0;
var 이름 = "kim";
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
var su = [100, false];
var haydee = { name: "kim", age: "20" };
//class 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//내일은 변수 문법 공부하기
