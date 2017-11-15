
function matchCommand(command, args){
	switch(command){
		case "open":
			return runOpen(args);
		case "ls":
			return runList(args);
		case "start":
			return runStart(args);
        case "project":
            return runProject(args);
		default:
			return runDefault('unknown command - ' + command);
	} 
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
		return pages();
	} else if(args[1] == "p" || args[1] == "projects"){
		return projects();
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
		if(array[i] == value){
			return true;
		}
	}
	return false;
}

function pages(){
	return ["home", "projects", "about"];
}

function projects(){
	return [];
}