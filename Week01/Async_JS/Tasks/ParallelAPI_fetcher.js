async function fetchParallelAPI(urls) {
  try {
    let results = await Promise.allSettled(
      urls.map((url) => fetch(url).then((res) => res.json())),
    );

    return results.map((res) =>
      res.status === "fulfilled" ? res.value : { error: "API failed" },
    );
  } catch (err) {
    console.log("Unexpected err : " + err);
  }
}


async function fetchParallel(urls) {
  // Step 1 + 2: Start all API calls
  const promises = urls.map(url => fetch(url));

  // Step 3: Wait for all (success + failure)
  const results = await Promise.allSettled(promises);

  // Step 4: Handle success & failure
  const finalData = results.map((res, index) => {
    if (res.status === "fulfilled") {
      return res.value.json();
    } else {
      return { error: `Failed to fetch ${urls[index]}` };
    }
  });

  // Step 5: Resolve all JSON promises
  return Promise.all(finalData);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://wrong-url.com/data"
];

fetchParallel(urls).then(console.log);


