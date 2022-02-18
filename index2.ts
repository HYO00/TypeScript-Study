//Literal Types

const userName1 = "Hyo"; // const -> userName은 hyo
let userName2 = "Su"; // let -> userName은 string type

//type vs interface ?
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

type Job = "police" | "developer" | "teacher";

//인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.
interface usario {
  name: string;
  job: Job;
}

const usario: usario = {
  name: "Bob",
  job: "developer", //위에 type job에 있는것만 가능
};

//Union Types
//동일한 속성의 타입을 다르게 해서 구분할 수 있는 것을 식별 가능한 유니온타입이라 한다.

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

interface Watch {
  name: "watch";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Watch | Mobile) {
  console.log(gift.color);
  // gift.start(); -> error Union type car 또는 mobile인데 mobile엔 start() X
  if (gift.name === "watch") {
    gift.start();
  } else {
    gift.call();
  }
  //검사해야하는 항목들이 많아지면 swich를 사용하는게 가독성이 좋다.
}

// Intersection Types
//교차 타입 -> 여러 타입을 합쳐서 사용, and && 를 의미한다.

interface bevarage {
  name: string;
  drink(): void;
}

interface alcohol {
  name: string;
  color: string;
  price: number;
}

const toyGame: bevarage & alcohol = {
  name: "stella",
  drink() {},
  color: "yellow",
  price: 6000,
};
