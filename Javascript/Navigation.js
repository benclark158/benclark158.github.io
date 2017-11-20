/**
 * Created by Ben Clark on 30/07/2017.
 */
 
var isMax = {};
var isMin = {};
var isWeb = 0;

function onMaximiseButton(consoleName){

	var pos, size;
	if(document.getElementById("contents-" + consoleName).getAttribute("data-size") == 'small'){
		//small
		pos = "22.5%";
		size = "55%";
	} else if(document.getElementById("contents-" + consoleName).getAttribute("data-size") == 'medium'){
		//medium
        pos = "17.5%";
        size = "65%";
	} else {
		//big
        pos = "12.5%";
        size = "75%";
	}

	if(isMin[consoleName] == 1){
		//make big from min
		$("#contents-" + consoleName).animate({left: pos, top: pos, width: size, height: size, opacity: '1'}, "fast");
		$("#leftWindows-" + consoleName).animate({opacity: '0'}, "fast");
		$("#leftWindows-" + consoleName).addClass("noPointerEvnt");
		//$("#taskbar").addClass("noPointerEvnt");
		isMin[consoleName] = 0;
	} else {
		if(isMax[consoleName] == 0){
			//make big
			$("#contents-" + consoleName).animate({left: "0px", top: "0px", width: '100%', height: '100%', opacity: '1'}, "fast");
			isMax[consoleName] = 1;
		} else {
			//make original
			$("#contents-" + consoleName).animate({left: pos, top: pos, width: size, height: size, opacity: '1'}, "fast");
			isMax[consoleName] = 0;
		}
	}
}

function onMinimiseButton(consoleName){
	if(isMin[consoleName] == 0){
		$("#contents-" + consoleName).addClass("noPointerEvnt");
		
		$("#contents-" + consoleName).css("position", "absolute");
		
		$("#contents-" + consoleName).animate({left: "0%", top: "0%", width: '0%', height: '0%', opacity: '0'}, "fast");
		
		$("#leftWindows-" + consoleName).animate({opacity: '1'}, "fast");
		$("#leftWindows-" + consoleName).removeClass("noPointerEvnt");
		$("#taskbar").removeClass("noPointerEvnt");
		isMin[consoleName] = 1;
	}
}

function onCloseButton(consoleName){
	$("#contents-" + consoleName).animate({width: '0%', height: '0%', opacity: '0'}, "fast");
	removeWindow(consoleName);
}

function openWebWindow(consoleName){
	if(isWeb == 0){
		$("#contents-" + consoleName).addClass("noPointerEvnt");
		$("#webWindow").removeClass("noPointerEvnt");
		$("#webWindow").animate({width: '100%', height: '100%', opacity: '1'}, "fast");
		isWeb = 1;

		$("#console-" + consoleName).blur();
	}
}

function closeWebWindow(consoleName){
	if(isWeb == 1){
		$("#contents-" + consoleName).removeClass("noPointerEvnt");
		$("#webWindow").addClass("noPointerEvnt");
		$("#webWindow").animate({width: '50%', height: '50%', opacity: '0'}, "fast");
		//document.getElementById("webWindow").innerHTML = "<div></div>";

		openPage("emptyPage");
		
		$("#console-" + consoleName).focus();

		isWeb = 0;
	}
}

function closeCurrent(consoleName){
	if(isWeb == 1){
		closeWebWindow(consoleName);
	} else if(isMax[consoleName] == 1){
		onMaximiseButton(consoleName);
	} else {
		onMinimiseButton(consoleName);
	}
}
