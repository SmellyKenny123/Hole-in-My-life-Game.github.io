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
			map: [
			[3,3,3,3,3,3,3,3,3,3,3,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,0,3,3,3,0,3,3,3,3,0,3],
			[3,0,3,0,0,0,0,0,0,3,0,3],
			[3,0,3,0,3,3,3,3,0,3,0,3],
			[3,0,0,0,3,0,0,3,0,3,0,3],
			[3,0,3,0,3,0,0,3,0,3,0,3],
			[3,0,3,0,0,0,0,0,0,3,0,3],
			[3,0,3,3,3,3,3,3,0,3,0,3],
			[3,0,0,0,0,0,0,0,0,3,0,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,3,3,3,3,3,3,3,3,3,3,3]
			],
			hero: { x: 1, y: 1 },
			item: { x: 10, y: 10 },
npcs: [
					{ x: 8, y: 5, imageId: 'rik', dialog: [
						'(Rik) Hello. I need for you guys to make me a crate that has a false bottom to it, since I am shipping art and archeological artifacts. I want to make sure that those make it off the island safely.',
						'(Jack) Yeah, that sounds great. I will go talk to my dad about it then we will let you know when it is done.',
						'(Rik) Alright, that will work, thank you.'
					] },
					{ x: 1, y: 2, color: 'green', dialog: [
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
			map: [
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,0,0,0,0,0,4,4,4],
			[4,4,4,0,0,0,0,0,0,0,4,4],
			[4,4,0,0,0,0,0,0,0,0,0,4],
			[4,4,4,0,0,0,0,0,0,0,4,4],
			[4,4,4,4,0,0,0,0,0,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4]
			],
			hero: { x: 5, y: 5 },
			item: { x: 10, y: 9 },
			npcs: [
				{ x: 6, y: 8, color: 'orange', dialog: [
					'(Rik) I have a proposal to make to you, Jack. You help us sail this boat to New York, and it will take maybe six weeks, if we leave this week. Would you be willing to help?',
					'(Jack) For sure, I can definitely do that!',
					'(Rik) But, there is one more detail that once I tell you, you cannot tell anyone else about it.',
					'(Jack) Ok? What is it?',
					'(Rik) The boat will be taking two thousand pounds of hash to New York, buried on a small island called Little Dog Island. While you do that, I will need to fly to New York and work out deals, while you go with Hamilton and sail the boat to Manhattan. After we do all of this, and get the deals I have arranged done, then you will get paid ten thousand dollars. In cash.',
					'(Jack) Count me in, I will go home and start packing.',
					'(Hamilton) Do not tell anyone. No friends. No family. Nobody.'

				] }
			]
		},
		{ //4
			map: [
			[1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,1,1,1,1,1,1,1,1,0,1],
			[1,0,1,0,0,0,0,0,0,1,0,1],
			[1,0,1,0,1,1,1,1,0,1,0,1],
			[1,0,1,0,1,0,0,1,0,1,0,1],
			[1,0,1,0,1,0,0,1,0,1,0,1],
			[1,0,1,0,1,1,1,1,0,1,0,1],
			[1,0,0,0,0,0,0,0,0,1,0,1],
			[1,1,1,1,1,1,1,1,0,1,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1]
			],
			hero: { x: 1, y: 1 },
			item: { x: 10, y: 10 }
		},
		{ //5
			map: [
			[3,3,3,3,3,3,3,3,3,3,3,3],
			[3,0,3,0,3,0,3,0,3,0,0,3],
			[3,0,3,0,3,0,3,0,3,0,0,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,0,3,0,3,0,3,0,3,0,0,3],
			[3,0,3,0,3,0,3,0,3,0,0,3],
			[3,0,3,0,0,0,0,0,3,0,0,3],
			[3,0,3,0,3,3,3,0,3,0,0,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,0,3,0,3,0,3,0,3,0,0,3],
			[3,0,0,0,0,0,0,0,0,0,0,3],
			[3,3,3,3,3,3,3,3,3,3,3,3]
			],
			hero: { x: 1, y: 1 },
			item: { x: 15, y: 15 }
		}
	];
	
	var currentLevel = 0;
	var field = null;
	
	var spriteFront = document.getElementById('jack');
	var spriteBack = document.getElementById('jackback');
	var spriteLeft = document.getElementById('jackleft');
	var kingscourt = document.getElementById('kingscourt');
	var level1 = document.getElementById('level1');
	var level2 = document.getElementById('level2');
	var davy = document.getElementById('davy');
	var rik = document.getElementById('rik');
	var weed = document.getElementById('weed');
	var hamilton = document.getElementById('hamilton');
	var tim = document.getElementById('tim');
	var sprite = spriteFront;
	var dialogBar = document.getElementById('dialogBar');

	function setDialog(text) {
		if (dialogBar) {
			dialogBar.textContent = text;
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
		hero.x = levels[currentLevel].hero.x;
		hero.y = levels[currentLevel].hero.y;
		item.x = levels[currentLevel].item.x;
		item.y = levels[currentLevel].item.y;
		npcs = [];
		var levelNpcs = levels[currentLevel].npcs || (levels[currentLevel].npc ? [levels[currentLevel].npc] : []);
		levelNpcs.forEach(function(def) {
			var npc = new NPC();
			npc.x = def.x;
			npc.y = def.y;
			npc.dialog = def.dialog;
			npc.dialogIndex = 0;
			npc.color = def.color || npc.color;
			npc.image = def.imageId ? document.getElementById(def.imageId) || npc.image : npc.image;
			npcs.push(npc);
		});
		setDialog('Level ' + (currentLevel + 1) + ': Press T near an NPC to talk to them. Then collect the weed to continue to the next level.');
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
							ctx.drawImage(level1,x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						case 2:
							ctx.drawImage(kingscourt,x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						case 3:
							ctx.drawImage(level2,x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						case 4:
							ctx.fillStyle = '#1f0cd0';
							ctx.fillRect(x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						case 5:
							ctx.fillStyle = '#1f0cd0';
							ctx.fillRect(x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						case 6:
							ctx.fillStyle = '#1f0cd0';
							ctx.fillRect(x*tileWidth,y*tileHeight,tileWidth,tileHeight);
							break;
						default:
							ctx.fillStyle = '#BA9A6E';
							ctx.fillRect(x*tileWidth,y*tileHeight,tileWidth,tileHeight);
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
						if (Array.isArray(nearbyNpc.dialog)) {
							if (nearbyNpc.dialogIndex < nearbyNpc.dialog.length) {
								setDialog(nearbyNpc.dialog[nearbyNpc.dialogIndex]);
								nearbyNpc.dialogIndex += 1;
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