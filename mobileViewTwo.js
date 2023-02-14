const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");

// Fetch data from data.goteborg.se.
fetch(
  "https://data.goteborg.se/RiverService/v1.1/MeasureSites/76cab10c-716f-4d10-8750-419a0802b847?format=json"
)
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    const half = Math.ceil(data.length / 2);

    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    console.log(firstHalf);
    console.log(secondHalf);

    //loop
    firstHalf.forEach((station) => {
      const stationCircle = document.createElement("div");
      stationCircle.classList.add("stationCircle");
      line1.append(stationCircle);
    });

    secondHalf.forEach((secondStation) => {
      const stationCircle = document.createElement("div");
      stationCircle.classList.add("stationCircle");
      line2.append(stationCircle);
    });
  });

console.log("funka");
