
var COMMANDS = {
	OPEN: {name: "open", usage: "open < insert page name >", function: "opens pages shown by using 'ls'"},
	LS: {name: "ls", usage: "ls | ls p | ls projects", function: "lists pages that can be opened. can also use 'ls p' to lis projects that can be opened with 'projects' command"},
	START: {name: "start", usage: "start", function: "opens a more graphical website - default for mobile users"},
	PROJECT: {name: "project", usage: "project < insert project name >", function: "opens project pages"},
	ID: {name: "id", usage: "id | id x", function: "prints out the id of the current console. Can print additional details using 'id x'"},
	SIZE: {name: "size", usage: "size large | medium | small",function: "sets the size of the current console to size specified"},
	HELP: {name: "help", usage: "help | help -p < insert page number > | help -c < insert command name >",function: "prints out help for all commands - prints out command specific help if specified"}
};

function matchCommand(command, args, consoleName){
	switch(command){
		case COMMANDS.OPEN.name:
			return runOpen(args);
		case COMMANDS.LS.name:
			return runList(args);
		case COMMANDS.START.name:
			return runStart(args);
    case COMMANDS.PROJECT.name:
      return runProject(args);
		case COMMANDS.ID.name:
			return runID(args, consoleName);
    case COMMANDS.SIZE.name:
      return runSize(args, consoleName);
		case COMMANDS.HELP.name:
			return runHelp(args);
		default:
			return runDefault('unknown command - ' + command);
	}
}

function runHelp(args){
	var output = " ---- Command Help ---- ";
	var commandsPerPage = 3;

	if(args.length <= 1){
		//print help for help command
		return output + "\n" + helpText(COMMANDS.HELP);
	} else if (args.length > 1){

		var pageNumber = 0;

		var commandArray = makeEnum(COMMANDS);
		var maxPages = Math.ceil(commandArray.length / commandsPerPage);

		if(args.length == 3 && args[1] == "-c"){

			output += "\n";
			var triggered = 0;

			for(var i = 0; i < commandArray.length; i++) {
				if(commandArray[i].name == args[2]) {
					output += helpText(commandArray[i]);
					triggered++;
					break;
				}
			}
			if(triggered == 1){
				return output;
			} else {
				return runHelp(["help"]);
			}
		}

		if(args.length == 3 && args[1] == "-p"){
			pageNumber = parseInt(args[2], 10) - 1;
			pageNumber = Math.max(0, pageNumber);
			pageNumber = Math.min(maxPages, pageNumber);
		}

		output += "Page " + (pageNumber + 1) + " / " + maxPages + "\n";

		for(var i = (pageNumber * commandsPerPage); i < Math.min(commandArray.length, (pageNumber * commandsPerPage) + commandsPerPage); i++) {
			output += helpText(commandArray[i]);
		}
		return output;
	}
}

function runSize(args, consoleName){
    if(args.length == 2){
        var con = document.getElementById("contents-" + consoleName);
        switch(args[1]){
            case 'large':

                $("#contents-" + consoleName).animate({left: "12.5%", top: "12.5%", width: "75%", height: "75%"}, "fast");

                con.setAttribute("data-size", args[1]);
                return "";
            case 'medium':

                $("#contents-" + consoleName).animate({left: "17.5%", top: "17.5%", width: "65%", height: "65%"}, "fast");

                con.setAttribute("data-size", args[1]);
                return "";
            case 'small':

                $("#contents-" + consoleName).animate({left: "22.5%", top: "22.5%", width: "55%", height: "55%"}, "fast");

                con.setAttribute("data-size", args[1]);
                return "";
            default:
                return "Invalid size - Use 'size large|medium|small'";
        }
    }
    return "Invalid params - Please use 'size large|medium|small'";
}

function runID(args, consoleName){
	var str = "ID :\tconsole-" + consoleName;

	if(args.length > 0 && args[1] == 'x'){
		str += "\nisMin :\t" + isMin[consoleName] + "\n";
		str += "isMax :\t" + isMax[consoleName] + "\n";
		str += "inWeb :\t" + isWeb;
	}
	return str;
}

/*
 * Code for the 'start' command
 * runs a GUI version of the system
 */
function runStart(args){
	//Redirect the user to the mobile (GUI) site
	redirectToMobile();
}

/*
 * Code for the 'ls' list command
 */
function runList(args){
	if(args.length == 1){
		return pages().toString().replace(/,/g, "\t").replace(/ /g, "_");
	} else if(args[1] == "p" || args[1] == "projects"){
		return projects().toString().replace(/,/g, "\t").replace(/ /g, "_");
	}
}

/*
 * Code for the project version of open
 */
function runProject(args){
    if(args.length == 2){
        if(inArray(projects(), args[1])){

            openProject(args[1]);

            openWebWindow();

            //while(isWeb == 1);

            return 'Opening project...';
        } else {
            return runDefault('invalid project - ' + args[1]);
        }
    } else {
        return runDefault('invalid args');
    }
}

/*
 * Code for the 'open' command
 */
function runOpen(args){
	if(args.length == 2){
		if(inArray(pages(), args[1])){

			openPage(args[1]);

			openWebWindow();

			//while(isWeb == 1);

			return 'Opening page...';
		} else {
			return runDefault('invalid page - ' + args[1]);
		}
	} else {
		return runDefault('invalid args');
	}
}

function runDefault(reason){
	return "An error occurred : " + reason;
}

/*
 * ======================================
 * 			Utility Functions
 * ======================================
 */

function helpText(command) {
	var output = "";
	output += "Command Name - " + command.name + "\n";
	output += "\t" + "Command Usage - " + command.usage + "\n";
	output += "\t" + "Command Description - " + command.function + "\n\n";
	console.log("output here is - " + output);
	return output
}

 function makeEnum(enumObject){
  var all = [];
  for(var key in enumObject){
		all.push(enumObject[key]);
  }
	return all;
}

function inArray(array, value){
	for(var i = 0; i < array.length; i++){
		if(array[i].replace(/,/g, "\t").replace(/ /g, "_").toLowerCase() == value.toLowerCase()){
			return true;
		}
	}
	return false;
}
