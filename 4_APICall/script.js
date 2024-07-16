const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Using 'fetch()' & Promise Handling
function fetchData() {
  const responsePromise = fetch(API_URL, { method: "GET" });
  console.log("responsePromise: ", responsePromise);
  const dataPromise = responsePromise
    .then((response) => {
      console.log("Resolving responsePromise:", response);
      if (response.ok)
        console.log(
          "Status:",
          response.status,
          "StatusText:",
          response.statusText
        );
      else new Error(response.statusText);
      return response.json();
    })
    .catch((err) => console.log("Error:", err));
  console.log("dataPromise: ", dataPromise);
  const result = dataPromise.then((data) => {
    console.log("Resolving dataPromise:", data);
    displayData(data);
    return data;
  });
  console.log("result: ", result);

  //   fetch(API_URL, { method: "GET" })
  //     .then((response) => {
  //       if (!response.ok) new Error(response.statusText);
  //       return response.json();
  //     })
  //     .then((data) => displayData(data))
  //     .catch((err) => console.log("Error:", err))
  //     .finally(() => console.log("Fetch Over"));
}
// fetchData();

// Using 'async await'
async function fetchDataAsyncAwait() {
  const response = await fetch(API_URL, { method: "GET" });
  console.log("response: ", response);
  if (response.ok) {
    console.log("Status:", response.status, "StatusText:", response.statusText);
    const data = await response.json();
    console.log("data: ", data);
    displayData(data);
  } else new Error(response.statusText);

  //   const data = await (await fetch(API_URL, { method: "GET" })).json();
  //   displayData(data);
}
// fetchDataAsyncAwait();

// Using XHR Async Await
function XHRPromise(method, url) {
  const XHRpromise = new Promise((resolve, reject) => {
    const xhrRequest = new XMLHttpRequest();
    console.log("xhrRequest:", xhrRequest);
    xhrRequest.open(method, url);
    xhrRequest.responseType = "json";
    xhrRequest.send();
    xhrRequest.onload = () => {
      // Not available in 'xhrRequest'
      //   if (xhrRequest.ok) {
      if (xhrRequest.status === 200) {
        console.log(
          "Status:",
          xhrRequest.status,
          "StatusText:",
          xhrRequest.statusText
        );
        resolve(xhrRequest.response);
      } else {
        reject(xhrRequest.response);
      }
    };
  });
  return XHRpromise;
}
function XHRFetch() {
  const dataPromise = XHRPromise("GET", API_URL);
  console.log("dataPromise: ", dataPromise);
  dataPromise.then((data) => displayData(data));
}
// XHRFetch();
async function XHRAsyncAwait() {
  // 'GET' for Fetching the Data
  const data = await XHRPromise("GET", API_URL);
  console.log("data: ", data);
  displayData(data);
}
// XHRAsyncAwait();

const container = document.querySelector(".container");
function displayData(apiData) {
  apiData.forEach((item) => {
    const fragment = document.createDocumentFragment();
    const title = document.createElement("h3");
    title.textContent = item.id + " " + item.title;
    const body = document.createElement("p");
    body.textContent = item.body;
    fragment.append(title, body);
    console.log(fragment);
    container.appendChild(fragment);
  });
}
