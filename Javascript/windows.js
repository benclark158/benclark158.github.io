
function consoleCode(consoleName){
	var str = '';
	
	str = `<div class="conts centers consoleBox ui-widget-content" id="contents-` + consoleName + `" data-size="medium" style="pointer-events: all; width: 75%; height: 75%; opacity: 0;" onclick="whenClicked('` + consoleName +`')">
				<div id="windowBar-` + consoleName + `" class="windowBar">
					<span class="winButton minButton" onclick="onMinimiseButton('` + consoleName + `');">
						<span style="padding: 0px 4px; margin-left: 4px;">&minus;</span>
					</span>
					<span class="winButton maxButton" onclick="onMaximiseButton('` + consoleName + `');">
						<span style="padding: 0px 4px; margin-left: 4px;">&square;</span>
					</span>
					<span class="winButton closeButton" onclick="onCloseButton('` + consoleName + `');">
						<span style="padding: 0px 4px; margin: 0px;">&times;</span>
					</span>
				</div>
				<form id="consoleForm-` + consoleName + `" class="formConsole">
					<textarea id="console-` + consoleName + `" class="textConsole" spellcheck="false" autofocus ></textarea>
				</form>
			</div>
			<div id="consoleCodeHere"></div>`;
	return str;
}

function leftWindowCode(consoleName){
	var str = '';
	
	str += `<div id="leftWindows-` + consoleName + `" class="minWindow noPointerEvnt ui-widget-content" style="opacity: 0;">
				Website Command Line
				<div class="windowBar" style="display: inline;" onclick="onMaximiseButton('` + consoleName + `');">
					<span class="winButton minButton">
						<span style="padding: 0px 4px; margin-left: 4px;">&minus;</span>
					</span>
					<span class="winButton maxButton">
						<span style="padding: 0px 4px; margin-left: 4px;">&square;</span>
					</span>
					<span class="winButton closeButton">
						<span style="padding: 0px 4px; margin: 0px;">&times;</span>
					</span>
				</div>
			</div>
			<div id="leftWindowCodeHere"></div>`;
	return str;
}

function createWindow(consoleName){
	var conCode = consoleCode(consoleName);
	var winCode = leftWindowCode(consoleName);

	document.getElementById("consoleCodeHere").outerHTML = conCode;
	document.getElementById("leftWindowCodeHere").outerHTML = winCode;

	$( "#contents-" + consoleName).draggable({ containment: "#dragContainer", scroll: false });
	isMin[consoleName] = 0;

	isMax[consoleName] = 0;
	onMinimiseButton(consoleName);

	onMaximiseButton(consoleName);
	append(help(), consoleName);

	append(newCommand(), consoleName);
}

function removeWindow(consoleName){
	document.getElementById("contents-" + consoleName).outerHTML = "";
	document.getElementById("leftWindows-" + consoleName).outerHTML = "";
}

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}