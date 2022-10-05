console.log("Hello, world!");

/*window.addEventListener("DOMContentLoaded", async ()=>{
	console.log("Event listener fired");
	const response = await fetch("https://whengryphonsfly.github.io/test/rgTests/dynamicBoxTest1.json");
	console.log("Event listener obtained JSON");
	
	if (!response.ok) {
		alert("An error has occured. Please refresh the page."); // TODO Put this on the document itself
		return;
	}
	
	const data = await response.json();
	
	if (!data.body.events) {
		alert("There are currently no events defined. Please define a new event.");
		return;
	}
	
	console.log("JSON obtained successfully");
	for (threeDEvent in data.body.events) {
		makeTableEntry(threeDEvent);
	}
	
});*/

/*function makeTableEntry(data) {
	console.log("makeTableEntry called");
	const tableEntryList = document.getElementById("boxList");
	const tableEntry = document.createElement("li");
	const tableEntryHeader = document.createElement("div");
	
	tableEntryHeader.setAttribute("class", "boxHeading");
	tableEntryHeader.innerHTML += "Test Heading"; // TODO possible security vulnerability
	tableEntry.appendChild(tableEntryHeader);
	
	tableEntry.innerHTML += "Test Body"; // TODO possible security vulnerability
	tableEntryList.appendChild(tableEntry);
}*/