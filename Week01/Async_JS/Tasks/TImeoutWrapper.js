// timeout function which fails if the time is exceeded
function withTimeout(promise,time){
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(()=>{
            reject(new Error("Operation time out"));
        },time);
    });

    return Promise.race([promise,timeoutPromise]);
}

// usage & testing for timeout function 
withTimeout(fetch("https://jsonplaceholder.typicode.com/posts/1"), 2000)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
    

 