
function openPage(page) {
    $.ajax({
        url: "docs/" + page + ".html",
        type: "GET",
        data: {},
        cache: false,
        success: function (data, status) {
            //create a success messsage

            data = data.replace('This site is open source. <a href="https://github.com/benclark158/benclark158.github.io/edit/master/docs/home.md">Improve this page</a>.', 'Copyright Ben Clark 2017.');

            data = data.replace('<h1><a href="https://benclark158.github.io/">benclark158.github.io</a></h1>', '');

            document.getElementById("htmlSeg").innerHTML = data;
        },
        error: function () {
            //create an error message
            alert("error outer");
        }
    });
}