
$( function() {
    //console.log("drag");
    populatePage('home');
} );

function populatePage(page){
	var nav = createNavBar();
	openPageComplex(page, nav, '&copy Copyright Ben Clark 2017.');
}

function populateProject(project){
	var nav = createNavBar();
	openProjectComplex(project, nav, '&copy Copyright Ben Clark 2017.');

}

function createNavBar(){
	var allPages = pages();
	var allProjects = projects();
	
	var html = "";
	html = `
<nav class="navbar navbar-default">
  <div class="container-fluid" style="background-color: #202020;">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Ben Clark | Portfolio</a>
    </div>
    <ul class="nav navbar-nav">`;
	
	var i = 0;
	
	for(i = 0; i < allPages.length; i++){
		if(allPages[i].toLowerCase() == "projects"){
			html += '<li class="dropdown">';
			html += '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Projects';
			html += '<span class="caret"></span></a>';
			html += '<ul class="dropdown-menu">';
			
			for(var p = 0; p < allProjects.length; p++){
				
				var projectName = allProjects[i].replace(/,/g, "\t").replace(/ /g, "_");
				
				html += '<li onclick="populateProject(\'' + projectName + '\')"><a>' + allProjects[p] + '</a></li>'
			}
			html += '</ul></li>';
		} else {
			html += '<li onclick="populatePage(\'' + allPages[i] + '\')"><a>' + allPages[i] + '</a></li>';
		}
	}
	
	html += '</ul></div></nav>';
	
	return html;
}