const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");

const svgImages = [
  "images/station1.svg",
  "images/station2.svg",
  "images/station3.svg",
  "images/station4.svg",
  "images/station5.svg",
  "images/station6.svg",
];

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

    // Counter for looping through image array.
    let i = 0;

    //function for looping out the data and creating elements

    function theLoop(infoDivName, infoClass, container, data) {
      data.forEach((station) => {
        let img = new Image();
        img.classList.add("station-image");
        img.src = svgImages[i];

        const stationCircle = document.createElement("div");
        const stationTitle = document.createElement("p");
        stationTitle.textContent = station.Description;
        stationCircle.append(stationTitle);
        stationTitle.classList.add("station-name");
        stationCircle.classList.add("stationCircle");
        container.append(stationCircle);

        stationCircle.append(img);

        i++;

        if (i == svgImages.length) {
          i = 0;
        }

        stationCircle.addEventListener("click", () => {
          const infoDivName = document.createElement("div");
          infoDivName.classList.add(`${infoClass}`);
          stationCircle.append(infoDivName);
        });
      });
    }

    theLoop("infoLeft", "infoDivLeft", line1, firstHalf);
    theLoop("infoRight", "infoDivRight", line2, secondHalf);

    //The original loop, saved as fallback.
    // firstHalf.forEach((station) => {
    //   let img = new Image();
    //   img.classList.add("station-image");
    //   img.src = svgImages[i];

    //   const stationCircle = document.createElement("div");
    //   const stationTitle = document.createElement("p");
    //   stationTitle.textContent = station.Description;
    //   stationCircle.append(stationTitle);
    //   stationTitle.classList.add("station-name");
    //   stationCircle.classList.add("stationCircle");
    //   line1.append(stationCircle);

    //   stationCircle.append(img);

    //   i++;

    //   if (i == svgImages.length) {
    //     i = 0;
    //   }

    //   stationCircle.addEventListener("click", () => {
    //     const infoLeft = document.createElement("div");
    //     infoLeft.classList.add("infoDivLeft");
    //     stationCircle.append(infoLeft);
    //   });
    // });

    // secondHalf.forEach((secondStation) => {
    //   const stationCircle = document.createElement("div");
    //   stationCircle.classList.add("stationCircle");
    //   line2.append(stationCircle);

    //   //svg

    //   stationCircle.addEventListener("click", () => {
    //     const infoRight = document.createElement("div");
    //     infoRight.classList.add("infoDivRight");
    //     stationCircle.append(infoRight);
    //   });
    // });
  });

console.log("funka");

//funktion
