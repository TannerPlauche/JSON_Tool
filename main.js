function cleanJson() {
    const json = JSON.parse(document.querySelector('#intialJson').value);
    const set = new Set(Object.keys(json));
    const finalJson = Array.from(set)
        .sort()
        .reduce((finalJson, key) => ({ ...finalJson, [key]: json[key] }), {});
    console.log(finalJson);
    const stringified = JSON.stringify(finalJson, null, 4);
    console.log(typeof stringified);
    document.querySelector("#finalJson").innerHTML = stringified;
}