function updateTime() {
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");
  saoPauloDateElement.innerHTML = saoPauloTime.format("LL");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("LL");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime, 1000);
