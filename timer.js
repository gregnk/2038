function getTime() {
	// Get the amount of time left
	var currentDate = Date.now() / 1000; // The amount seconds since the epoch
	var endDate = 2147483647;            // 19 January 2038, 03:14:07 UTC
	var timeLeftRaw = endDate - currentDate;
	
	// Format and display the time
	var seconds = timeLeftRaw << 0;
	var minutes = seconds / 60 << 0;
	var hours = minutes / 60 << 0;
	var days = hours / 24 << 0;
	
	seconds %= 60;
	minutes %= 60;
	hours %= 24;
	
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	
	// Update in real time
	// Refreshes every second
	var timeout = setTimeout(getTime, 1000);
}