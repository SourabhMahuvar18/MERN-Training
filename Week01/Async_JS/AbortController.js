// Abortcontroller lets us stop any ongoing async operation like fetch

const controller = new AbortController();
const signal = controller.signal;

let url = "https://jsonplaceholder.typicode.com/users";

fetch(url, { signal })
  .then((respose) => {
    if (!respose.ok) {
      throw new Error(`HTTP Error : ${respose.status}`);
    }
    return respose.json();
  })
  .then((data) => {
    console.log("Response data :");
    console.log(data);
  })
  .catch((err) => {
    if (err.name == "AbortError") {
      console.log("Abort error ");
    } else {
      console.log(err);
    }
  });

setTimeout(() => {
  controller.abort(); // abort the call in one second
}, 1000);

// stops the fetch call after one second

/*
    how it runs : 
            What happens
            Fetch starts
            abort() is called
            Promise rejects
            Error name = "AbortError"
*/


// abortcontroller with async/ await 

async function fetchWithCancel() {
  const controller = new AbortController();

  setTimeout(() => controller.abort(), 1000);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      { signal: controller.signal }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request canceled");
    } else {
      console.error("Error:", error);
    }
  }
}

fetchWithCancel();
