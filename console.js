var keys = 0;
var text = "";
var commands = [];
var dirCount = 0;

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
        if(e.which == 38){
            //up
            if(dirCount < commands.length) {
                dirCount++;
            }

            if(dirCount != 0) {
                var cmd = commands[commands.length - dirCount];
                cmdAppend(cmd);
            } else {
                cmdAppend("");
            }
        } else if(e.which == 40){
            if(dirCount > 0){
                dirCount--;
            }

            if(dirCount != 0) {
                var cmd = commands[commands.length - dirCount];
                cmdAppend(cmd);
            } else {
                cmdAppend("");
            }
        }
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
    str += "Enjoy (Hint: think ASCII)\n\n";

    return str;
}

function ascii(){
    var str = "";
    str += "     ____________________________\n" +
        "    !\\_________________________/!\\\n" +
        "    !!                         !! \\\n" +
        "    !!                         !!  \\\n" +
        "    !!                         !!  !\n" +
        "    !!                         !!  !\n" +
        "    !!                         !!  !\n" +
        "    !!                         !!  !\n" +
        "    !!                         !!  !\n" +
        "    !!                         !!  /\n" +
        "    !!_________________________!! /\n" +
        "    !/_________________________\\!/\n" +
        "       __\\_________________/__/!_\n" +
        "      !_______________________!/\n" +
        "    ________________________\n" +
        "   /oooo  oooo  oooo  oooo /!\n" +
        "  /ooooooooooooooooooooooo/ /\n" +
        " /ooooooooooooooooooooooo/ /\n" +
        "/C=_____________________/_/\n";

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

function cmdAppend(str){

    if(str != null) {
        keys = str.length;
    } else {
        keys = 0;
    }

    var console = document.getElementById("console");

    if (console != null) {
        console.value = text + str;
        console.scrollTop = console.scrollHeight
    }
}

function parseCommand() {
    var console = document.getElementById("console");

    if (console != null) {
        var cmd = console.value.substr(console.value.length - keys).split(' ')[0];

        append("\n");
        if(cmd == ''){
            return;
        }

        commands.push(cmd);

        if(cmd == "ascii"){
            append(ascii());
        } else if (cmd == "welcome"){
            append(help());
        } else if (cmd == "ls") {
            append("There are no pages available just yet, hold tight...");
        } else {
            append("Unknown command - '" + cmd  + "'");
        }
    }
    append("\n");
    text = console.value;
}

function whenClicked(){
    alert("i got a click");
    var console = document.getElementById("console");

    if (console != null) {
        var val = console.value.length;
        console.focus();
        console.selectionStart = val;
        console.selectionEnd = val;
    }
}