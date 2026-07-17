const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

document.getElementById("lastModified").innerHTML = "Date Modified:" + document.lastModified;

let temperature = 50;
let wind = 8;


function calculateWindChill(t, w) {
    return 35.74 + 0.6215 * t - 35.75 * w ** 0.16 + 0.4275 * t * w ** 0.16
}

if (temperature <= 50 && wind > 3) {
    document.getElementById("windchill").textContent = calculateWindChill(temperature, wind).toFixed(2) + "°F";

}

else {
    document.getElementById("windchill").textContent = ("N/A");
}

document.getElementById("wind").textContent = wind + "MPH";

document.getElementById("temp").textContent = temperature + "°F";