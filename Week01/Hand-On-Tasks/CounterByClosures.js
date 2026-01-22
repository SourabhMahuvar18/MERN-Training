// simple counter function demostrate the closure concept 
function counter(){
    let count = 0;
    return function(){
        count+=1;
        return count;
    }
}

let counterValue = counter();
console.log(counterValue());
console.log(counterValue());
console.log(counterValue());
console.log(counterValue());
console.log(counterValue());
console.log(counterValue());


