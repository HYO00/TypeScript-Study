class Dict {
    constructor() {
        this.words = {};
    }
    // class type 지정 
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    update(word, def) {
        if (this.words[word.term]) {
            this.words[word.term] = def;
        }
    }
    remove(word) {
        if (this.words[word.term]) {
            delete this.words[word.term];
        }
    }
}
//단어의 정의를 추가, 수정, 단어 출력 method 
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
        (this.term = term), (this.def = def);
    }
    addDef(def) {
        if (this.term) {
            this.def = this.def + `, ${def}`;
        }
    }
    updateDef(def) {
        if (this.term) {
            this.def = def;
        }
    }
    output() {
        if (this.term) {
            console.log("output", this.term, this.def);
        }
    }
}
const apple = new Word("apple", "사과");
const dict = new Dict();
dict.add(apple);
dict.def("사과");
console.log("dict", dict);
dict.update(apple, "사과사과");
console.log("dict", dict);
dict.remove(apple);
console.log("dict", dict);
apple.addDef("과일");
console.log("class Word", apple);
apple.updateDef("사과아닌데");
console.log("updateDef", apple);
apple.output();
