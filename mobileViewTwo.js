const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");

const svgImages = [
  "images/station1.svg",
  "images/station2.svg",
  "images/station3.svg",
  "images/station4.svg",
  "images/station5.svg",
  "images/station6.svg",
  "images/water-drop.svg",
  "images/water-tap.svg",
];

console.log(svgImages);

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
      stationCircle.addEventListener("click", () => {
        console.log("Hello");
      });
    });

    secondHalf.forEach((secondStation) => {
      const stationCircle = document.createElement("div");
      stationCircle.classList.add("stationCircle");
      line2.append(stationCircle);

      stationCircle.addEventListener("click", () => {
        console.log("Hello");
      });
    });
  });

  const addImages = (images, container) => {
    images.forEach(image => {
      const img = document.createElement("img");
      img.src=image;
      container.append(img);
    });
  }
console.log("funka");
