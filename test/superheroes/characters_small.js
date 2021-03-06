// Data from https://www.kaggle.com/dannielr/marvel-superheroes

let charactersInfoSmall = [{
    "Name":"A-Bomb",
    "Height":203,
    "Weight":441
},{
    "Name":"Abe Sapien",
    "Height":191,
    "Weight":65
},{
    "Name":"Abin Sur",
    "Height":185,
    "Weight":90
},{
    "Name":"Abomination",
    "Height":203,
    "Weight":441
},{
    "Name":"Absorbing Man",
    "Height":193,
    "Weight":122
},{
    "Name":"Adam Strange",
    "Height":185,
    "Weight":88
},{
    "Name":"Agent 13",
    "Height":173,
    "Weight":61
},{
    "Name":"Agent Bob",
    "Height":178,
    "Weight":81
},{
    "Name":"Agent Zero",
    "Height":191,
    "Weight":104
},{
    "Name":"Air-Walker",
    "Height":188,
    "Weight":108
},{
    "Name":"Ajax",
    "Height":193,
    "Weight":90
},{
    "Name":"Alan Scott",
    "Height":180,
    "Weight":90
},{
    "Name":"Alfred Pennyworth",
    "Height":178,
    "Weight":72
},{
    "Name":"Alien",
    "Height":244,
    "Weight":169
},{
    "Name":"Amazo",
    "Height":257,
    "Weight":173
},{
    "Name":"Ammo",
    "Height":188,
    "Weight":101
},{
    "Name":"Angel",
    "Height":183,
    "Weight":68
},{
    "Name":"Angel Dust",
    "Height":165,
    "Weight":57
},{
    "Name":"Angel Salvadore",
    "Height":163,
    "Weight":54
},{
    "Name":"Animal Man",
    "Height":183,
    "Weight":83
},{
    "Name":"Annihilus",
    "Height":180,
    "Weight":90
},{
    "Name":"Ant-Man",
    "Height":211,
    "Weight":122
},{
    "Name":"Ant-Man II",
    "Height":183,
    "Weight":86
},{
    "Name":"Anti-Venom",
    "Height":229,
    "Weight":358
},{
    "Name":"Apocalypse",
    "Height":213,
    "Weight":135
},{
    "Name":"Aqualad",
    "Height":178,
    "Weight":106
},{
    "Name":"Aquaman",
    "Height":185,
    "Weight":146
},{
    "Name":"Arachne",
    "Height":175,
    "Weight":63
},{
    "Name":"Archangel",
    "Height":183,
    "Weight":68
},{
    "Name":"Arclight",
    "Height":173,
    "Weight":57
},{
    "Name":"Ardina",
    "Height":193,
    "Weight":98
},{
    "Name":"Ares",
    "Height":185,
    "Weight":270
},{
    "Name":"Ariel",
    "Height":165,
    "Weight":59
},{
    "Name":"Armor",
    "Height":163,
    "Weight":50
},{
    "Name":"Atlas",
    "Height":183,
    "Weight":101
},{
    "Name":"Atlas",
    "Height":198,
    "Weight":126
},{
    "Name":"Atom",
    "Height":178,
    "Weight":68
},{
    "Name":"Atom Girl",
    "Height":168,
    "Weight":54
},{
    "Name":"Atom II",
    "Height":183,
    "Weight":81
},{
    "Name":"Aurora",
    "Height":180,
    "Weight":63
},{
    "Name":"Azazel",
    "Height":183,
    "Weight":67
},{
    "Name":"Bane",
    "Height":203,
    "Weight":180
},{
    "Name":"Banshee",
    "Height":183,
    "Weight":77
},{
    "Name":"Bantam",
    "Height":165,
    "Weight":54
},{
    "Name":"Batgirl",
    "Height":170,
    "Weight":57
},{
    "Name":"Batgirl IV",
    "Height":165,
    "Weight":52
},{
    "Name":"Batgirl VI",
    "Height":168,
    "Weight":61
},{
    "Name":"Batman",
    "Height":188,
    "Weight":95
},{
    "Name":"Batman",
    "Height":178,
    "Weight":77
},{
    "Name":"Batman II",
    "Height":178,
    "Weight":79
},{
    "Name":"Battlestar",
    "Height":198,
    "Weight":133
},{
    "Name":"Beak",
    "Height":175,
    "Weight":63
},{
    "Name":"Beast",
    "Height":180,
    "Weight":181
},{
    "Name":"Beast Boy",
    "Height":173,
    "Weight":68
},{
    "Name":"Beta Ray Bill",
    "Height":201,
    "Weight":216
},{
    "Name":"Big Barda",
    "Height":188,
    "Weight":135
},{
    "Name":"Big Man",
    "Height":165,
    "Weight":71
},{
    "Name":"Binary",
    "Height":180,
    "Weight":54
},{
    "Name":"Bishop",
    "Height":198,
    "Weight":124
},{
    "Name":"Bizarro",
    "Height":191,
    "Weight":155
},{
    "Name":"Black Adam",
    "Height":191,
    "Weight":113
},{
    "Name":"Black Bolt",
    "Height":188,
    "Weight":95
},{
    "Name":"Black Canary",
    "Height":165,
    "Weight":58
},{
    "Name":"Black Canary",
    "Height":170,
    "Weight":59
},{
    "Name":"Black Cat",
    "Height":178,
    "Weight":54
},{
    "Name":"Black Knight III",
    "Height":183,
    "Weight":86
},{
    "Name":"Black Lightning",
    "Height":185,
    "Weight":90
},{
    "Name":"Black Mamba",
    "Height":170,
    "Weight":52
},{
    "Name":"Black Manta",
    "Height":188,
    "Weight":92
},{
    "Name":"Black Panther",
    "Height":183,
    "Weight":90
},{
    "Name":"Black Widow",
    "Height":170,
    "Weight":59
},{
    "Name":"Black Widow II",
    "Height":170,
    "Weight":61
},{
    "Name":"Blackout",
    "Height":191,
    "Weight":104
},{
    "Name":"Blackwing",
    "Height":185,
    "Weight":86
},{
    "Name":"Blackwulf",
    "Height":188,
    "Weight":88
},{
    "Name":"Blade",
    "Height":188,
    "Weight":97
},{
    "Name":"Bling!",
    "Height":168,
    "Weight":68
},{
    "Name":"Blink",
    "Height":165,
    "Weight":56
},{
    "Name":"Blizzard II",
    "Height":175,
    "Weight":77
},{
    "Name":"Blob",
    "Height":178,
    "Weight":230
},{
    "Name":"Bloodaxe",
    "Height":218,
    "Weight":495
},{
    "Name":"Blue Beetle II",
    "Height":183,
    "Weight":86
},{
    "Name":"Boom-Boom",
    "Height":165,
    "Weight":55
},{
    "Name":"Booster Gold",
    "Height":196,
    "Weight":97
},{
    "Name":"Box III",
    "Height":193,
    "Weight":110
},{
    "Name":"Brainiac",
    "Height":198,
    "Weight":135
},{
    "Name":"Brainiac 5",
    "Height":170,
    "Weight":61
},{
    "Name":"Brother Voodoo",
    "Height":183,
    "Weight":99
},{
    "Name":"Buffy",
    "Height":157,
    "Weight":52
},{
    "Name":"Bullseye",
    "Height":183,
    "Weight":90
},{
    "Name":"Bumblebee",
    "Height":170,
    "Weight":59
},{
    "Name":"Cable",
    "Height":203,
    "Weight":158
},{
    "Name":"Callisto",
    "Height":175,
    "Weight":74
},{
    "Name":"Cannonball",
    "Height":183,
    "Weight":81
},{
    "Name":"Captain America",
    "Height":188,
    "Weight":108
},{
    "Name":"Captain Atom",
    "Height":193,
    "Weight":90
},{
    "Name":"Captain Britain",
    "Height":198,
    "Weight":116
},{
    "Name":"Captain Mar-vell",
    "Height":188,
    "Weight":108
},{
    "Name":"Captain Marvel",
    "Height":180,
    "Weight":74
},{
    "Name":"Captain Marvel",
    "Height":193,
    "Weight":101
},{
    "Name":"Captain Marvel II",
    "Height":175,
    "Weight":74
},{
    "Name":"Carnage",
    "Height":185,
    "Weight":86
},{
    "Name":"Cat",
    "Height":173,
    "Weight":61
},{
    "Name":"Catwoman",
    "Height":175,
    "Weight":61
},{
    "Name":"Cecilia Reyes",
    "Height":170,
    "Weight":62
},{
    "Name":"Century",
    "Height":201,
    "Weight":97
},{
    "Name":"Chamber",
    "Height":175,
    "Weight":63
},{
    "Name":"Changeling",
    "Height":180,
    "Weight":81
},{
    "Name":"Cheetah",
    "Height":163,
    "Weight":50
},{
    "Name":"Cheetah II",
    "Height":170,
    "Weight":55
},{
    "Name":"Cheetah III",
    "Height":175,
    "Weight":54
},{
    "Name":"Chromos",
    "Height":185,
    "Weight":86
},{
    "Name":"Citizen Steel",
    "Height":183,
    "Weight":170
},{
    "Name":"Cloak",
    "Height":226,
    "Weight":70
},{
    "Name":"Clock King",
    "Height":178,
    "Weight":78
},{
    "Name":"Colossus",
    "Height":226,
    "Weight":225
},{
    "Name":"Copycat",
    "Height":183,
    "Weight":67
},{
    "Name":"Corsair",
    "Height":191,
    "Weight":79
},{
    "Name":"Cottonmouth",
    "Height":183,
    "Weight":99
},{
    "Name":"Crimson Dynamo",
    "Height":180,
    "Weight":104
},{
    "Name":"Crystal",
    "Height":168,
    "Weight":50
},{
    "Name":"Cyborg",
    "Height":198,
    "Weight":173
},{
    "Name":"Cyclops",
    "Height":191,
    "Weight":88
},{
    "Name":"Cypher",
    "Height":175,
    "Weight":68
},{
    "Name":"Dagger",
    "Height":165,
    "Weight":52
},{
    "Name":"Daredevil",
    "Height":183,
    "Weight":90
},{
    "Name":"Darkhawk",
    "Height":185,
    "Weight":81
},{
    "Name":"Darkseid",
    "Height":267,
    "Weight":817
},{
    "Name":"Darkstar",
    "Height":168,
    "Weight":56
},{
    "Name":"Darth Vader",
    "Height":198,
    "Weight":135
},{
    "Name":"Dash",
    "Height":122,
    "Weight":27
},{
    "Name":"Dazzler",
    "Height":173,
    "Weight":52
},{
    "Name":"Deadman",
    "Height":183,
    "Weight":90
},{
    "Name":"Deadpool",
    "Height":188,
    "Weight":95
},{
    "Name":"Deadshot",
    "Height":185,
    "Weight":91
},{
    "Name":"Deathlok",
    "Height":193,
    "Weight":178
},{
    "Name":"Deathstroke",
    "Height":193,
    "Weight":101
},{
    "Name":"Demogoblin",
    "Height":185,
    "Weight":95
},{
    "Name":"Destroyer",
    "Height":188,
    "Weight":383
},{
    "Name":"Diamondback",
    "Height":193,
    "Weight":90
},{
    "Name":"Doc Samson",
    "Height":198,
    "Weight":171
},{
    "Name":"Doctor Doom",
    "Height":201,
    "Weight":187
},{
    "Name":"Doctor Doom II",
    "Height":201,
    "Weight":132
},{
    "Name":"Doctor Fate",
    "Height":188,
    "Weight":89
},{
    "Name":"Doctor Octopus",
    "Height":175,
    "Weight":110
},{
    "Name":"Doctor Strange",
    "Height":188,
    "Weight":81
},{
    "Name":"Domino",
    "Height":173,
    "Weight":54
},{
    "Name":"Donna Troy",
    "Height":175,
    "Weight":63
},{
    "Name":"Doomsday",
    "Height":244,
    "Weight":412
},{
    "Name":"Doppelganger",
    "Height":196,
    "Weight":104
},{
    "Name":"Drax the Destroyer",
    "Height":193,
    "Weight":306
},{
    "Name":"Elastigirl",
    "Height":168,
    "Weight":56
},{
    "Name":"Electro",
    "Height":180,
    "Weight":74
},{
    "Name":"Elektra",
    "Height":175,
    "Weight":59
},{
    "Name":"Elongated Man",
    "Height":185,
    "Weight":80
},{
    "Name":"Emma Frost",
    "Height":178,
    "Weight":65
},{
    "Name":"Enchantress",
    "Height":168,
    "Weight":57
},{
    "Name":"Etrigan",
    "Height":193,
    "Weight":203
},{
    "Name":"Evil Deadpool",
    "Height":188,
    "Weight":95
},{
    "Name":"Evilhawk",
    "Height":191,
    "Weight":106
},{
    "Name":"Exodus",
    "Height":183,
    "Weight":88
},{
    "Name":"Fabian Cortez",
    "Height":196,
    "Weight":96
},{
    "Name":"Falcon",
    "Height":188,
    "Weight":108
},{
    "Name":"Feral",
    "Height":175,
    "Weight":50
},{
    "Name":"Fin Fang Foom",
    "Height":975,
    "Weight":18
},{
    "Name":"Firebird",
    "Height":165,
    "Weight":56
},{
    "Name":"Firelord",
    "Height":193,
    "Weight":99
},{
    "Name":"Firestar",
    "Height":173,
    "Weight":56
},{
    "Name":"Firestorm",
    "Height":188,
    "Weight":91
},{
    "Name":"Flash",
    "Height":180,
    "Weight":81
},{
    "Name":"Flash II",
    "Height":183,
    "Weight":88
},{
    "Name":"Flash III",
    "Height":183,
    "Weight":86
},{
    "Name":"Flash IV",
    "Height":157,
    "Weight":52
},{
    "Name":"Forge",
    "Height":183,
    "Weight":81
},{
    "Name":"Franklin Richards",
    "Height":142,
    "Weight":45
},{
    "Name":"Franklin Storm",
    "Height":188,
    "Weight":92
},{
    "Name":"Frenzy",
    "Height":211,
    "Weight":104
},{
    "Name":"Frigga",
    "Height":180,
    "Weight":167
},{
    "Name":"Galactus",
    "Height":876,
    "Weight":16
},{
    "Name":"Gambit",
    "Height":185,
    "Weight":81
},{
    "Name":"Gamora",
    "Height":183,
    "Weight":77
},{
    "Name":"Genesis",
    "Height":185,
    "Weight":86
},{
    "Name":"Ghost Rider",
    "Height":188,
    "Weight":99
},{
    "Name":"Giganta",
    "Height":62.5,
    "Weight":630
},{
    "Name":"Gladiator",
    "Height":198,
    "Weight":268
},{
    "Name":"Goblin Queen",
    "Height":168,
    "Weight":50
},{
    "Name":"Goku",
    "Height":175,
    "Weight":62
},{
    "Name":"Goliath IV",
    "Height":183,
    "Weight":90
},{
    "Name":"Gorilla Grodd",
    "Height":198,
    "Weight":270
},{
    "Name":"Granny Goodness",
    "Height":178,
    "Weight":115
},{
    "Name":"Gravity",
    "Height":178,
    "Weight":79
},{
    "Name":"Green Arrow",
    "Height":188,
    "Weight":88
},{
    "Name":"Green Goblin",
    "Height":180,
    "Weight":83
},{
    "Name":"Green Goblin II",
    "Height":178,
    "Weight":77
},{
    "Name":"Green Goblin III",
    "Height":183,
    "Weight":88
},{
    "Name":"Green Goblin IV",
    "Height":178,
    "Weight":79
},{
    "Name":"Groot",
    "Height":701,
    "Weight":4
},{
    "Name":"Guy Gardner",
    "Height":188,
    "Weight":95
},{
    "Name":"Hal Jordan",
    "Height":188,
    "Weight":90
},{
    "Name":"Han Solo",
    "Height":183,
    "Weight":79
},{
    "Name":"Harley Quinn",
    "Height":170,
    "Weight":63
},{
    "Name":"Havok",
    "Height":183,
    "Weight":79
},{
    "Name":"Hawk",
    "Height":185,
    "Weight":89
},{
    "Name":"Hawkeye",
    "Height":191,
    "Weight":104
},{
    "Name":"Hawkeye II",
    "Height":165,
    "Weight":57
},{
    "Name":"Hawkgirl",
    "Height":175,
    "Weight":61
},{
    "Name":"Hawkman",
    "Height":185,
    "Weight":88
},{
    "Name":"Hawkwoman",
    "Height":175,
    "Weight":54
},{
    "Name":"Hawkwoman III",
    "Height":170,
    "Weight":65
},{
    "Name":"Heat Wave",
    "Height":180,
    "Weight":81
},{
    "Name":"Hela",
    "Height":213,
    "Weight":225
},{
    "Name":"Hellboy",
    "Height":259,
    "Weight":158
},{
    "Name":"Hellcat",
    "Height":173,
    "Weight":61
},{
    "Name":"Hellstorm",
    "Height":185,
    "Weight":81
},{
    "Name":"Hercules",
    "Height":196,
    "Weight":146
},{
    "Name":"Hobgoblin",
    "Height":180,
    "Weight":83
},{
    "Name":"Hope Summers",
    "Height":168,
    "Weight":48
},{
    "Name":"Howard the Duck",
    "Height":79,
    "Weight":18
},{
    "Name":"Hulk",
    "Height":244,
    "Weight":630
},{
    "Name":"Human Torch",
    "Height":178,
    "Weight":77
},{
    "Name":"Huntress",
    "Height":180,
    "Weight":59
},{
    "Name":"Husk",
    "Height":170,
    "Weight":58
},{
    "Name":"Hybrid",
    "Height":175,
    "Weight":77
},{
    "Name":"Hydro-Man",
    "Height":188,
    "Weight":119
},{
    "Name":"Hyperion",
    "Height":183,
    "Weight":207
},{
    "Name":"Iceman",
    "Height":173,
    "Weight":65
},{
    "Name":"Impulse",
    "Height":170,
    "Weight":65
},{
    "Name":"Indiana Jones",
    "Height":183,
    "Weight":79
},{
    "Name":"Ink",
    "Height":180,
    "Weight":81
},{
    "Name":"Invisible Woman",
    "Height":168,
    "Weight":54
},{
    "Name":"Iron Fist",
    "Height":180,
    "Weight":79
},{
    "Name":"Iron Man",
    "Height":198,
    "Weight":191
},{
    "Name":"Jack of Hearts",
    "Height":155,
    "Weight":79
},{
    "Name":"Jack-Jack",
    "Height":71,
    "Weight":14
},{
    "Name":"James T. Kirk",
    "Height":178,
    "Weight":77
},{
    "Name":"Jean Grey",
    "Height":168,
    "Weight":52
},{
    "Name":"Jennifer Kale",
    "Height":168,
    "Weight":55
},{
    "Name":"Jessica Jones",
    "Height":170,
    "Weight":56
},{
    "Name":"Jigsaw",
    "Height":188,
    "Weight":113
},{
    "Name":"John Stewart",
    "Height":185,
    "Weight":90
},{
    "Name":"John Wraith",
    "Height":183,
    "Weight":88
},{
    "Name":"Joker",
    "Height":196,
    "Weight":86
},{
    "Name":"Jolt",
    "Height":165,
    "Weight":49
},{
    "Name":"Jubilee",
    "Height":165,
    "Weight":52
},{
    "Name":"Juggernaut",
    "Height":287,
    "Weight":855
},{
    "Name":"Justice",
    "Height":178,
    "Weight":81
},{
    "Name":"Kang",
    "Height":191,
    "Weight":104
},{
    "Name":"Karate Kid",
    "Height":173,
    "Weight":72
},{
    "Name":"Killer Croc",
    "Height":244,
    "Weight":356
},{
    "Name":"Kilowog",
    "Height":234,
    "Weight":324
},{
    "Name":"Kingpin",
    "Height":201,
    "Weight":203
},{
    "Name":"Klaw",
    "Height":188,
    "Weight":97
},{
    "Name":"Kraven II",
    "Height":191,
    "Weight":99
},{
    "Name":"Kraven the Hunter",
    "Height":183,
    "Weight":106
},{
    "Name":"Krypto",
    "Height":64,
    "Weight":18
},{
    "Name":"Kyle Rayner",
    "Height":180,
    "Weight":79
},{
    "Name":"Lady Deathstrike",
    "Height":175,
    "Weight":58
},{
    "Name":"Leader",
    "Height":178,
    "Weight":63
},{
    "Name":"Legion",
    "Height":175,
    "Weight":59
},{
    "Name":"Lex Luthor",
    "Height":188,
    "Weight":95
},{
    "Name":"Light Lass",
    "Height":165,
    "Weight":54
},{
    "Name":"Lightning Lad",
    "Height":155,
    "Weight":65
},{
    "Name":"Lightning Lord",
    "Height":191,
    "Weight":95
},{
    "Name":"Living Brain",
    "Height":198,
    "Weight":360
},{
    "Name":"Lizard",
    "Height":203,
    "Weight":230
},{
    "Name":"Lobo",
    "Height":229,
    "Weight":288
},{
    "Name":"Loki",
    "Height":193,
    "Weight":236
},{
    "Name":"Longshot",
    "Height":188,
    "Weight":36
},{
    "Name":"Luke Cage",
    "Height":198,
    "Weight":191
},{
    "Name":"Luke Skywalker",
    "Height":168,
    "Weight":77
},{
    "Name":"Mach-IV",
    "Height":180,
    "Weight":79
},{
    "Name":"Machine Man",
    "Height":183,
    "Weight":383
},{
    "Name":"Magneto",
    "Height":188,
    "Weight":86
},{
    "Name":"Man-Thing",
    "Height":213,
    "Weight":225
},{
    "Name":"Man-Wolf",
    "Height":188,
    "Weight":90
},{
    "Name":"Mandarin",
    "Height":188,
    "Weight":97
},{
    "Name":"Mantis",
    "Height":168,
    "Weight":52
},{
    "Name":"Martian Manhunter",
    "Height":201,
    "Weight":135
},{
    "Name":"Marvel Girl",
    "Height":170,
    "Weight":56
},{
    "Name":"Master Brood",
    "Height":183,
    "Weight":81
},{
    "Name":"Maverick",
    "Height":193,
    "Weight":110
},{
    "Name":"Maxima",
    "Height":180,
    "Weight":72
},{
    "Name":"Medusa",
    "Height":180,
    "Weight":59
},{
    "Name":"Meltdown",
    "Height":165,
    "Weight":54
},{
    "Name":"Mephisto",
    "Height":198,
    "Weight":140
},{
    "Name":"Mera",
    "Height":175,
    "Weight":72
},{
    "Name":"Metallo",
    "Height":196,
    "Weight":90
},{
    "Name":"Metamorpho",
    "Height":185,
    "Weight":90
},{
    "Name":"Metron",
    "Height":185,
    "Weight":86
},{
    "Name":"Micro Lad",
    "Height":183,
    "Weight":77
},{
    "Name":"Mimic",
    "Height":188,
    "Weight":101
},{
    "Name":"Miss Martian",
    "Height":178,
    "Weight":61
},{
    "Name":"Mister Fantastic",
    "Height":185,
    "Weight":81
},{
    "Name":"Mister Freeze",
    "Height":183,
    "Weight":86
},{
    "Name":"Mister Sinister",
    "Height":196,
    "Weight":128
},{
    "Name":"Mockingbird",
    "Height":175,
    "Weight":61
},{
    "Name":"MODOK",
    "Height":366,
    "Weight":338
},{
    "Name":"Molten Man",
    "Height":196,
    "Weight":248
},{
    "Name":"Monarch",
    "Height":193,
    "Weight":90
},{
    "Name":"Moon Knight",
    "Height":188,
    "Weight":101
},{
    "Name":"Moonstone",
    "Height":180,
    "Weight":59
},{
    "Name":"Morlun",
    "Height":188,
    "Weight":79
},{
    "Name":"Morph",
    "Height":178,
    "Weight":79
},{
    "Name":"Moses Magnum",
    "Height":175,
    "Weight":72
},{
    "Name":"Mr Immortal",
    "Height":188,
    "Weight":70
},{
    "Name":"Mr Incredible",
    "Height":201,
    "Weight":158
},{
    "Name":"Ms Marvel II",
    "Height":173,
    "Weight":61
},{
    "Name":"Multiple Man",
    "Height":180,
    "Weight":70
},{
    "Name":"Mysterio",
    "Height":180,
    "Weight":79
},{
    "Name":"Mystique",
    "Height":178,
    "Weight":54
},{
    "Name":"Namor",
    "Height":188,
    "Weight":125
},{
    "Name":"Namora",
    "Height":180,
    "Weight":85
},{
    "Name":"Namorita",
    "Height":168,
    "Weight":101
},{
    "Name":"Naruto Uzumaki",
    "Height":168,
    "Weight":54
},{
    "Name":"Nebula",
    "Height":185,
    "Weight":83
},{
    "Name":"Nick Fury",
    "Height":185,
    "Weight":99
},{
    "Name":"Nightcrawler",
    "Height":175,
    "Weight":88
},{
    "Name":"Nightwing",
    "Height":178,
    "Weight":79
},{
    "Name":"Northstar",
    "Height":180,
    "Weight":83
},{
    "Name":"Nova",
    "Height":185,
    "Weight":86
},{
    "Name":"Nova",
    "Height":163,
    "Weight":59
},{
    "Name":"Odin",
    "Height":206,
    "Weight":293
},{
    "Name":"Omega Red",
    "Height":211,
    "Weight":191
},{
    "Name":"Omniscient",
    "Height":180,
    "Weight":65
},{
    "Name":"One Punch Man",
    "Height":175,
    "Weight":69
},{
    "Name":"Onslaught",
    "Height":305,
    "Weight":405
},{
    "Name":"Oracle",
    "Height":178,
    "Weight":59
},{
    "Name":"Paul Blart",
    "Height":170,
    "Weight":117
},{
    "Name":"Penance II",
    "Height":183,
    "Weight":89
},{
    "Name":"Penguin",
    "Height":157,
    "Weight":79
},{
    "Name":"Phantom Girl",
    "Height":168,
    "Weight":54
},{
    "Name":"Phoenix",
    "Height":168,
    "Weight":52
},{
    "Name":"Plantman",
    "Height":183,
    "Weight":87
},{
    "Name":"Plastic Man",
    "Height":185,
    "Weight":80
},{
    "Name":"Plastique",
    "Height":168,
    "Weight":55
},{
    "Name":"Poison Ivy",
    "Height":168,
    "Weight":50
},{
    "Name":"Polaris",
    "Height":170,
    "Weight":52
},{
    "Name":"Power Girl",
    "Height":180,
    "Weight":81
},{
    "Name":"Predator",
    "Height":213,
    "Weight":234
},{
    "Name":"Professor X",
    "Height":183,
    "Weight":86
},{
    "Name":"Professor Zoom",
    "Height":180,
    "Weight":81
},{
    "Name":"Psylocke",
    "Height":180,
    "Weight":70
},{
    "Name":"Punisher",
    "Height":183,
    "Weight":90
},{
    "Name":"Purple Man",
    "Height":180,
    "Weight":74
},{
    "Name":"Pyro",
    "Height":178,
    "Weight":68
},{
    "Name":"Question",
    "Height":188,
    "Weight":83
},{
    "Name":"Quicksilver",
    "Height":183,
    "Weight":79
},{
    "Name":"Quill",
    "Height":163,
    "Weight":56
},{
    "Name":"Ra's Al Ghul",
    "Height":193,
    "Weight":97
},{
    "Name":"Rambo",
    "Height":178,
    "Weight":83
},{
    "Name":"Raven",
    "Height":165,
    "Weight":50
},{
    "Name":"Ray",
    "Height":178,
    "Weight":70
},{
    "Name":"Razor-Fist II",
    "Height":191,
    "Weight":117
},{
    "Name":"Red Arrow",
    "Height":180,
    "Weight":83
},{
    "Name":"Red Hood",
    "Height":183,
    "Weight":81
},{
    "Name":"Red Hulk",
    "Height":213,
    "Weight":630
},{
    "Name":"Red Robin",
    "Height":165,
    "Weight":56
},{
    "Name":"Red Skull",
    "Height":188,
    "Weight":108
},{
    "Name":"Red Tornado",
    "Height":185,
    "Weight":146
},{
    "Name":"Rhino",
    "Height":196,
    "Weight":320
},{
    "Name":"Rick Flag",
    "Height":185,
    "Weight":85
},{
    "Name":"Ripcord",
    "Height":180,
    "Weight":72
},{
    "Name":"Robin",
    "Height":178,
    "Weight":79
},{
    "Name":"Robin II",
    "Height":183,
    "Weight":101
},{
    "Name":"Robin III",
    "Height":165,
    "Weight":56
},{
    "Name":"Robin V",
    "Height":137,
    "Weight":38
},{
    "Name":"Rocket Raccoon",
    "Height":122,
    "Weight":25
},{
    "Name":"Rogue",
    "Height":173,
    "Weight":54
},{
    "Name":"Ronin",
    "Height":191,
    "Weight":104
},{
    "Name":"Rorschach",
    "Height":168,
    "Weight":63
},{
    "Name":"Sabretooth",
    "Height":198,
    "Weight":171
},{
    "Name":"Sage",
    "Height":170,
    "Weight":61
},{
    "Name":"Sandman",
    "Height":185,
    "Weight":203
},{
    "Name":"Sasquatch",
    "Height":305,
    "Weight":900
},{
    "Name":"Scarecrow",
    "Height":183,
    "Weight":63
},{
    "Name":"Scarlet Spider",
    "Height":178,
    "Weight":74
},{
    "Name":"Scarlet Spider II",
    "Height":193,
    "Weight":113
},{
    "Name":"Scarlet Witch",
    "Height":170,
    "Weight":59
},{
    "Name":"Scorpion",
    "Height":211,
    "Weight":310
},{
    "Name":"Sentry",
    "Height":188,
    "Weight":87
},{
    "Name":"Shadow King",
    "Height":185,
    "Weight":149
},{
    "Name":"Shadow Lass",
    "Height":173,
    "Weight":54
},{
    "Name":"Shadowcat",
    "Height":168,
    "Weight":50
},{
    "Name":"Shang-Chi",
    "Height":178,
    "Weight":79
},{
    "Name":"Shatterstar",
    "Height":191,
    "Weight":88
},{
    "Name":"She-Hulk",
    "Height":201,
    "Weight":315
},{
    "Name":"She-Thing",
    "Height":183,
    "Weight":153
},{
    "Name":"Shocker",
    "Height":175,
    "Weight":79
},{
    "Name":"Shriek",
    "Height":173,
    "Weight":52
},{
    "Name":"Sif",
    "Height":188,
    "Weight":191
},{
    "Name":"Silver Surfer",
    "Height":193,
    "Weight":101
},{
    "Name":"Silverclaw",
    "Height":157,
    "Weight":50
},{
    "Name":"Sinestro",
    "Height":201,
    "Weight":92
},{
    "Name":"Siren",
    "Height":175,
    "Weight":72
},{
    "Name":"Siryn",
    "Height":168,
    "Weight":52
},{
    "Name":"Skaar",
    "Height":198,
    "Weight":180
},{
    "Name":"Snowbird",
    "Height":178,
    "Weight":49
},{
    "Name":"Solomon Grundy",
    "Height":279,
    "Weight":437
},{
    "Name":"Songbird",
    "Height":165,
    "Weight":65
},{
    "Name":"Space Ghost",
    "Height":188,
    "Weight":113
},{
    "Name":"Spawn",
    "Height":211,
    "Weight":405
},{
    "Name":"Spider-Girl",
    "Height":170,
    "Weight":54
},{
    "Name":"Spider-Gwen",
    "Height":165,
    "Weight":56
},{
    "Name":"Spider-Man",
    "Height":178,
    "Weight":74
},{
    "Name":"Spider-Man",
    "Height":178,
    "Weight":77
},{
    "Name":"Spider-Man",
    "Height":157,
    "Weight":56
},{
    "Name":"Spider-Woman",
    "Height":178,
    "Weight":59
},{
    "Name":"Spider-Woman III",
    "Height":173,
    "Weight":55
},{
    "Name":"Spider-Woman IV",
    "Height":178,
    "Weight":58
},{
    "Name":"Spock",
    "Height":185,
    "Weight":81
},{
    "Name":"Spyke",
    "Height":183,
    "Weight":83
},{
    "Name":"Star-Lord",
    "Height":188,
    "Weight":79
},{
    "Name":"Starfire",
    "Height":193,
    "Weight":71
},{
    "Name":"Stargirl",
    "Height":165,
    "Weight":62
},{
    "Name":"Static",
    "Height":170,
    "Weight":63
},{
    "Name":"Steel",
    "Height":201,
    "Weight":131
},{
    "Name":"Steppenwolf",
    "Height":183,
    "Weight":91
},{
    "Name":"Storm",
    "Height":180,
    "Weight":57
},{
    "Name":"Sunspot",
    "Height":173,
    "Weight":77
},{
    "Name":"Superboy",
    "Height":170,
    "Weight":68
},{
    "Name":"Superboy-Prime",
    "Height":180,
    "Weight":77
},{
    "Name":"Supergirl",
    "Height":165,
    "Weight":54
},{
    "Name":"Superman",
    "Height":191,
    "Weight":101
},{
    "Name":"Swarm",
    "Height":196,
    "Weight":47
},{
    "Name":"Synch",
    "Height":180,
    "Weight":74
},{
    "Name":"T-1000",
    "Height":183,
    "Weight":146
},{
    "Name":"Taskmaster",
    "Height":188,
    "Weight":99
},{
    "Name":"Tempest",
    "Height":163,
    "Weight":54
},{
    "Name":"Thanos",
    "Height":201,
    "Weight":443
},{
    "Name":"The Comedian",
    "Height":188,
    "Weight":101
},{
    "Name":"Thing",
    "Height":183,
    "Weight":225
},{
    "Name":"Thor",
    "Height":198,
    "Weight":288
},{
    "Name":"Thor Girl",
    "Height":175,
    "Weight":143
},{
    "Name":"Thunderbird",
    "Height":185,
    "Weight":101
},{
    "Name":"Thunderbird III",
    "Height":175,
    "Weight":74
},{
    "Name":"Thunderstrike",
    "Height":198,
    "Weight":288
},{
    "Name":"Thundra",
    "Height":218,
    "Weight":158
},{
    "Name":"Tiger Shark",
    "Height":185,
    "Weight":203
},{
    "Name":"Tigra",
    "Height":178,
    "Weight":81
},{
    "Name":"Tinkerer",
    "Height":163,
    "Weight":54
},{
    "Name":"Toad",
    "Height":175,
    "Weight":76
},{
    "Name":"Toxin",
    "Height":188,
    "Weight":97
},{
    "Name":"Toxin",
    "Height":191,
    "Weight":117
},{
    "Name":"Trickster",
    "Height":183,
    "Weight":81
},{
    "Name":"Triplicate Girl",
    "Height":168,
    "Weight":59
},{
    "Name":"Triton",
    "Height":188,
    "Weight":86
},{
    "Name":"Two-Face",
    "Height":183,
    "Weight":82
},{
    "Name":"Ultragirl",
    "Height":168,
    "Weight":105
},{
    "Name":"Ultron",
    "Height":206,
    "Weight":331
},{
    "Name":"Utgard-Loki",
    "Height":15.2,
    "Weight":58
},{
    "Name":"Vagabond",
    "Height":168,
    "Weight":54
},{
    "Name":"Valerie Hart",
    "Height":175,
    "Weight":56
},{
    "Name":"Valkyrie",
    "Height":191,
    "Weight":214
},{
    "Name":"Vanisher",
    "Height":165,
    "Weight":79
},{
    "Name":"Vegeta",
    "Height":168,
    "Weight":73
},{
    "Name":"Venom",
    "Height":191,
    "Weight":117
},{
    "Name":"Venom II",
    "Height":175,
    "Weight":50
},{
    "Name":"Venom III",
    "Height":229,
    "Weight":334
},{
    "Name":"Vertigo II",
    "Height":168,
    "Weight":52
},{
    "Name":"Vibe",
    "Height":178,
    "Weight":71
},{
    "Name":"Vindicator",
    "Height":165,
    "Weight":54
},{
    "Name":"Violet Parr",
    "Height":137,
    "Weight":41
},{
    "Name":"Vision",
    "Height":191,
    "Weight":135
},{
    "Name":"Vision II",
    "Height":191,
    "Weight":135
},{
    "Name":"Vixen",
    "Height":175,
    "Weight":63
},{
    "Name":"Vulture",
    "Height":180,
    "Weight":79
},{
    "Name":"Walrus",
    "Height":183,
    "Weight":162
},{
    "Name":"War Machine",
    "Height":185,
    "Weight":95
},{
    "Name":"Warbird",
    "Height":180,
    "Weight":54
},{
    "Name":"Warlock",
    "Height":188,
    "Weight":108
},{
    "Name":"Warp",
    "Height":173,
    "Weight":67
},{
    "Name":"Warpath",
    "Height":218,
    "Weight":158
},{
    "Name":"Wasp",
    "Height":163,
    "Weight":50
},{
    "Name":"White Queen",
    "Height":178,
    "Weight":65
},{
    "Name":"Winter Soldier",
    "Height":175,
    "Weight":117
},{
    "Name":"Wiz Kid",
    "Height":140,
    "Weight":39
},{
    "Name":"Wolfsbane",
    "Height":366,
    "Weight":473
},{
    "Name":"Wolverine",
    "Height":160,
    "Weight":135
},{
    "Name":"Wonder Girl",
    "Height":165,
    "Weight":51
},{
    "Name":"Wonder Man",
    "Height":188,
    "Weight":171
},{
    "Name":"Wonder Woman",
    "Height":183,
    "Weight":74
},{
    "Name":"Wyatt Wingfoot",
    "Height":196,
    "Weight":117
},{
    "Name":"X-23",
    "Height":155,
    "Weight":50
},{
    "Name":"X-Man",
    "Height":175,
    "Weight":61
},{
    "Name":"Yellow Claw",
    "Height":188,
    "Weight":95
},{
    "Name":"Yellowjacket",
    "Height":183,
    "Weight":83
},{
    "Name":"Yellowjacket II",
    "Height":165,
    "Weight":52
},{
    "Name":"Yoda",
    "Height":66,
    "Weight":17
},{
    "Name":"Zatanna",
    "Height":170,
    "Weight":57
},{
    "Name":"Zoom",
    "Height":185,
    "Weight":81
}]