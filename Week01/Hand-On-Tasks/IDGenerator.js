// a unique Id genrator using the symbols 
function IdGenerator(input){
    return Symbol(input);
}

const id1 = IdGenerator("id");
const id2 = IdGenerator("id");

console.log(id1 === id2);

// attaching id's to object keys -
let object = {
    [id1] : "THis is data 1",
    [id2] : "another private data"
}

console.log(object[id1]);
console.log(object[id2]);