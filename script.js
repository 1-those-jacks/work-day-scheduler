// Calendar date recorded at the top of the app
$("#current-day").text(moment().format('dddd, MMMM Do YYYY'));
// Functions for picking the time and selecting it if it is past, present, or future
var presentTime = moment().hours();
var timeBlockElems = document.querySelectorAll(".time-block");
// console.log(presentTime);
// console.log(timeBlockElems);
// Functions for saving data logged in the textarea and putting into local storage...
function saveToTimeSlot(){
	console.log(localStorage.getItem("time"));
	console.log(timeBlockElems[0].children);
	// need to set item and loop through to get the value attribute from the text area with local storage....
	for (var i = 0; i < timeBlockElems.length; i++) {
	if (timeBlockElems[i].children[1].value) {
		console.log(timeBlockElems[i].children[1].value);

		localStorage.setItem("7AM", timeBlockElems[0].children[1].value);
		localStorage.setItem("8AM", timeBlockElems[1].children[1].value);
		localStorage.setItem("9AM", timeBlockElems[2].children[1].value);
		localStorage.setItem("10AM", timeBlockElems[3].children[1].value);
		localStorage.setItem("11AM", timeBlockElems[4].children[1].value);
		localStorage.setItem("12PM", timeBlockElems[5].children[1].value);
		localStorage.setItem("1PM", timeBlockElems[6].children[1].value);
		localStorage.setItem("2PM", timeBlockElems[7].children[1].value);
		localStorage.setItem("3PM", timeBlockElems[8].children[1].value);
		localStorage.setItem("4PM", timeBlockElems[9].children[1].value);
		localStorage.setItem("5PM", timeBlockElems[10].children[1].value);
		localStorage.setItem("6PM", timeBlockElems[11].children[1].value);

	}
}
}

function loadToTimeSlot(){
	// console.log(localStorage.getItem("time"));
	// var hasData = JSON.parse(localStorage.getItem("time"));
	// if (hasData) {
	// 	timeBlockElems.forEach((elem, idx) => {
	// 		console.log("Line 24 ", elem, idx);
	// 		elem.textContent = localStorage.getItem(elem.getAttribute("id"));
	// 	});
	// 	}
	var SevenAM = localStorage.getItem("7AM");
	document.querySelector("#7").textContent = SevenAM;
	// localStorage.getItem("8AM");
	// localStorage.getItem("9AM");
	// localStorage.getItem("10AM");
	// localStorage.getItem("11AM");
	// localStorage.getItem("12PM");
	// localStorage.getItem("1PM");
	// localStorage.getItem("2PM");
	// localStorage.getItem("3PM");
	// localStorage.getItem("4PM");
	// localStorage.getItem("5PM");
	// localStorage.getItem("6PM");
	}



function updateTime() {
	// console.log(typeof presentTime);
	for (var i = 0; i < timeBlockElems.length; i++) {
		// console.log(timeBlockElems[i]);
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
loadToTimeSlot();
