// Set current time at top of page and also left and right buttons in case I want to add more functionality later.

let currentDate = moment().format("MM-DD-YYYY");
let currentTime = moment().format("LT");
let current = document.querySelector("#currentDay");
let previous = document.querySelector("#previousDay");
let next = document.querySelector("#nextDay");

// Appending current date and also scroll buttons to view future and past dates.

current.append(currentDate);
previous.append("<"); // Future Functionality
next.append(">"); // Future Functionality

// Establish times
let setTenAM = moment()
  .set("hour", 10)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setElevenAM = moment()
  .set("hour", 11)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setTwelveAM = moment()
  .set("hour", 12)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setOnePM = moment()
  .set("hour", 13)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setTwoPM = moment()
  .set("hour", 14)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setThreePM = moment()
  .set("hour", 15)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setFourPM = moment()
  .set("hour", 16)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");
let setFivePM = moment()
  .set("hour", 17)
  .set("minute", 00)
  .set("second", 00)
  .format("LT");

  // Identify the containers that will have the time text.
let tenContainer = document.querySelector("#ten-am");
let elevenContainer = document.querySelector("#eleven-am");
let twelveContainer = document.querySelector("#twelve-am");
let oneContainer = document.querySelector("#one-pm");
let twoContainer = document.querySelector("#two-pm");
let threeContainer = document.querySelector("#three-pm");
let fourContainer = document.querySelector("#four-pm");
let fiveContainer = document.querySelector("#five-pm");

// Append the times into the container
tenContainer.append(setTenAM);
elevenContainer.append(setElevenAM);
twelveContainer.append(setTwelveAM);
oneContainer.append(setOnePM);
twoContainer.append(setTwoPM);
threeContainer.append(setThreePM);
fourContainer.append(setFourPM);
fiveContainer.append(setFivePM);

// Create an array that grabs the values from the time elements.
let inputTime = [
  tenContainer.getAttribute("value"),
  elevenContainer.getAttribute("value"),
  twelveContainer.getAttribute("value"),
  oneContainer.getAttribute("value"),
  twoContainer.getAttribute("value"),
  threeContainer.getAttribute("value"),
  fourContainer.getAttribute("value"),
  fiveContainer.getAttribute("value"),
];

// Compare the current time to the time block and colorize it based on past/present/future
function checkTime() {
  var d = new Date();
  var n = d.getHours();
  for (var i = 0; i < inputTime.length; i++) { 
    //    i+10
    //   $(`#${i+10}`).addClass
    if (n > inputTime[i]) {   
              $(`#${i+10}`).addClass("past");
            } else if (n == inputTime[i]) {
              $(`#${i+10}`).addClass("present");
            } else {
              $(`#${i+10}`).addClass("future");
            //   $(".event[i]").addClass("future");
            }

}


}
$(document).ready(function () {
  checkTime();
});

saveButton = $('i')

saveButton.addEventListener("click", function() {
    textTen = document.querySelector("#10");
    let calendarEvent = localStorage.getItem("10AM");
    calendarEvent = textTen;
    console.log(textTen)
});
