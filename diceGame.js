
let characterChosen = prompt("Enter your character here( options: robe, ben, or felipe)");
let characters = ["robe","ben","felipe"];
let boss = ["syntaxError", "rangeError", "typeError","internalError"];
let characterCreated = pullingCharacter(characterChosen);
let chosenBoss = rollRandomArray(boss);
let bossCreated= pullingBoss(chosenBoss);
attackOptions();
checkingIfWinOrLost();

function attackOptions(){

	while(bossCreated[1] > 0 && characterCreated[1] > 0){
		let input = prompt("(1) attack  (2) coffee(heals 10-20 hP)  Type run (Ends Game)")
		if(input == "1"){
			attacks(characterCreated, bossCreated);
		}
		else if(input == "2"){
			bandage(characterCreated, bossCreated);
		}
		else if(input =="run"){
			return;
		}
		else{
			alert("Invalid input!! Please try again.");
		}
	}
}

function checkingIfWinOrLost(){

	if (bossCreated[1] === 0 || bossCreated[1] < 0){
		alert("You successfully deBuged " + chosenBoss + "! (refresh page to restart game)");
	}
	if (characterCreated[1] === 0 ||characterCreated[1] < 0) {
		console.log(bossCreated[1]);
		alert("You have been defeated.  " +chosenBoss+ " has fried your brain! Get some rest.. (refresh page to restart game)");
	}
	if (bossCreated[1] < 0){
		console.log("You overDebug " + bossCreated[1] + " damage to " + chosenBoss);
	}
	if (characterCreated[1] < 0){
		console.log("You lose!" + characterCreated[1] + " overFried damage from " + chosenBoss + "!");
	}	
}

function pullingCharacter(classChosen){
	
	let characterAttributes = ["spellDmg","healthPoints","physDmg"];

	if (characterChosen === characters[0]){
		characterAttributes[0] = rollDie(10, 25);
		characterAttributes[1] = rollDie(10, 60);
		characterAttributes[2] = rollDie(0, 1);
		console.log (characterChosen.toUpperCase() + "   Healthpoints:  " +characterAttributes[1]+" Spell Dmg:  " + characterAttributes[0]  +" PhysicalDamage:  "+ characterAttributes[2]);
		return characterAttributes;
	}
	if(characterChosen === characters[1]){
		characterAttributes[0] = rollDie(0, 1);
		characterAttributes[1] = rollDie(30, 120);
		characterAttributes[2] = rollDie(5, 10);
		console.log (characterChosen.toUpperCase() + "   Healthpoints:  " +characterAttributes[1]+" Spell Dmg:  " + characterAttributes[0]  +" PhysicalDamage:  "+ characterAttributes[2]);			
		return characterAttributes;
	}
	if(characterChosen === characters[2]){
		characterAttributes[0] = rollDie(0, 1);
		characterAttributes[1] = rollDie(10, 80 );
		characterAttributes[2] = rollDie(10, 20);
		console.log (characterChosen.toUpperCase() + "   Healthpoints:  " +characterAttributes[1]+" Spell Dmg:  " + characterAttributes[0]  +" PhysicalDamage:  "+ characterAttributes[2]);			
		return characterAttributes;
	}
}
function pullingBoss(randomBoss){
	let bossAttributes = ["bossSpellDmg","bossHealthPoints","bossPhysDmg"];

	if (randomBoss == boss[0])
	{
		bossAttributes[0] = rollDie(10, 11);
		bossAttributes[1] = rollDie(10, 100);
		bossAttributes[2] = rollDie(4, 2);
		console.log("Boss level ???  " + randomBoss.toUpperCase() + "    Healthpoints:  " + bossAttributes[1] +" Spell Dmg:  " + bossAttributes[0] +" PhysicalDamage:  "+ bossAttributes[2]);
		alert("A wild " + randomBoss + " has appeared!");
		return bossAttributes;
	}
		if(randomBoss === boss[1]){
			bossAttributes[0] = rollDie(0, 1);
			bossAttributes[1] = rollDie(10, 105);
			bossAttributes[2] = rollDie(10, 0);
			console.log("Boss level ???  " + randomBoss.toUpperCase() + "    Healthpoints:  " + bossAttributes[1] +" Spell Dmg:  " + bossAttributes[0] +" PhysicalDamage:  "+ bossAttributes[2]);
			alert("A wild " + randomBoss + " has appeared!");
			return bossAttributes;
		}
		if(randomBoss === boss[2]){
			bossAttributes[0] = rollDie(0, 1);
			bossAttributes[1] = rollDie(10, 110 );
			bossAttributes[2] = rollDie(10, 0);
			console.log("Boss level ???  " + randomBoss.toUpperCase() + "    Healthpoints:  " + bossAttributes[1] +" Spell Dmg:  " + bossAttributes[0] +" PhysicalDamage:  "+ bossAttributes[2]);
			alert("A wild " + randomBoss + " has appeared!");
			return bossAttributes;
		}
		if(randomBoss === boss[3]){
			bossAttributes[0] = rollDie(0, 1);
			bossAttributes[1] = rollDie(10, 115 );
			bossAttributes[2] = rollDie(10, 0);
			console.log("Boss level ???  " + randomBoss.toUpperCase() + "    Healthpoints:  " + bossAttributes[1] +" Spell Dmg:  " + bossAttributes[0] +" PhysicalDamage:  "+ bossAttributes[2]);
			alert("A wild " + randomBoss + " has appeared!");
			return bossAttributes;
		}
}
function rollDie(multiplier, booster){
	let result = Math.floor((Math.random() * multiplier)+ booster);
	return result;
}
function rollRandomArray(bossRandomed){
	let rand = bossRandomed[Math.floor(Math.random() * bossRandomed.length)];
	return rand;
}
function attacks(character, bossHp){
	let otherPossibilities = ["blocked","parried", "missed","attackMade","doubleDmg"];
	let randomEffect = rollRandomArray(otherPossibilities);
	let totalAttackDamage = character[0]+character[2];
	let bossTotalDamage = bossHp[0]+bossHp[2];
		if (randomEffect === otherPossibilities[0]){
			let blockedDmg = totalAttackDamage /2;
				bossHp.push(blockedDmg);
				character.push(bossTotalDamage);
			bossHp[1] = bossHp[1] - bossHp[3];
			character[1] = character[1] - character[3];
			bossHp.splice(3);
			character.splice(3);
			console.log("You attacked " + chosenBoss + " for " + totalAttackDamage +"(" + blockedDmg + "dmg was blocked!)" +'\n'+ "You took " + bossTotalDamage + " damage from "+ chosenBoss + ". Ouchh!" +  '\n\n' + characterChosen + " HealthPoints:  " + characterCreated[1]+ "     " + chosenBoss + " HealthPoints : " + bossHp[1]);
			return ;
		}
		if(randomEffect === otherPossibilities[1]){
			console.log(chosenBoss + " parried your attack!!" +'\n'+ "You took " + bossTotalDamage + " damage from "+ chosenBoss + ". Ouchh!" +  '\n\n' + characterChosen + " HealthPoints:  " + characterCreated[1]+ "     " + chosenBoss + " HealthPoints : " + bossHp[1]);
			character.push(bossTotalDamage);
			character[1] = character[1] - character[3];
			character.splice(3);
			return ;
		}
		if(randomEffect === otherPossibilities[2]){
			character.push(bossTotalDamage);
			character[1] = character[1] - character[3];
			character.splice(3);
			console.log("Your attack missed " + chosenBoss + "!" +'\n'+ "You took " + bossTotalDamage + " damage from "+ chosenBoss + ". Ouchh!" +  '\n\n' + characterChosen + " HealthPoints:  " + characterCreated[1]+ "     "  + chosenBoss + " HealthPoints : " + bossHp[1]);
			return ;
		}
		if(randomEffect === otherPossibilities[3]){
			character.push(bossTotalDamage);
			character[1] = character[1] -character[3];
			bossHp.push(totalAttackDamage);
			bossHp[1] = bossHp[1] - bossHp[3] ;
			bossHp.splice(3);
			character.splice(3);
			console.log("You attacked" + chosenBoss + " for " + totalAttackDamage +'\n'+ "You took " + bossTotalDamage + " damage from "+ chosenBoss + ". Ouchh!" + '\n\n' + characterChosen + " HealthPoints:  " + characterCreated[1]+ "     "  + chosenBoss + " HealthPoints : " + bossHp[1]);
			return;
		}
		if(randomEffect === otherPossibilities[4]){
			let bossDmged = totalAttackDamage * 2;
				character.push(bossTotalDamage);
				character[1] = character[1] - character[3];
				bossCreated.push(bossDmged);
				bossHp[1] = bossHp[1] - bossHp[3];
				bossHp.splice(3);
				character.splice(3);
				console.log("You attacked" + chosenBoss + " for " + bossDmged + " (doubledamage)" +'\n'+ "You took " + bossTotalDamage + " damage from "+ chosenBoss + ". Ouchh!" + '\n\n' + characterChosen + "HealthPoints:  " + characterCreated[1]+ "     "  + chosenBoss + " HealthPoints : " + bossHp[1]);
				return;
		}
			return;
}
	

function bandage(healCharacter, bossAttk){
	let healthRecovered = rollDie(10, 10);
	let bossTotalDamage = bossAttk[0]+bossAttk[2];
	healCharacter.push(healthRecovered);
	bossAttk.push(bossTotalDamage);
	healCharacter[1] = healCharacter[1] + healCharacter[3];
	bossAttk[1] = bossAttk[1] - bossAttk[3];
	healCharacter.splice(3);
	console.log("You healed for "+ healthRecovered + "hp."+ '\n' + chosenBoss + "hit you for " + bossTotalDamage + " damage." + '\n\n' + characterChosen + " HealthPoints:  " + healCharacter[1]+ "     " + chosenBoss + " HealthPoints : " + bossAttk[1]);
	return;
}
