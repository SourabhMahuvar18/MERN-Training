// a basic design of howwe can implement api calling uisng the OOP structure

class HttpClient{
    constructor(baseUrl){ // initially base url then we add the endpoint with the url
        this.baseUrl = baseUrl;
    }
    // GET 
    async get(endpoint){
        const response = await fetch(this.baseUrl + endpoint)
        return response.json();
    }
    // POST
    async post(endpoint,data){
        const response = await fetch(this.baseUrl + endpoint , {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        });
        return response.json();
    }
    // PUT
    async put(endpoint,data){
        const response = await fetch(this.baseUrl + endpoint , {
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        });
        return response.json();
    }
    // DELETE
    async delete(endpoint,data){
        const response = await fetch(this.baseUrl + endpoint , {
            method:"DELETE",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        });
        return response.json();
    }
}

// TESTING by dummy link
const api = new HttpClient("https://jsonplaceholder.typicode.com");

api.get("/users").then(data => console.log(data));

console.log("\n\n");

api.post("/posts", {
  title: "Hello",
  body: "Test body",
  userId: 1
}).then(data => console.log(data));
