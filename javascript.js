// Set current time at top of page and also left and right buttons in case I want to add more functionality later.
let currentDate = moment().format("MM-DD-YYYY");
let currentTime = moment().format("LT");
let current = document.querySelector("#currentDay");
let previous = document.querySelector("#previousDay");
let next = document.querySelector("#nextDay");
let hourContainer = document.querySelector(".current-hour");

// Appending current date and also scroll buttons to view future and past dates.
current.append(currentDate);
hourContainer.append(currentTime);
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
    if (n > inputTime[i]) {
      $(`#${i + 10}`).addClass("past");
    } else if (n == inputTime[i]) {
      $(`#${i + 10}`).addClass("present");
    } else {
      $(`#${i + 10}`).addClass("future");
    }
  }
}
$(document).ready(function () {
  checkTime();
});

// Grab all save buttons
let saveButton = document.querySelector("#press");
let saveButton1 = document.querySelector("#press1");
let saveButton2 = document.querySelector("#press2");
let saveButton3 = document.querySelector("#press3");
let saveButton4 = document.querySelector("#press4");
let saveButton5 = document.querySelector("#press5");
let saveButton6 = document.querySelector("#press6");
let saveButton7 = document.querySelector("#press7");

// Grab all textarea boxes
let tenText = document.querySelector(".event-ten");
let elevenText = document.querySelector(".event-eleven");
let twelveText = document.querySelector(".event-twelve");
let oneText = document.querySelector(".event-one");
let twoText = document.querySelector(".event-two");
let threeText = document.querySelector(".event-three");
let fourText = document.querySelector(".event-four");
let fiveText = document.querySelector(".event-five");

// Create function for each Event Listener
saveButton.addEventListener("click", function clickButton() {
  localStorage.setItem("10AM", tenText.value);
  tenText.value = localStorage.getItem("10AM");
});
saveButton1.addEventListener("click", function clickButton() {
  localStorage.setItem("11AM", elevenText.value);
  elevenText.value = localStorage.getItem("11AM");
});
saveButton2.addEventListener("click", function clickButton() {
  localStorage.setItem("12PM", twelveText.value);
  twelveText.value = localStorage.getItem("12PM");
});
saveButton3.addEventListener("click", function clickButton() {
  localStorage.setItem("1PM", oneText.value);
  oneText.value = localStorage.getItem("1PM");
});
saveButton4.addEventListener("click", function clickButton() {
  localStorage.setItem("2PM", twoText.value);
  twoText.value = localStorage.getItem("2PM");
});
saveButton5.addEventListener("click", function clickButton() {
  localStorage.setItem("3PM", threeText.value);
  threeText.value = localStorage.getItem("3PM");
});
saveButton6.addEventListener("click", function clickButton() {
  localStorage.setItem("4PM", fourText.value);
  fourText.value = localStorage.getItem("4PM");
});
saveButton7.addEventListener("click", function clickButton() {
  localStorage.setItem("5PM", fiveText.value);
  fiveText.value = localStorage.getItem("5PM");
});

// Create a function that loads the previously saved event items.
function pullTime() {
  if (localStorage.getItem("10AM") === null) {
    tenText.setAttribute("placeholder", "Type Here...");
  } else {
    tenText.setAttribute("placeholder", localStorage.getItem("10AM"));
  }
  if (localStorage.getItem("11AM") == null) {
    elevenText.setAttribute("placeholder", "Type Here...");
  } else {
    elevenText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("12PM") == null) {
    twelveText.setAttribute("placeholder", "Type Here...");
  } else {
    twelveText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("1PM") == null) {
    oneText.setAttribute("placeholder", "Type Here...");
  } else {
    oneText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("2PM") == null) {
    twoText.setAttribute("placeholder", "Type Here...");
  } else {
    twoText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("3PM") == null) {
    threeText.setAttribute("placeholder", "Type Here...");
  } else {
    threeText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("4PM") == null) {
    fourText.setAttribute("placeholder", "Type Here...");
  } else {
    fourText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
  if (localStorage.getItem("5PM") == null) {
    fiveText.setAttribute("placeholder", "Type Here...");
  } else {
    fiveText.setAttribute("placeholder", localStorage.getItem("11AM"));
  }
}

// Call function upon page loading to check for localStorage
pullTime();
