
function openPage(page) {

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

            data = data.replace('This site is open source. <a href="https://github.com/benclark158/benclark158.github.io/edit/master/docs/' + page + '.md">Improve this page</a>.', 'Copyright Ben Clark 2017.');

            data = data.replace('<h1><a href="https://benclark158.github.io/">benclark158.github.io</a></h1>', '');

            document.getElementById("htmlSeg").innerHTML = data;
        },
        error: function () {
            //create an error message
            //alert("error outer");
            console.error("ajax failed :/");
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