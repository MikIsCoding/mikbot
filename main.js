//mikbot made by scihb

const teeworlds = require('teeworlds')
const botName = process.argv[2]
const ip = process.argv[3]
const port = process.argv[4]
// put the name and server where your want your bot to be
let client = new teeworlds.Client(ip, port, botName);






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
	talk(botName + " is here", false);
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

	
	if(message.message.includes(botName + ":!dice") || message.message.includes(botName + ": !dice") === true) {
		const randNum = getRandNum(10);
		client.game.Say("the number is: " + randNum + " !", false);
	}
	
	if(message.message.includes(botName + ":!pre") === true){
	 	client.game.Say("Hey! im a bot originaly made by scihb!, i do basic things, what do u want to ask me? (for commands type 'botname:!cmds')", team = false);
	 }
	 else if(message.message.includes(botName + ":!gay") || message.message.includes(botName + ": !gay") === true) {
	 	const randPer = getRandNum(100);
	 	talk("You are " + randPer + " % pure gay");
	 }
	 else if(message.message.includes(botName + ":!cmds") || message.message.includes(botName + ": !cmds") === true) {
	 	talk("for now: !gay, !dice, !goleft, !goright, !stopgo, !reset, !jump, !stopjump,!aimrand");
	 }
	 else if(message.message.includes(":!goleft") || message.message.includes(": !goleft") === true) {
	 	talk("Going left!", false);
	 	client.movement.RunLeft();
	 }
	 else if(message.message.includes(botName + ":!goright") || message.message.includes(botName + ": !goright") === true){
	 	talk("Going right!", false);
	 	client.movement.RunRight();
	 }
	 else if(message.message.includes(botName + ":!stopgo") || message.message.includes(botName + ": !stopgo") === true){
	 	talk("Stop Running!");
	 	client.movement.RunStop();
	 }
	 else if(message.message.includes(botName + ":!reset") || message.message.includes(botName + ": !reset") === true){
	 	talk("OOF", false);
	 	client.game.Kill();
	 }
	 else if(message.message.includes(botName + ":!jump") || message.message.includes(botName + ": !jump") === true){
	 	talk("Jumping!", false);
	 	client.movement.Jump(true);
	 }
	 else if(msginc(botName + "!stopjump") || msginc(botName + ": !stopjump") === true){
	 	talk("Stop Jumping!", false);
	 	client.movement.Jump(false);
	 }
	 else if(msginc(botName + ":!aimrand") || msginc(botName + ": !aimrand") === true){
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
