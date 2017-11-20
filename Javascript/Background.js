/**
 * Created by Ben Clark on 29/07/2017.
 */

var nodes = [];
var isActivated = 1;
var numNodes = 35;

function generateNodes(amount){
	var nodes = [];
	for(var i = 0; i < amount; i++){
		nodes[i] = generateRandomNode();
	}
	return nodes;
}

function generateRandomNode(){
	var canvas=document.getElementById("canvas");

	var size = 20 / 4;
	var connectedNodes = 0;
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var speedX = (Math.random() - 0.5) * 1.2 * 10 / 2;
	var speedY = (Math.random() - 0.5) * 1.2 * 10 / 2;
	var colored = [Math.floor(Math.random() * 166), Math.floor(Math.random() * 166), Math.floor(Math.random() * 166)];

	return {size: size, isColored: colored, conNodes: connectedNodes, xPos: x, yPos: y, xSpeed: speedX, ySpeed: speedY};
}

function checkCanRun() {
	var settings = document.location.href.split('#')[1];

	if (typeof(settings) !== 'undefined') {
		var singleSettings = settings.split(',');

		for (var i = 0; i < singleSettings.length; i++) {
			if (singleSettings[i].valueOf().indexOf("graphic_state") !== -1) {
				isActivated = singleSettings[i].split(':')[1];
				return;
			}
		}
	}
	isActivated = 1;
}

function getNumberNodes() {
	var settings = document.location.href.split('#')[1];

	if (typeof(settings) !== 'undefined') {
		var singleSettings = settings.split(',');

		for (var i = 0; i < singleSettings.length; i++) {
			if (singleSettings[i].valueOf().indexOf("graphic_nodes") !== -1) {
				numNodes = singleSettings[i].split(':')[1];
				return;
			}
		}
	}
	numNodes = 35;
}

function update() {
	//console.time('update');
	var canvas = document.getElementById("canvas");

	var ctx = canvas.getContext("2d");

	if (isActivated <= 0) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		return;
	} else {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		var nLength = nodes.length;
		var maxLinkDistance = 3000 / 5;

		ctx.lineWidth = 2;

		for (var i = 0; i < nLength; i++) {
			nodes[i].conNodes = 0;
			var boxOne = nodes[i];

			var srcPosX = boxOne.xPos;
			var srcPosY = boxOne.yPos;

			for (var cons = 0; cons < nLength; cons++) {
				var target = nodes[cons];

				var targPosX = nodes[cons].xPos;
				var targPosY = nodes[cons].yPos;

				var dx2 = Math.pow(srcPosX - targPosX, 2);
				var dy2 = Math.pow(srcPosY - targPosY, 2);
				var distance = Math.sqrt(dx2 + dy2);

				var hexVal1, hexVal2, hexVal3;

				hexVal1 = mapHex(distance, 0, maxLinkDistance, (boxOne.isColored[0] + target.isColored[0]) / 2, 43);

				hexVal2 = mapHex(distance, 0, maxLinkDistance, (boxOne.isColored[1] + target.isColored[1]) / 2, 43);
				hexVal3 = mapHex(distance, 0, maxLinkDistance, (boxOne.isColored[2] + target.isColored[2]) / 2, 43);

				ctx.strokeStyle = '#' + hexVal1 + hexVal2 + hexVal3;

				nodes[cons].color = ctx.strokeStyle;

				nodes[i].color = ctx.strokeStyle;

				if (distance < maxLinkDistance) {
					ctx.beginPath();
					ctx.moveTo(boxOne.xPos + (boxOne.size / 2), boxOne.yPos + (boxOne.size / 2));
					ctx.lineTo(target.xPos + (target.size / 2), target.yPos + (target.size / 2));
					ctx.stroke();
					nodes[i].conNodes++;
				}
			}
			//nodes
			ctx.fillStyle = '#969696';

			ctx.fillRect(boxOne.xPos, boxOne.yPos, boxOne.size, boxOne.size);

			boxOne.xPos += boxOne.xSpeed;
			boxOne.yPos += boxOne.ySpeed;

			if (boxOne.xPos < 0 || boxOne.xPos > canvas.width || boxOne.yPos < 0 || boxOne.yPos > canvas.height) {
				nodes[i].xSpeed = (Math.random() - 0.5) * 1.2 * -5;
				nodes[i].ySpeed = (Math.random() - 0.5) * 1.2 * -5;
			}
		}
	}
	//console.timeEnd("update");
}

function mapHex(number, minNumber, maxNumber, maxResult, minResult){
	if(number > maxNumber){
		number = maxNumber;
	}
	if(number < minNumber){
		number = minNumber
	}
	var dNum = minNumber - maxNumber;

	var dRes = maxResult - minResult;
	var grad = dRes / dNum;

	var result = number * grad + maxResult;


	if(result > maxResult){
		result = maxResult;
	}
	if(result < minResult){
		result = minResult
	}
	result = Math.floor(result);

	return result.toString(16);
}

function resize(){
	var canvas = document.getElementById("canvas");

	canvas.width = window.innerWidth * 6 / 4;
	canvas.height = window.innerHeight * 6 / 4;

	//document.getElementById('nav').style.height = (window.innerHeight - 10) +'px%';
}

$(function(){

	resize();
	checkCanRun();
	getNumberNodes();

	var canvas = document.getElementById("canvas");

	canvas.style.width = "100%";
	canvas.style.width = "100%";

	canvas.style.backgroundColor = '#2b2b2b';
	canvas.style.display = 'block';
	canvas.style.padding = "0px";
	canvas.style.margin = "0px";

	document.addEventListener("onresize", resize());

	nodes = generateNodes(numNodes);

	setInterval('update()', Math.floor(1000 / 30));
	//setInterval('checkCanRun()', 1000);
});