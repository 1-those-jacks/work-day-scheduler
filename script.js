// Calendar date recorded at the top of the app
$("#current-day").text(moment().format('dddd, MMMM Do YYYY'));
// Functions for picking the time and selecting it if it is past, present, or future
var presentTime = moment().hours();
var timeBlockElems = document.querySelectorAll(".time-block");
console.log(presentTime);
console.log(timeBlockElems);
// Functions for saving data logged in the textarea and putting into local storage...
function saveToTimeSlot(){
	console.log(JSON.parse(localStorage.getItem("time")));
	console.log(timeBlockElems[0].children);
	// need to set item and loop through to get the value attribute from the text area with local storage....
	if (timeBlockElems[0].children[1].value) {
		console.log(timeBlockElems[0].children[1].value);
		localStorage.setItem(".time-block", timeBlockElems[0].children[1].value);
	}
}

function loadToTimeSlot(){
	console.log(JSON.parse(localStorage.getItem("time")));
	var hasData = JSON.parse(localStorage.getItem("time"));
	if (hasData) {
		timeBlockElems.forEach((elem, idx) => {
			console.log("Line 18 ", elem, idx);
			elem.textContent = localStorage.getItem(elem.getAttribute("id"));
		})
	}
}

function updateTime() {
	var currHr = moment().format("HH:mm");
	console.log(typeof presentTime);
	for (var i = 0; i<timeBlockElems.length; i++) {
		console.log(timeBlockElems[i]);
		var currBlock = timeBlockElems[i];
		var currBlockTime = parseInt(currBlock.getAttribute("id"));
		if (currBlockTime < presentTime) {
			currBlock.classList.add("past");
		} else if (currBlockTime === presentTime) {
			currBlock.classList.add("present");
			currBlock.classList.remove("past");
		} else {
			currBlock.classList.remove("present", "past");
			currBlock.classList.add("future");
		}
	}
}

// setInterval(updateTime, 15000);
updateTime();
document.addEventListener("load", loadToTimeSlot);
