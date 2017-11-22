
function openPage(page) {
	return openPageComplex(page, '', '&copy Copyright Ben Clark 2017.');
}

function openProjectComplex(project, headRep, footRep){
    return openPageComplex("projects/" + project, headRep, footRep);
}

function openPageComplex(page, headReplacement, footerReplacement) {

    if(page.toLowerCase() == "projects"){
        openProjectsPage();
        return;
    }

    $.ajax({
        url: "docs/" + page + ".html",
        type: "GET",
        data: {},
        cache: false,
        success: function (data, status) {
            //create a success messsage

            data = data.replace('This site is open source. <a href="https://github.com/benclark158/benclark158.github.io/edit/master/docs/' + page + '.md">Improve this page</a>.', footerReplacement);

            data = data.replace('<h1><a href="https://benclark158.github.io/">benclark158.github.io</a></h1>', headReplacement);

            document.getElementById("htmlSeg").innerHTML = data;
        },
        error: function () {
            //create an error message
            //alert("error outer");
            console.error("ajax failed :/");

            var data = headReplacement + "<div style=\"text-align: center\">\n" +
                "  <h1>Error 404</h1>\n" +
                "  <p>Ben Clark | Portfolio</p>\n" +
                "  <p>This page could not be found. Sorry for any inconvenience.</p>\n" +
                "</div>" + footerReplacement;

            document.getElementById("htmlSeg").innerHTML = data;
        }
    });
}

function openProjectsPage(){

    var insert = generateProjectList();

    $.ajax({
        url: "docs/projects.html",
        type: "GET",
        data: {},
        cache: false,
        success: function (data, status) {
            //create a success messsage

            data = data.replace('This site is open source. <a href="https://github.com/benclark158/benclark158.github.io/edit/master/docs/projects.md">Improve this page</a>.', 'Copyright Ben Clark 2017.');

            data = data.replace('<h1><a href="https://benclark158.github.io/">benclark158.github.io</a></h1>', '');

            data = data.replace('[INSERT #1]', insert);

            document.getElementById("htmlSeg").innerHTML = data;
        },
        error: function () {
            //create an error message
            //alert("error outer");
            console.error("ajax failed :/");
        }
    });
}

function generateProjectList(){
	var listProjects = projects();
	var projectStyle = 'style="border: 1px solid black; display: block; margin: auto; width: 50%;"';

	var html = '<div style="' + projectStyle + '">';
	
	for(var i = 0; i < listProjects.length; i++){
		var imgName = listProjects[i].replace(/ /g, "_");
		var imgURL = "https://benclark158.github.io/docs/projects/imgs/" + imgName + "_1.jpg";
				
		html += '<div>';
		
		html += '<h2>' + listProjects[i] + '</h2>';
		html += '<img ' + '' +' src="' + imgURL + '">';
		
		html += '</div>';
	}
	html += '</div>';
	return html;
}

function openProject(project){
	return openProjectComplex(project, '', '&copy Copyright Ben Clark 2017.');
}

function pages(){
	return ["Home", "Projects", "About"];
}

function projects(){
	return [
	    "Music Management Website",
        "Path Finding Program",
        "Twitter Wall",
        "Game of Life",
        "Colour Matching Game",
        "Chemical Reaction Computation",
        "Camera Motion Tracker"
    ];
}