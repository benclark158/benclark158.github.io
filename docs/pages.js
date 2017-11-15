
function openPage(page){

    $.ajax({
        url: "docs/" + page + ".md",
        type: "POST",
        data: {},
        cache: false,
        success: function (data, status){
            //create a success messsage
            $.ajax({
                url: "https://helloacm.com/api/markdown/",
                type: "POST",
                data: {
                    s: markup
                },
                cache: false,
                success: function (data, status){
                    //create a success messsage
                    alert("worked - " + data);
                },
                error: function (){
                    //create an error message
                    alert("error inner");
                }
            });
        },
        error: function (){
            //create an error message
            alert("error outer");
        }
    });

    return "";
}