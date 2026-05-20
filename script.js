var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');


function Game() {
	var g = this;
	
	var iteration;
	
	const tileWidth = 48;
	const tileHeight = tileWidth;
	
	canvas.width = 48*12;
	canvas.height = 48*12;
	
	var levels = [
		{ //1
			defaultColor: '#BA9A6E',
			intro: 'Level 1: Jack was in Puerto Rico to help his families business in construction. But, Jack decided that he wanted to finish high school, so he returned to Fort Lauderdale and was set up to live with the Bacon family. While there, he partied and drank, and threw-up in their home often. Finally, they had enough, and kicked Jack out of their home. At this point, Jack got a job in a grocery store, and was living in his car. Jack had a revelation that, “I had lost control. Temporarily. But I*d get it back, I figured. I always did. My family had highs and lows, made money and lost what money can buy, had good days and days that were ground out like cigarette butts. So I was used to hitting the bottom. Now I was waiting for the bounce"(Jack Gantos). Jack then made his way to King*s Court to get a room.',
			map: [
			[1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,1,0,0,0,1,0,0,0,1],
			[1,0,0,1,0,0,0,1,0,0,0,1],
			[1,0,0,1,0,0,0,1,0,0,0,1],
			[1,0,0,1,0,0,0,1,0,0,0,1],
			[1,0,0,1,0,0,0,1,0,0,0,1],
			[1,1,0,1,0,1,1,1,0,1,1,1],
			[1,2,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,2,1,1],
			[1,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1]
			],
			hero: { x: 5, y: 10 },
			item: { x: 10, y: 1 },
			npcs: [{ x: 10, y: 9, imageId: 'davy', dialog: [
					'(Davy) Hey',
					'(Jack) Hey there Im looking for a room',
					'(Davy) Cash or check?',
					'(Jack) Cash',
					'(Davy) good pay in advance and you will get a 10% discount.',
					'(Davy) here is the key',
					'(Jack) thanks.'
				] },
				{ x: 6, y: 1, imageId: 'tim', dialog: [
					'(Tim) Hey Jack, you need money for college, right?',
					'(Jack) Yeah?',
					'(Tim) If you want to make some money, you can sell some weed for me.',
					'(Jack) That would be great, what do you want me to do?',
					'(Tim) There is this great place, but I need $200 to buy it, then we can sell it for even more afterwards. You will get your $200 back, and more!',
					'(Jack) Hell yeah dude!',
					'(Tim) Lets do it next week. I will take the money, go inside, get the weed, then we go and sell it for bank.',
					'(Jack) Sounds great, I will see you next week.'
				] }
			]
		},
		{ //2
			defaultColor: '#BA9A6E',
			intro: 'Level 2: St. Croix had a drug culture. They were constantly available, smell it in the air, everywhere. It was so incorporated, that the police did not care either. This lead to the island being a depot for smugglers. The island is also currently going through a revolution, where the black people believe that the white people own the island and work them like wage slaves, so they are trying to reclaim their land. To do this, they have been breaking into people*s homes, stealing items, and even killing them. Jack*s parents had a construction business, but they had to stop once the revolution started. Now they are constructing crates to help ship wealthy peoples belongings off the island to the states. They hope they can get off the island soon.',
			map: [
			[3,3,3,3,3,3,3,3,3,3,3,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,0,5,5,5,0,5,5,5,5,0,3],
			[3,0,5,0,0,0,0,0,0,5,0,3],
			[3,0,5,0,5,5,5,5,0,5,0,3],
			[3,0,0,0,5,0,0,5,0,5,0,3],
			[3,0,5,0,5,0,0,5,0,5,0,3],
			[3,0,5,0,0,0,0,0,0,5,0,3],
			[3,0,5,5,5,5,5,5,0,5,0,3],
			[3,0,0,0,0,0,0,0,0,5,0,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,3,3,3,3,3,3,3,3,3,3,3]
			],
			hero: { x: 1, y: 1 },
			item: { x: 10, y: 10 },
npcs: [ //rik
				{ x: 8, y: 5, imageId: 'rik', npcId: 'rik', dialog: [
					'(Rik) Hello. I need for you guys to make me a crate that has a false bottom to it, since I am shipping art and archeological artifacts. I want to make sure that those make it off the island safely.',
					'(Jack) Yeah, that sounds great. I will go talk to my dad about it then we will let you know when it is done.',
					'(Rik) Alright, that will work, thank you.'
				], riksDialogAfter: [
					'(Rik) I have a proposal to make to you, Jack. You help us sail this boat to New York, and it will take maybe six weeks, if we leave this week. Would you be willing to help?',
					'(Jack) For sure, I can definitely do that!',
					'(Rik) But, there is one more detail that once I tell you, you cannot tell anyone else about it.',
					'(Jack) Ok? What is it?',
					'(Rik) The boat will be taking two thousand pounds of hash to New York, buried on a small island called Little Dog Island. While you do that, I will need to fly to New York and work out deals, while you go with Hamilton and sail the boat to Manhattan. After we do all of this, and get the deals I have arranged done, then you will get paid ten thousand dollars. In cash.',
					'(Jack) Count me in, I will go home and start packing.'

				] }, //dad
				{ x: 1, y: 10, color: 'green', npcId: 'dad', dialog: [
						'(Jack) Hey dad, what do you think of that guy?',
						'(Dad) He is a dope smuggler.',
						'(Jack) What makes you say that?',
						'(Dad) Like I used to tell you, I am just able to tell by looking at people. Probably wants to smuggle cash, dope, or gold into the States.',
						'(Jack) Maybe you are wrong, and he actually has artifacts to ship.',
						'(Dad) You should know better than that. But, as long as he pays, I am happy to do business with him to get us off of this island.'

					] }
				]
		},
		{ //3
			defaultColor: '#951212',
			defaultImageId: 'boat',
			intro: 'Level 3: While on the sailboat, they make their way towards Little Dog Island. During the trip, Hamilton stays very cold towards Jack. He reveals that he used to be in the British Navy, and Jack assumes that the flare gun scar Rik had, came from Hamilton.',
			map: [
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,0,0,0,0,0,0,4,4,4],
			[4,4,0,0,0,0,0,0,0,0,4,4],
			[4,0,0,0,0,0,0,0,0,0,0,4],
			[0,0,0,0,0,0,0,0,0,0,0,0],
			[4,0,0,0,0,0,0,0,0,0,0,4],
			[4,4,0,0,0,0,0,0,0,0,4,4],
			[4,4,4,0,0,0,0,0,0,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4]
			],
			hero: { x: 0, y: 6 },
			item: { x: 9, y: 4 },
			npcs: [
				{ x: 3, y: 9, imageId: 'hamilton', dialog: [
					'(Hamilton) Hey Jack. We have sold almost all of the hash at this point. Since we have, I will make sure to get you your payment soon. ',
					'(Jack) Thank you dude! ',
					'(Hamilton) I have another offer for you. I will give you a better cut of the deal if you agree to do another smuggling run with me. It will take six months, but you will get even more money than this time.',
					'(Jack) You know Hamilton, I do not know. I will need time to think about it.'
				] }
			]
		},
		{ //4
			defaultColor: '#BA9A6E',
			intro: 'Level 4: After landing in New York City Jack and Hamilton made their way to the hotel that Rik was staying at. They would weigh out the hash, then go out and sell it to their customers. Hamilton beleives that they are being followed',
			map: [
			[6,6,6,6,6,6,6,6,6,6,6,6],
			[6,0,6,0,6,0,6,0,6,0,6,6],
			[6,0,0,0,0,0,0,0,0,0,0,6],
			[6,0,6,0,6,0,6,0,6,0,6,6],
			[6,0,0,0,0,0,0,0,0,0,0,6],
			[6,0,6,0,6,0,6,0,6,0,6,6],
			[6,0,0,0,0,0,0,0,0,0,0,6],
			[6,0,6,0,6,0,6,0,6,0,6,6],
			[6,0,0,0,0,0,0,0,0,0,0,6],
			[6,0,6,0,6,0,6,0,6,0,6,6],
			[6,0,0,0,0,0,0,0,0,0,0,6],
			[6,6,6,6,6,6,6,6,6,6,6,6]
			],
			hero: { x: 1, y: 1 },
			item: { x: 10, y: 10 },
			npcs: [
				{ x: 1, y: 10, imageId: 'hamilton', dialog: [
					'(Hamilton) Hey Jack. We have sold almost all of the hash at this point. Since we have, I will make sure to get you your payment soon.',
					'(Jack) Thank you dude!',
					'(Hamilton) I have another offer for you. I will give you a better cut of the deal if you agree to do another smuggling run with me. It will take six months, but you will get even more money than this time.',
					'(Jack) You know Hamilton, I do not know. I will need time to think about it.'
				] }
			]
		},
		{ //5
			defaultColor: '#BA9A6E',
			intro: 'Level 5: They sold most of the hash, and Jack got the ten thousand that he was promised at the beginning. But then, while Hamilton was in the lobby, the FBI went through the fronts doors and told Hamilton to put his hands up. He distracted them by telling them the real culprits were behind them, but they were actually Treasury Agents who were after them for giving counterfeit money to a moroccan group. Hamilton temporarily escaped from them, and Jack went back to the room and climbed down a fire escape, then left the city. He took trains all of the way back to Fort Lauderdale, and King’s Court. Eventually, his dad called and asked him to turn himself in, and he got Jack an attorney by the name of Al E. Newman. Jack returned to New York, buried hash in central park, then turned himself in. They ended up losing in court because there was a lot of evidence against them that was captured by the coast guards and others',
			map: [
			[8,7,7,7,7,7,7,7,7,7,7,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,0,0,0,0,0,0,0,0,0,0,8],
			[8,8,8,8,8,8,8,7,7,8,8,8]
			],
			hero: { x: 1, y: 1 },
			item: { x: 15, y: 15 },
			npcs: [
				{ x: 0, y: 10, imageId: 'mirror', dialog: [
					'Jack was eventually sent to a different prison, where he took up writing again. In the margins of a book, he found ways to write about his experiences. It acted as another log book where he could improve on his writing skills, and also begin to learn how to write again. Jack also was able to get a job as a X-ray technician, and realize how terrible prison is through seeing what others have to go through. ',
					'Jack began reading more books, and eventually applied to a college with a writing program. After some time, a letter was sent back and Jack had been accepted. Casey went and talked to the parole board, and Jack’s release date was set for December 18th, 15 months since his incarceration.'
				] }
			]
		}
	];
	
	var currentLevel = 0;
	var field = null;
	var dadTalkedTo = false;
	var rikTalkedToComplete = false;
	var rikNpc = null;
	var defaultColor = '#BA9A6E';
	var defaultImage = null;
	
	var spriteFront = document.getElementById('jack');
	var spriteBack = document.getElementById('jackback');
	var spriteLeft = document.getElementById('jackleft');
	var kingscourt = document.getElementById('kingscourt');
	var level1 = document.getElementById('level1');
	var level2 = document.getElementById('level2');
	var level3 = document.getElementById('level3');
	var level4 = document.getElementById('level4');
	var level5 = document.getElementById('level5');
	var mirror = document.getElementById('mirror');
	var davy = document.getElementById('davy');
	var rik = document.getElementById('rik');
	var weed = document.getElementById('weed');
	var hamilton = document.getElementById('hamilton');
	var tim = document.getElementById('tim');
	var crate = document.getElementById('crate');
	var brick = document.getElementById('brick');
	var boat = document.getElementById('boat');
	var sprite = spriteFront;
	var dialogBar = document.getElementById('dialogBar');

	function setDialog(text) {
		if (dialogBar) {
			dialogBar.textContent = text;
		}
	}

	function drawImageSafe(image, x, y, width, height) {
		if (image && image.complete && image.naturalWidth > 0 && image.naturalHeight > 0) {
			ctx.drawImage(image, x, y, width, height);
		} else {
			ctx.fillStyle = defaultColor;
			ctx.fillRect(x, y, width, height);
		}
	}
	
	function Sprite() {
		
		this.x = 5;
		this.y = 10;
		
		this.draw = function() {
			//ctx.fillStyle = 'blue';
			//ctx.fillRect(this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
			ctx.drawImage(sprite,this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
		};
	}
	
	function Item() {
		
		this.x = 10;
		this.y = 1;
		
		this.draw = function() {
			if (weed && weed.complete && weed.naturalWidth > 0 && weed.naturalHeight > 0) {
				ctx.drawImage(weed,this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
			} else {
				ctx.fillStyle = 'yellow';
				ctx.fillRect(this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
			}
		};
		
		this.pickUp = function() {
			nextLevel();
		};
		
		this.remove = function() {
			this.x = -1;
			this.y = -1;
		};
	}

	function NPC() {
		this.x = 0;
		this.y = 0;
		this.dialog = '';
		this.color = 'purple';
		this.image = null;
		this.draw = function() {
			if (this.image && this.image.complete && this.image.naturalWidth > 0 && this.image.naturalHeight > 0) {
				ctx.drawImage(this.image,this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
			} else {
				ctx.fillStyle = this.color;
				ctx.fillRect(this.x*tileWidth,this.y*tileHeight,tileWidth,tileHeight);
			}
		};
	}
	
	var hero = new Sprite();
	var item = new Item();
	var npcs = [];

	function loadLevel(levelIndex) {
		currentLevel = levelIndex;
		field = levels[currentLevel].map;
		defaultColor = levels[currentLevel].defaultColor || '#BA9A6E';
		defaultImage = levels[currentLevel].defaultImageId ? document.getElementById(levels[currentLevel].defaultImageId) : null;
		hero.x = levels[currentLevel].hero.x;
		hero.y = levels[currentLevel].hero.y;
		item.x = levels[currentLevel].item.x;
		item.y = levels[currentLevel].item.y;
		npcs = [];
		dadTalkedTo = false;
		rikTalkedToComplete = false;
		rikNpc = null;
		var levelNpcs = levels[currentLevel].npcs || (levels[currentLevel].npc ? [levels[currentLevel].npc] : []);
		levelNpcs.forEach(function(def) {
			var npc = new NPC();
			npc.x = def.x;
			npc.y = def.y;
			npc.dialog = def.dialog;
			npc.dialogIndex = 0;
			npc.color = def.color || npc.color;
			npc.image = def.imageId ? document.getElementById(def.imageId) || npc.image : npc.image;
			npc.npcId = def.npcId;
			npc.riksDialogAfter = def.riksDialogAfter;
			if (def.npcId === 'rik') {
				rikNpc = npc;
			}
			npcs.push(npc);
		});
		setDialog(levels[currentLevel].intro || 'Level ' + (currentLevel + 1) + ': Press T near an NPC to talk to them. Then collect the weed to continue to the next level.');
	}

	function nextLevel() {
		if (currentLevel + 1 < levels.length) {
			loadLevel(currentLevel + 1);
		} else {
			window.cancelAnimationFrame(iteration);
			iteration = 0;
			ctx.font = '24px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'center';
			//ctx.fillText('You Win!', 6*tileWidth, 6*tileHeight);
			setDialog('You Win! Reload the page to play again.');
		}
	}

	loadLevel(0);
	
	var _ = {
		draw: function() {
			for (var y = 0; y < field.length; y++) {
				for (var x = 0; x < field[y].length; x++) {
					switch (field[y][x]) {
						case 1:
						drawImageSafe(level1, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 2:
						drawImageSafe(kingscourt, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 3:
						drawImageSafe(level2, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 4:
							drawImageSafe(level3, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 5:
							drawImageSafe(crate, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 6:
							drawImageSafe(level4, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 7:
							drawImageSafe(level5, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						case 8:
							drawImageSafe(brick, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
							break;
						default:
                            if (defaultImage) {
                                drawImageSafe(defaultImage, x*tileWidth, y*tileHeight, tileWidth, tileHeight);
                            } else {
                                ctx.fillStyle = defaultColor;
                                ctx.fillRect(x*tileWidth,y*tileHeight,tileWidth,tileHeight);
                            }
                            break;
					}
				}
			}
			ctx.font = '16px Arial';
			ctx.fillStyle = 'black';
			ctx.textAlign = 'left';
			ctx.fillText('Level ' + (currentLevel + 1), 4, 18);
		},
		loop: function() {
			_.draw();
			npcs.forEach(function(npc) { npc.draw(); });
			hero.draw();
			item.draw();
			_.animate();
		},
		animate: function() {
			iteration = window.requestAnimationFrame(_.loop);
		},
		listen: function() {
			document.addEventListener('keydown',function(e) {
				e.preventDefault();
				switch (e.keyCode) {
				case 80:
					//Pause
					if (iteration) {
						window.cancelAnimationFrame(iteration);
						iteration = 0;
						ctx.font = '20px Arial';
						ctx.fillStyle = "black";
						ctx.textAlign = "center";
						ctx.fillText('Paused',6*tileWidth,6*tileHeight);
					} else {
						_.animate();
					}
					break;
				case 32:
					//Resume
					if (!iteration) {
						_.animate();
					}
					break;
				case 37:
					//L
					testAndSet(-1,0);
					sprite = spriteLeft;
					break;
				case 38:
					//Up
					testAndSet(0,-1);
					sprite = spriteBack;
					break;
				case 39:
					//R
					testAndSet(1,0);
					sprite = spriteFront;
					break;
				case 40:
					// Dwn
					testAndSet(0,1);
					sprite = spriteFront;
					break;
				case 84:
					// Talk
					var nearbyNpc = null;
					npcs.forEach(function(npc) {
						if (!nearbyNpc && Math.abs(hero.x - npc.x) + Math.abs(hero.y - npc.y) <= 1) {
							nearbyNpc = npc;
						}
					});
					if (nearbyNpc) {
						// Check if trying to talk to dad before Rik
						if (nearbyNpc.npcId === 'dad' && !rikTalkedToComplete) {
							setDialog('(Jack) I should talk to Rik first about what he needs.');
						} else if (Array.isArray(nearbyNpc.dialog)) {
							if (nearbyNpc.dialogIndex < nearbyNpc.dialog.length) {
								setDialog(nearbyNpc.dialog[nearbyNpc.dialogIndex]);
								nearbyNpc.dialogIndex += 1;
								// Check if Rik just finished his initial dialog
								if (nearbyNpc.npcId === 'rik' && nearbyNpc.dialogIndex >= nearbyNpc.dialog.length) {
									rikTalkedToComplete = true;
								}
								// Check if dad just finished his dialog
								if (nearbyNpc.npcId === 'dad' && nearbyNpc.dialogIndex >= nearbyNpc.dialog.length) {
									dadTalkedTo = true;
									if (rikNpc && rikNpc.riksDialogAfter) {
										rikNpc.dialog = rikNpc.riksDialogAfter;
										rikNpc.dialogIndex = 0;
									}
								}
							} else {
								setDialog(nearbyNpc.dialog[nearbyNpc.dialog.length - 1]);
							}
						} else {
							setDialog(nearbyNpc.dialog);
						}
					} else {
						setDialog('No one is close enough to talk to.');
					}
					break;
				default:
					break;
				};
				function testAndSet(deltaX,deltaY) {
					if(iteration && field[hero.y+deltaY][hero.x+deltaX] === 0) {
						hero.x = hero.x+deltaX;
						hero.y = hero.y+deltaY;
						if (hero.x === item.x && hero.y === item.y) {
							item.pickUp();
						}
					}
				}
			});
			
			
		}
 	};
	
	g.init = function() {
		_.listen();
		_.animate();
	}
}

var game = new Game();
game.init();