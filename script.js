var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li"); 
for (var i = 0 ; i < liList.length ; i++) {
	creatDeleteButton();
}

function creatDeleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	liList[i].appendChild(btn);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("div");
	div.appendChild(document.createTextNode(input.value));
	li.appendChild(div);
	ul.appendChild(li);
	input.value = "";
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addLine() {
	this.classList.toggle("done");
}

function addLineAfterClick() {
	var liArray = document.querySelectorAll("div");
	for (var i = 1 ; i < liArray.length; i++) {
		liArray[i].addEventListener("click", addLine);
	};
}

function deleteButton() {
	this.parentNode.remove();
}

function deleteListAfterClick() {
	var buttonArray = document.querySelectorAll("button");
	for (var i = 1 ; i < buttonArray.length; i++) {
		buttonArray[i].addEventListener("click", deleteButton);
	};
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addLineAfterClick, true);

ul.addEventListener("click", deleteListAfterClick, true);