const secInt = setInterval(printTime, 1000);

function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}