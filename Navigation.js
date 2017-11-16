/**
 * Created by Ben Clark on 30/07/2017.
 */


function clickNav(buttonLink){
	var url = document.location.href.split('#')[1];
	history.replaceState('data to be passed', 'Title of the page', '?p=' + buttonLink + '#' + url);
	changeView(buttonLink);
}

function changeView(name){
}

function openSettingsModal(){

	var id = 'settingsModal';

	var html = '';
	html += '<div class="modal fade" id="' + id +'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="">';
	html += '	<div class="modal-dialog modal-lg">';
	html += '		<div class="modal-content">';
	html += '			<div class="modal-header">';
	html += '				<h4 class="modal-title" id="myLargeModalLabel" style="display: inline;">Website Settings</h4>';
	html += '				<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="display: inline; ' +
								'padding-top: 3px;"> <span aria-hidden="true"><i class="fa fa-close" aria-hidden="true"></i></span> </button>';
	html += '			</div>';
	html += '			<div class="modal-body">';
	html += '				<h5>Please configure the website to your preference.</h5>';
	html += '				<h5>Please note that some higher settings require a higher performing computer.</h5>';
	html += '				<form oninput="x.value=parseInt(graphic_nodes.value)">';
	html += '					<select name="graphic_state">';
	html += '						<option value="1">On</option><option value="0">Off</option>';
	html += '					</select>';
	html += '					<br>';
	html += '					0<input type="range" id="graphic_nodes" name="graphic_nodes">100';
	html += '					<output name="x" for="graphic_nodes"></output>';
	html += '				</form>';
	html += '			</div>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';

	if(document.getElementById(id) == null) {
		$(html).modal('show');
	} else {
		$('#' + id).modal('show');
	}
}

function openModal(id, title, body, footer, view) {

	var popupTemplate =
		'<div id="' + id + '" class="modal fade">' +
		'  <div class="modal-dialog">' +
		'    <div class="modal-content">' +
		'      <div class="modal-header">' +
		'        <button id="jsModalCloseButton-' + id + '" type="button" class="close" data-dismiss="modal">&times;</button>' +
		'        <h4 id="jsModalTitle-' + id + '" class="modal-title">' + title + '</h4>' +
		'      </div>' +
		'      <div id="jsModalBody-' + id + '"class="modal-body">' +
		body +
		'      </div>' +

		'      <div class="modal-footer">';


	if (footer == "") {
		popupTemplate += '<button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>';
	} else {
		popupTemplate += footer;
	}

	popupTemplate +=
		'      </div>' +
		'    </div>' +
		'  </div>' +
		'</div>';


	if(document.getElementById('infoModal') == null) {
		$(popupTemplate).modal(view);
	} else {
		$('#' + id).modal(view);
	}
}


//=====================================
//			New functions
//=====================================

var isMax = 0;
var isMin = 0;
var isWeb = 0;

function onMaximiseButton(){
	console.log("isMax - " + isMax);
	console.log("isMin - " + isMin);
	if(isMin == 1){
		$("#contents").animate({width: '75%', height: '75%', opacity: '1'}, "fast");
		$("#leftWindows").animate({opacity: '0'}, "fast");
		$("#leftWindows").addClass("noPointerEvnt");
		
		//
		isMin = 0;
	} else {
		if(isMax == 0){
			$("#contents").animate({width: '100%', height: '100%', opacity: '1'}, "fast");
			isMax = 1;
		} else {
			$("#contents").animate({width: '75%', height: '75%', opacity: '1'}, "fast");
			isMax = 0;
		}
	}
}

function onMinimiseButton(){
	if(isMin == 0){
		$("#contents").addClass("noPointerEvnt");
		$("#contents").animate({width: '0%', height: '0%', opacity: '0'}, "fast");
		$("#leftWindows").animate({opacity: '1'}, "fast");
		$("#leftWindows").removeClass("noPointerEvnt");
		isMin = 1;
	}
}

function onCloseButton(){
	$("#contents").animate({width: '0%', height: '0%', opacity: '0'}, "fast");
}

function openWebWindow(){
	if(isWeb == 0){
		$("#contents").addClass("noPointerEvnt");
		$("#webWindow").removeClass("noPointerEvnt");
		$("#webWindow").animate({width: '100%', height: '100%', opacity: '1'}, "fast");
		isWeb = 1;
		
		$("console").blur();
	}
}

function closeWebWindow(){
	if(isWeb == 1){
		$("#contents").removeClass("noPointerEvnt");
		$("#webWindow").addClass("noPointerEvnt");
		$("#webWindow").animate({width: '50%', height: '50%', opacity: '0'}, "fast");
		//document.getElementById("webWindow").innerHTML = "<div></div>";
		
		$("console").focus();
		
		isWeb = 0;
	}
}

function closeCurrent(){
	if(isWeb == 1){
		closeWebWindow();
	} else if(isMax == 1){
		onMaximiseButton();
	} else {
		onMinimiseButton();
	}
}