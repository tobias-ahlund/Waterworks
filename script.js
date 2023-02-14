// Add images
let waterTap = new Image();
waterTap.classList.add("water-tap");
waterTap.src="water-tap.svg";
waterTap.alt="water tap";

let waterDrop = new Image();
waterDrop.classList.add("water-drop");
waterDrop.src="images/water-drop.svg";
waterDrop.alt="images/water drop";

document.body.append(waterTap);
document.body.append(waterDrop);

// Fetch data from data.goteborg.se.
fetch("https://data.goteborg.se/RiverService/v1.1/MeasureSites/76cab10c-716f-4d10-8750-419a0802b847?format=json")
    .then((resolve) => {
        return resolve.json();
    })
    .then((data) => {
        let div = document.createElement("div");
        
        data.forEach((station) => {
            // Show all stations
            div.innerHTML += `<p>${station.Description}</p>`;
        }) 

        document.body.append(div);
    });