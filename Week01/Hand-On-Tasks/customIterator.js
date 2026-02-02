// custom iterator - which runs from a specified start to range end with specific steps

function customIterator(start = 0 ,end = Infinity , step = 1){
    let nextIndex = start;
    let iterationCount  = 0;
    let rangeIterator = {
        next(){ // iterator must have next() function
            let result;
            if(iterationCount  < end){
                result = {value : nextIndex, done :false};
                nextIndex += step;
                iterationCount ++;
                return result;
            }
            return {value : iterationCount, done: true } // always returns a object of result
        }
    }
    return rangeIterator;
}ywsfh

const iter = customIterator(1,20,2);
let result = iter.next(); // caling the next function

//printing the iterator values 
while(!result.done){
    console.log(result.value);
    result = iter.next();
}