//hashmap 만들기 - 단어사전 만들기 
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // class type 지정 
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  update(word: Word, def: string) {
    if (this.words[word.term]) {
      this.words[word.term] = def;
    }
  }
  remove(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }
}

//단어의 정의를 추가, 수정, 단어 출력 method 
class Word {
  constructor(public term: string, public def: string) {
    (this.term = term), (this.def = def);
  }
  addDef(def: string) {
    if (this.term) {
      this.def = this.def + `, ${def}`;
    }
  }
  updateDef(def: string) {
    if(this.term) {
        this.def = def
    }
  }
  output(){
    if(this.term){
        console.log("output",this.term, this.def)
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