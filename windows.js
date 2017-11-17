
function consoleCode(consoleName){
	var str = '';
	
	str = `<div class="conts centers consoleBox ui-widget-content" id="contents-` + consoleName + `" style="pointer-events: all; width: 75%; height: 75%;">
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
			</div>`;
	return str;
}

function leftWindowCode(consoleName){
	var str = '';
	
	str =+ `<div id="leftWindows-` + consoleName + `" class="minWindow noPointerEvnt ui-widget-content" style="opacity: 0;">
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
			</div>`;
	return str;
}

function createWindow(consoleName){
	var conCode = consoleCode(consoleName);
	var winCode = leftWindowCode(consoleName);
	
	$('consoleCodeHere').replaceWith(conCode);
	$('leftWindowCodeHere').replaceWith(conCode);
}