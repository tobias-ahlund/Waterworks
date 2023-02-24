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

    theLoop("infoLeft", line1, firstHalf);
    theLoop("infoRight", line2, secondHalf);
  });

//function for looping out the data and creating elements
function theLoop(infoDivName, container, data) {
  data.forEach((station) => {
    // Counter for looping through image array.
    let i = 0;

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
    const infoStationName = document.createElement("p");
    infoStationName.textContent = station.Description;
    infoStationName.classList.add("info-box-headline");
    infoDivName.classList.add("hidden");
    infoDivName.append(infoStationName);

    // Create info elements
    const measurement = document.createElement("p");
    measurement.classList.add("measurement");

    const dg = document.createElement("p");

    const sg = document.createElement("p");

    const current = document.createElement("p");

    console.log(station);

    //Append infoDivName elements
    const infoBoxArrow = document.createElement("div");
    const infoBoxClose = document.createElement("img");
    infoBoxArrow.classList.add("info-box-arrow");
    infoBoxClose.classList.add("close-info-button");
    infoBoxClose.src = "images/close-button.svg";
    infoDivName.append(infoBoxArrow);
    infoDivName.append(infoBoxClose);
    infoDivName.append(infoStationName);

    //Append info elements
    infoDivName.append(measurement);
    infoDivName.append(current);

    // Print out info about station
    measurement.textContent = `Current water level is at: ${station.MeasureParameters[0].CurrentValue}m`;
    dg.textContent = `Upper limit is at: ${station.DG}cm`;
    sg.textContent = `Lower limit is at: ${station.SG}cm`;

    station.MeasureParameters.forEach((measureObject) => {
      if (measureObject.Code.includes("Flow")) {
        const flow = document.createElement("p");
        flow.textContent = `Flow is at: ${measureObject.CurrentValue}m3/s`;
        infoDivName.append(flow);
      }
    });

    station.MeasureParameters.forEach((measureObject) => {
      if ("CurrentValue" in measureObject) {
        infoDivName.append(measurement);
        infoDivName.append(current);
      } else {
        measurement.textContent = `No current water level available`;
      }
    });

    if ("DG" && "SG" in station) {
      infoDivName.append(dg);
      infoDivName.append(sg);
    }

    //Append info elements
    infoDivName.append(measurement);
    infoDivName.append(current);

    stationCircle.addEventListener("click", () => {
      infoDivName.classList.toggle("active");
    });

    infoDivName.addEventListener("click", () => {
      infoDivName.classList.toggle("active");
    });
    // Adds the "animate" class to the element which starts the animation.
    activateAnimation();
    function activateAnimation() {
      stationCircle.addEventListener("click", () => {
        stationCircle.classList.add("animate");
        removeAnimation();
      });
    }

    // Removes the "animate" class from the element right after it's run (750ms).
    function removeAnimation() {
      setTimeout(() => {
        stationCircle.classList.remove("animate");
      }, 750);
    }
  });
}

console.log("funka");

//funktion
