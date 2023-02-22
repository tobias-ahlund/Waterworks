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

    function theLoop(infoDivName, container, data) {
      data.forEach((station) => {
        let img = new Image();
        img.classList.add("station-image");
        img.src = svgImages[i];

        const stationCircle = document.createElement("div");
        const stationTitle = document.createElement("p");
        stationTitle.textContent = station.Description;
        stationTitle.classList.add("station-name");
        stationCircle.classList.add("stationCircle");

        stationCircle.append(img);

        i++;

        if (i == svgImages.length) {
          i = 0;
        }

        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList.add("wrapperDiv");
        container.append(wrapperDiv);
        const infoDivName = document.createElement("div");
        wrapperDiv.append(stationCircle);
        wrapperDiv.append(infoDivName);
        wrapperDiv.append(stationTitle);
        const infoStationName = station.Description;
        infoDivName.classList.add("hidden");
        infoDivName.append(infoStationName);

        // Create info elements
        const measurement = document.createElement("p");
        measurement.classList.add("measurement");

        const dg = document.createElement("p");
        dg.classList.add("dg");

        const sg = document.createElement("p");
        sg.classList.add("sg");

        const current = document.createElement("p");

        console.log(station);

        // Print out info about station
        measurement.textContent = `Current water level is at: ${station.MeasureParameters[0].CurrentValue}m`;
        dg.textContent = `Upper limit is at: ${station.DG}cm`;
        sg.textContent = `Lower limit is at: ${station.SG}cm`;
        current.textContent = `Flow is at: ${station.MeasureParameters}m3/s`;

        //Append info elements
        infoDivName.append(measurement);
        infoDivName.append(dg);
        infoDivName.append(sg);
        infoDivName.append(current);

        stationCircle.addEventListener("click", () => {
          infoDivName.classList.toggle("active");
        });

        infoDivName.addEventListener("click", () => {
          infoDivName.classList.toggle("active");
        });
      });
    }

    theLoop("infoLeft", line1, firstHalf);
    theLoop("infoRight", line2, secondHalf);

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
