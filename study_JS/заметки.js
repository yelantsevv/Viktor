const listPromise = fetch("https://api.sampleapis.com/countries/countries");
listPromise.then((date) => date.json()).then((countries) => countries);
