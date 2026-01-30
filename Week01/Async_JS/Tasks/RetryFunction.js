async function retry(func, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await func();
    } catch (error) {
      if (i == retries - 1) {
        throw error;
      }
      console.log(`Retrying in ${delay}ms...`);
      await wait(delay);
      delay *= 2;
    }
  }
}

const wait = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

let count = 0;

// api function iut
async function unstableAPI() {
  count++;
  console.log("Attempt:", count);

  if (count < 3) {
    throw new Error("Fail");
  }
  return "Success";
}

retry(unstableAPI, 5, 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log("Final Error"));


