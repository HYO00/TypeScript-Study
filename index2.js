//Literal Types
const userName1 = "Hyo"; // const -> userName은 hyo
let userName2 = "Su"; // let -> userName은 string type
const usario = {
    name: "Bob",
    job: "developer", //위에 type job에 있는것만 가능
};
function getGift(gift) {
    console.log(gift.color);
    // gift.start(); -> error Union type car 또는 mobile인데 mobile엔 start() X
    if (gift.name === "watch") {
        gift.start();
    }
    else {
        gift.call();
    }
    //검사해야하는 항목들이 많아지면 swich를 사용하는게 가독성이 좋다.
}
const toyGame = {
    name: "stella",
    drink() { },
    color: "yellow",
    price: 6000,
};
