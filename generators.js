function* genfunc(){
    console.log("archie")
    yield 10
    console.log("yashvi")
    yield 20
}

let obj = genfunc();
console.log(obj.next().value)
console.log(obj.next().value)