
function matchCommand(command, args, consoleName){
	switch(command){
		case "open":
			return runOpen(args);
		case "ls":
			return runList(args);
		case "start":
			return runStart(args);
        case "project":
            return runProject(args);
		case 'id':
			return runID(args, consoleName);
        case 'size':
            return runSize(args, consoleName);
		default:
			return runDefault('unknown command - ' + command);
	} 
}

function runSize(args, consoleName){
    if(args.length == 2){
        var con = document.getElementById("contents-" + consoleName);
        switch(args[1]){
            case 'big':

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
                return "Invalid size - Use 'size big|medium|small'";
        }
    }
    return "Invalid params - Please use 'size big|medium|small'";
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
	//TODO
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

function inArray(array, value){
	for(var i = 0; i < array.length; i++){
		if(array[i].replace(/,/g, "\t").replace(/ /g, "_") == value){
			return true;
		}
	}
	return false;
}

function pages(){
	return ["home", "projects", "about"];
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