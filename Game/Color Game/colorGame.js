var numSqaures = 6;
var colors = randomColorGenerator(numSqaures);
var squares = document.querySelectorAll(".square");
var pickedColor = pickAColor();
var RGBHeader = document.querySelector("#RGBHeader");
RGBHeader.textContent  = pickedColor;

var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

var resetButton = document.querySelector("#resetButton");

var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1")[0];

easyButton.addEventListener("click", function(){
	h1.style.backgroundColor = "#232323";
	easyButton.classList.add("inverse");
	hardButton.classList.remove("inverse");
	numSqaures = 3;
	colors = randomColorGenerator(numSqaures);
	pickedColor = pickAColor();
	RGBHeader.textContent  = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}

	}
})

hardButton.addEventListener("click", function(){
	h1.style.backgroundColor = "#232323";
	easyButton.classList.remove("inverse");
	hardButton.classList.add("inverse");
	numSqaures = 6;
	colors = randomColorGenerator(numSqaures);
	var pickedColor = pickAColor();
	RGBHeader.textContent  = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	})

resetButton.addEventListener("click", function(){
	colors = randomColorGenerator(numSqaures);
	pickedColor = pickAColor();
	RGBHeader.textContent  = pickedColor;
	for(var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "#232323";
})


resetButton.addEventListener("mouseover", function(){
	this.classList.add("inverse");
})

resetButton.addEventListener("mouseout", function(){
	this.classList.remove("inverse");
})


for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log("clickedColor:" + clickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColor(pickedColor);
			resetButton.textContent = "Play Again?";
		}
		else{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323"
		}
	})
}


function randomColorGenerator(num){
	var arr = [];
	for(var i=0;i<num;i++)
		arr.push(generateColor());
	return arr;
}

function generateColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return("rgb(" +r+ ", " + g + ", " + b + ")");
}

function pickAColor(){
	var index = Math.floor(Math.random() * colors.length);
	console.log("pickedColor:" + colors[index]);
	return colors[index];
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}
