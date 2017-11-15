
function matchCommand(command, args){
	switch(command){
		case "open":
			return runOpen(args);
		case "ls":
			return runList(args);
		default:
			return runDefault('unknown command');
	} 
}

function runList(args){
	if(args.length == 1){
		return pages();
	} else if(args[1] == "p" || args[1] == "projects"){
		return projects();
	}
}

/*
 * Code for the 'open' command
 */
function runOpen(args){
	if(args.length == 2){
		if(!$.inArray(args[1], pages())){
			append('Opening page...\n');
			
			//document.getElementById("htmlSeg").innerHTML = home();
			
			openWebWindow();
			return 'Page closed.';
		} else {
			return runDefault('invalid page');
		}
	} else {
		return runDefault('invalid args');
	}
}

function runDefault(reason){
	return "An error occurred : " + reason;
}

function pages(){
	return ["home", "projects", "about"];
}

function projects(){
	return [];
}