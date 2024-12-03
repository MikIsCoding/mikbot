//mikbot made by scihb

const teeworlds = require('teeworlds')

// put the name and server where your want your bot to be
let client = new teeworlds.Client("localhost", 8303, "mikbot");

let istweaking = false;






// functions and variables 
function talk(text, tim) {
	//really quick func
	client.game.Say(text, team = tim)
}

function getRandNum(max) {
	//random func
	return Math.floor(Math.random() * max);
}



client.connect();

client.on("connected", () => {
	console.log("here");
	client.movement.NextWeapon();
	talk("mikbot here skibidis!", false);
});


client.on("disconnect", reason => {
	// you got kicked from the server
	console.log("Disconnected: " + reason);
});

client.on("message", message => {

	function msginc(text){
		//nodejs wont let me put it there ;(
		return message.message.includes(text);
	}

	
	if(message.message.includes("mikbot:!dice") || message.message.includes("mikbot: !dice") === true) {
		const randNum = getRandNum(10);
		client.game.Say("the number is: " + randNum + " !", false);
	}
	
	if(message.message.includes("mikbot:!pre") === true){
	 	client.game.Say("Hey! im a bot made by scihb!, i do basic things, what do u want to ask me? (for commands type 'mikbot:!cmds')", team = false);
	 }
	 else if(message.message.includes("mikbot:!gay") || message.message.includes("mikbot: !gay") === true) {
	 	const randPer = getRandNum(100);
	 	talk("You are " + randPer + " % pure gay");
	 }
	 else if(message.message.includes("mikbot:!cmds") || message.message.includes("mikbot: !cmds") === true) {
	 	talk("for now: !gay, !dice, !goleft, !goright, !stopgo, !reset, !jump, !stopjump,!aimrand");
	 }
	 else if(message.message.includes("mikbot:!goleft") || message.message.includes("mikbot: !goleft") === true) {
	 	talk("Going left!", false);
	 	client.movement.RunLeft();
	 }
	 else if(message.message.includes("mikbot:!goright") || message.message.includes("mikbot: !goright") === true){
	 	talk("Going right!", false);
	 	client.movement.RunRight();
	 }
	 else if(message.message.includes("mikbot:!stopgo") || message.message.includes("mikbot: !stopgo") === true){
	 	talk("Stop Running!");
	 	client.movement.RunStop();
	 }
	 else if(message.message.includes("mikbot:!reset") || message.message.includes("mikbot: !reset") === true){
	 	talk("OOF", false);
	 	client.game.Kill();
	 }
	 else if(message.message.includes("mikbot:!jump") || message.message.includes("mikbot: !jump") === true){
	 	talk("Jumping!", false);
	 	client.movement.Jump(true);
	 }
	 else if(msginc("mikbot:!stopjump") || msginc("mikbot: !stopjump") === true){
	 	talk("Stop Jumping!", false);
	 	client.movement.Jump(false);
	 }
	 else if(msginc("mikbot:!aimrand") || msginc("mikbot: !aimrand") === true){
	 	let randomX = getRandNum(360);
	 	let randomY = getRandNum(360);
	 	client.movement.SetAim(randomX, randomY);
	 	talk("Aimed at x: " + randomX + " y: " + randomY, false);
	 }
});

//kil on freeze
client.on("snapshot", () => {
	let myDDNetChar = client.SnapshotUnpacker.getObjExDDNetCharacter(client.SnapshotUnpacker.OwnID);
	if (myDDNetChar == undefined)
		return;
	if (myDDNetChar.m_FreezeEnd != 0) {
		client.game.Kill();
	}
})




process.on("SIGINT", () => {
	client.Disconnect().then(() => process.exit(0)); // disconnect on ctrl + c
	// process.exit()
})
process.stdin.on("data", data => {
	client.game.Say(data.toString()); // write input in chat
	
})
