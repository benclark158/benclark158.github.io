
function openPage(page) {
	return openPageComplex(page, '', '&copy Copyright Ben Clark 2017.');
}


function openPageComplex(page, headReplacement, footerReplacement) {

	page = page.toLowerCase();

    if(page == "projects"){
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

    var insert = "this is a project";

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

function openProject(project){
    return openPage("projects/" + project);
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