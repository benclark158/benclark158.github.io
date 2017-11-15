window.onload = function WindowLoad(event) {
    append(help());
    append(newCommand());
    //alert("Page is loaded");
}


//Prevents backspace?
$(document).keydown(function(e) {
    if (e.which == 8) {
      console.log("backspace - " + keys);
      if(keys <= 0) {
          e.preventDefault();
      } else {
          keys--;
      }
    }
});

function newCommand(){
  return "benclark@portfolio:~$ "
}

function help(){
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

var keys = 0;

function countKeys(){
  keys++;
  console.log(keys);
}

function append(str){

  keys = 0;

  var console = document.getElementById("console");

  if(console != null){
    console.value += str;
  }
}
