function updateTime() {
  let saoPauloElement = document.querySelector("#sao-paulo");
  if (!saoPauloElement) {
    return;
  }
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");
  saoPauloDateElement.innerHTML = saoPauloTime.format("LL");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (!chicagoElement) {
    return;
  }
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("LL");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("LL")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);
setInterval(() => {
  if (document.querySelector("#city-select").value) {
    updateCity({
      target: { value: document.querySelector("#city-select").value },
    });
  }
}, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
