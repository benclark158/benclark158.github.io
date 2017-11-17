/**
 * Created by Ben Clark on 30/07/2017.
 */
 
var isMax = 0;
var isMin = 0;
var isWeb = 0;

function onMaximiseButton(consoleName){
	console.log("isMax - " + isMax);
	console.log("isMin - " + isMin);

	if(isMin == 1){
		//make big from min
		$("#contents-" + consoleName).animate({left: "12.5%", top: "12.5%", width: '75%', height: '75%', opacity: '1'}, "fast");
		$("#leftWindows-" + consoleName).animate({opacity: '0'}, "fast");
		$("#leftWindows-" + consoleName).addClass("noPointerEvnt");
		$("#taskbar").addClass("noPointerEvnt");
		isMin = 0;
	} else {
		if(isMax == 0){
			//make big
			$("#contents-" + consoleName).animate({left: "0px", top: "0px", width: '100%', height: '100%', opacity: '1'}, "fast");
			isMax = 1;
		} else {
			//make original
			$("#contents-" + consoleName).animate({left: "12.5%", top: "12.5%", width: '75%', height: '75%', opacity: '1'}, "fast");
			isMax = 0;
		}
	}
}

function onMinimiseButton(consoleName){
	if(isMin == 0){
		$("#contents-" + consoleName).addClass("noPointerEvnt");
		
		$("#contents-" + consoleName).css("position", "absolute");
		
		$("#contents-" + consoleName).animate({left: "0%", top: "0%", width: '0%', height: '0%', opacity: '0'}, "fast");
		
		$("#leftWindows-" + consoleName).animate({opacity: '1'}, "fast");
		$("#leftWindows-" + consoleName).removeClass("noPointerEvnt");
		$("#taskbar").removeClass("noPointerEvnt");
		isMin = 1;
	}
}

function onCloseButton(consoleName){
	$("#contents-" + consoleName).animate({width: '0%', height: '0%', opacity: '0'}, "fast");
	//remvoe window
}

function openWebWindow(consoleName){
	if(isWeb == 0){
		$("#contents-" + consoleName).addClass("noPointerEvnt");
		$("#webWindow-" + consoleName).removeClass("noPointerEvnt");
		$("#webWindow-" + consoleName).animate({width: '100%', height: '100%', opacity: '1'}, "fast");
		isWeb = 1;

		$("#console-" + consoleName).blur();
	}
}

function closeWebWindow(consoleName){
	if(isWeb == 1){
		$("#contents-" + consoleName).removeClass("noPointerEvnt");
		$("#webWindow-" + consoleName).addClass("noPointerEvnt");
		$("#webWindow-" + consoleName).animate({width: '50%', height: '50%', opacity: '0'}, "fast");
		//document.getElementById("webWindow").innerHTML = "<div></div>";

		openPage("emptyPage");
		
		$("#console-" + consoleName).focus();

		isWeb = 0;
	}
}

function closeCurrent(consoleName){
	if(isWeb == 1){
		closeWebWindow(consoleName);
	} else if(isMax == 1){
		onMaximiseButton(consoleName);
	} else {
		onMinimiseButton(consoleName);
	}
}
