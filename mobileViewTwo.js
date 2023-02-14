const line = document.querySelector(".line");

// Fetch data from data.goteborg.se.
fetch("https://data.goteborg.se/RiverService/v1.1/MeasureSites/76cab10c-716f-4d10-8750-419a0802b847?format=json")
    .then((resolve) => {
        return resolve.json();
    })
    .then((data) => {
        
        data.forEach(station => {
            const stationCircle = document.createElement("div");
            stationCircle.classList.add("stationCircle");
            line.append(stationCircle);
        });

        console.log(data);
    });

    