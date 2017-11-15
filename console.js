var keys = 0;
var text = "";

//Sets text on load
window.onload = function WindowLoad(event) {
    append(help());
    append(newCommand());
    //alert("Page is loaded");
}


//Prevents backspace?
$(document).keydown(function(e) {
    console.log(e.which);
    if(e.which >= 33 && e.which <= 40){
        e.preventDefault();
    }
    if (e.which == 8) {
        if (keys <= 0) {
            e.preventDefault();
        } else {
            keys--;
        }
    }
    if (e.which == 13) {
        e.preventDefault();
        parseCommand();
        keys = 0;
        append(newCommand());
    }
});

function newCommand() {
    return "benclark@portfolio:~$ "
}

function help() {
    var str = "";
    str += "===============================\n";
    str += "  Ben Clark Portfolio Website\n";
    str += "===============================\n\n";
    str += "Welcome to my website! To navigate this site there are a number of commands you can use.\n";
    str += "The basic commands are listed below. There are also some not listed, if you want to try and figure out what they are! ;)\n\n";
    str += "\t1. ls - lists the pages that can be opened\n";
    str += "\t2. open [pagename] - opens the page stated by pagename\n\n";
    str += "Enjoy :)\n\n";

    return str;
}

function ascii(){
    var str = "";
    str += "             ____________________________________________________\n" +
        "            /                                                    \\\n" +
        "           |    _____________________________________________     |\n" +
        "           |   |                                             |    |\n" +
        "           |   |  C:\\> Welcome to my website_               |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |                                             |    |\n" +
        "           |   |_____________________________________________|    |\n" +
        "           |                                                      |\n" +
        "            \\_____________________________________________________/\n" +
        "                   \\_______________________________________/\n" +
        "                _______________________________________________\n" +
        "             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_\n" +
        "          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_\n" +
        "       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_\n" +
        "    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_\n" +
        " _-'.-.-.-.-.-. .---.-. .-----------------------------. .-.---. .---.-.-.-.`-_\n" +
        ":-----------------------------------------------------------------------------:\n" +
        "`---._.-----------------------------------------------------------------._.---'";

    return str;

}

function countKeys() {
    keys++;
}

function append(str) {

    keys = 0;

    var console = document.getElementById("console");

    if (console != null) {
        console.value += str;
        text += str;
        console.scrollTop = console.scrollHeight

    }
}

function parseCommand() {
    var console = document.getElementById("console");

    if (console != null) {
        var cmd = console.value.substr(console.value.length - keys);

        append("\n");

        if(cmd == "ascii"){
            append(ascii());
        } else if (cmd == "ls") {
            append("There are no pages available just yet, hold tight...");
        } else {
            append("Unknown command - '" + cmd  + "'");
        }
    }
    append("\n");
    text = console.value;
}
