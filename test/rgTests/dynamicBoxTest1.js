window.addEventListener("DOMContentLoaded", async ()=>{
	const response = await fetch("https://whengryphonsfly.github.io/test/rgTests/dynamicBoxTest1.json");
	
	if (!response.ok) {
		alert("An error has occured. Please refresh the page."); // TODO Put this on the document itself
		return;
	}
	
	const data = await response.json();
	
	if (!data || data.length < 1) {
		alert("There are currently no events defined. Please define a new event.");
		return;
	}
	
	for (threeDEvent in data) {
		makeTableEntry(threeDEvent);
	}
	
});

function makeTableEntry(data) {
	const tableEntryList = document.getElementById("boxList");
	const tableEntry = document.createElement("li");
	const tableEntryHeader = document.createElement("div");
	
	tableEntryHeader.setAttribute("class", "boxHeading");
	tableEntryHeader.innerHTML += "Test Heading"; // TODO possible security vulnerability
	tableEntry.appendChild(tableEntryHeader);
	
	tableEntry.innerHTML += "Test Body"; // TODO possible security vulnerability
	tableEntryList.appendChild(tableEntry);
}
