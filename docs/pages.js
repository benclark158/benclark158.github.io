
function openPage(page){

    $.ajax({
        url: "docs/" + page + ".html",
        type: "GET",
        data: {},
        cache: false,
        success: function (data, status) {
            //create a success messsage
            alert("worked - " + data);
        },
        error: function (){
            //create an error message
            alert("error outer");
        }
    });

    return "";
}