// =======================
// ASSETS & STAŁE
// =======================

const ICONS = {
  inventory: "https://i.postimg.cc/V6NnF0WY/image.png",
  talents:   "https://i.postimg.cc/cLmhWnT8/image.png",
  maps:      "https://i.postimg.cc/VkVSXsNP/image.png",
  smith:     "https://i.postimg.cc/13mFSY8s/image.png",
  enchant:   "https://i.postimg.cc/1tGRfsdC/image.png",
  level:     "https://i.postimg.cc/RCpyKjBz/image.png",
  coins:     "https://i.postimg.cc/MHg9NJ6n/image.png"
};

const MAP_BACKGROUNDS = {
  earth:   "https://i.postimg.cc/7ZtMNvg1/image.png",
  jungle:  "https://i.postimg.cc/85g7Dwh3/image.png",
  cave:    "https://i.postimg.cc/sg3GGTqS/image.png",
  hell:    "https://i.postimg.cc/TYLDXybZ/bbb5e5cc-d2e1-4fda-9278-aac37410ae9a-1920x1080.png",
  ocean:   "https://i.postimg.cc/G2P1DxZC/image.png",
  crystal: "https://i.postimg.cc/zBhWQFWt/image.png",
  fog:     "https://i.postimg.cc/SNwKTYkD/image.png",
  burn:    "https://i.postimg.cc/8CbKXW82/image.png"
};

const ROOM_BG = {
  boss:   "https://i.postimg.cc/3J79gxZz/image.png",
  hell:   "https://i.postimg.cc/1tMmztRz/image.png",
  ocean:  "https://i.postimg.cc/RV2Mh2md/image.png",
  cave:   "https://i.postimg.cc/MH8FgbJy/image.png",
  jungle: "https://i.postimg.cc/RCD31s90/image.png",
  earth:  "https://i.postimg.cc/wvSV7h6Z/image.png",
  crystal:"https://i.postimg.cc/vZ1TYLHF/image.png",
  fog:    "https://i.postimg.cc/28nm2c6Q/image.png",
  burn:   "https://i.postimg.cc/nzLcWv5p/image.png"
};

const CHEST_ICONS = {
  earth:   "https://i.postimg.cc/XJxsDMx4/image.png",
  jungle:  "https://i.postimg.cc/LXc6g7K5/image.png",
  cave:    "https://i.postimg.cc/J0rYx7LC/image.png",
  hell:    "https://i.postimg.cc/NMgxqNPs/image.png",
  ocean:   "https://i.postimg.cc/3Rc0SnMT/image.png",
  boss:    "https://i.postimg.cc/XvZrZ9B6/image.png",
  crystal: "https://i.postimg.cc/sX4td8kB/image.png",
  fog:     "https://i.postimg.cc/mrYbkdxF/image.png",
  burn:    "https://i.postimg.cc/Jh5Gv7zc/image.png"
};

// =======================
// RUDY / MATERIAŁY
// =======================

const ORES = {
  earth: [
    { id: "Ziemia",   name: "Ziemia",   img: "https://i.postimg.cc/fLmcZJ1W/image.png", min: 1, max: 3 },
    { id: "Gleba",    name: "Gleba",    img: "https://i.postimg.cc/RhTw62S5/image.png", min: 1, max: 2 },
    { id: "Kamień",   name: "Kamień",   img: "https://i.postimg.cc/5tZrnQwv/image.png", min: 1, max: 2 }
  ],
  jungle: [
    { id: "Drewno",   name: "Drewno",   img: "https://i.postimg.cc/CMfccK18/image.png", min: 1, max: 3 },
    { id: "Patyk",    name: "Patyk",    img: "https://i.postimg.cc/RZGdW6Pd/image.png", min: 1, max: 4 },
    { id: "Liany",    name: "Liany",    img: "https://i.postimg.cc/02kJbtLm/image.png", min: 1, max: 2 }
  ],
  cave: [
    { id: "Diament",  name: "Diament",  img: "https://i.postimg.cc/4dphhjff/image.png", min: 1, max: 1 },
    { id: "Zelazo",   name: "Żelazo",   img: "https://i.postimg.cc/TPzD1TX4/image.png", min: 1, max: 2 },
    { id: "Zloto",    name: "Złoto",    img: "https://i.postimg.cc/BvLFJXRg/image.png", min: 1, max: 2 },
    { id: "Obsydian", name: "Obsydian", img: "https://i.postimg.cc/y8bsDc15/image.png", min: 1, max: 1 },
    { id: "Lapis",    name: "Lapis",    img: "https://i.postimg.cc/PfbYS7fP/image.png", min: 1, max: 3 }
  ],
  hell: [
    { id: "PustBrick", name: "Pustkowy Brick",  img: "https://i.postimg.cc/bwnk1GNk/image.png", min: 1, max: 2 },
    { id: "PustKrusz", name: "Pustkowy Kruszec",img: "https://i.postimg.cc/1tBjPCkR/image.png", min: 1, max: 1 },
    { id: "KawZlota",  name: "Kawałek Złota",   img: "https://i.postimg.cc/wvNDQ7Vh/image.png", min: 1, max: 3 },
    { id: "NetherFrag",name: "Nether Fragment", img: "https://i.postimg.cc/0jxKGZjt/image.png", min: 1, max: 2 },
    { id: "PotBrick",  name: "Potępiony Brick", img: "https://i.postimg.cc/3NgCYd4V/image.png", min: 1, max: 1 }
  ],
  ocean: [
    { id: "Latarnia", name: "Morska Latarnia",  img: "https://i.postimg.cc/K8VKpm4P/image.png", min: 1, max: 1 },
    { id: "Pryzmaryn",name: "Pryzmaryn",        img: "https://i.postimg.cc/m2gtbPHM/image.png", min: 1, max: 3 },
    { id: "Gabka",    name: "Gąbka",           img: "https://i.postimg.cc/YC40WT8r/image.png", min: 1, max: 1 },
    { id: "KawPryzm", name: "Kawałek Pryzmarynu", img: "https://i.postimg.cc/3wmwLpPq/image.png", min: 1, max: 3 }
  ],
  crystal: [
    { id: "KrysOdl",  name: "Kryształowe odłamki", img: "https://i.postimg.cc/t4VXWvj0/image.png", min: 1, max: 2 },
    { id: "Luminit",  name: "Ruda Luminitu",       img: "https://i.postimg.cc/h4LgDQ0D/image.png", min: 1, max: 1 },
    { id: "KruszKam", name: "Kruszący się Kamień", img: "https://i.postimg.cc/vZ9tkMs6/image.png", min: 1, max: 2 }
  ],
  fog: [
    { id: "ZwDrzewo", name: "Zwiędłe Drzewa",      img: "https://i.postimg.cc/cH93r1YX/image.png", min: 1, max: 2 },
    { id: "SzKrzew",  name: "Szeptające Krzewy",   img: "https://i.postimg.cc/sXQWGdcz/image.png", min: 1, max: 2 }
  ],
  burn: [
    { id: "StopZiem",  name: "Stopiona Ziemia",    img: "https://i.postimg.cc/hPr0BnZZ/image.png", min: 1, max: 1 },
    { id: "ZelKosc",   name: "Żelazne Kościska",   img: "https://i.postimg.cc/VvNk0j1c/image.png", min: 1, max: 2 },
    { id: "RdzaZloze", name: "Rdzawe Złoże",       img: "https://i.postimg.cc/3NhbtBWJ/image.png", min: 1, max: 2 }
  ]
};

// =======================
// MAPY I MOBY (HP chore)
// =======================

function scaleHp(base, stage) {
  // HP rośnie nieludzko z mapą
  return base * Math.pow(5, stage);
}

const MAPS = [
  {
    id: "earth",
    name: "Ziemny Biom",
    stage: 0,
    background: MAP_BACKGROUNDS.earth,
    mobs: [
      { name: "Ziemny Kostek", img: "https://i.postimg.cc/bNsCKpyn/b475fed7-ec12-45d4-aeea-f1eae5ef1a6d.png", hp: scaleHp(200,0) },
      { name: "Gliniany Kret", img: "https://i.postimg.cc/ZY8JDWFH/image.png", hp: scaleHp(800,0) },
      { name: "Strażnik Pagórka", img: "https://i.postimg.cc/SRhkx4q7/image.png", hp: scaleHp(2000,0) }
    ],
    boss: {
      name: "Władca Ziemi",
      img: "https://i.postimg.cc/bNsCKpyn/b475fed7-ec12-45d4-aeea-f1eae5ef1a6d.png",
      hp: scaleHp(5000,0),
      relic: null
    }
  },
  {
    id: "jungle",
    name: "Dżunglowy Biom",
    stage: 1,
    background: MAP_BACKGROUNDS.jungle,
    mobs: [
      { name: "Leśny pieniek", img:"https://i.postimg.cc/wjHyGKsn/image.png", hp: scaleHp(1000,1)},
      { name: "Splątana liana", img:"https://i.postimg.cc/SQvnk2z4/image.png", hp: scaleHp(4000,1)},
      { name: "Drzewny Duszek", img:"https://i.postimg.cc/63VfFVpf/image.png", hp: scaleHp(8000,1)},
      { name: "Jungle Stalker", img:"https://i.postimg.cc/NF7C7qXX/image.png", hp: scaleHp(15000,1)},
      { name: "Strażnik Korzeni", img:"https://i.postimg.cc/MK517KnL/image.png", hp: scaleHp(20000,1)}
    ],
    boss: {
      name:"Strażnik Korzeni",
      img:"https://i.postimg.cc/MK517KnL/image.png",
      hp:scaleHp(50000,1),
      relic:null
    }
  }
  // pozostałe mapy możesz dopisać analogicznie, jeśli chcesz pełny komplet
];

// =======================
// BRONIE (Kosy – z crafta)
// =======================

const WEAPONS = [
  {
    id:"scythe_earth",
    name:"Kosa Ziemna",
    img:"https://i.postimg.cc/28Chjzh2/image.png",
    baseDmg:25,
    mats:[
      { id:"Ziemia", qty:20},
      { id:"Gleba", qty:10},
      { id:"Kamień", qty:15}
    ]
  },
  {
    id:"scythe_jungle",
    name:"Kosa Dżungli",
    img:"https://i.postimg.cc/LXc6g7K5/image.png",
    baseDmg:120,
    mats:[
      { id:"Drewno", qty:40},
      { id:"Patyk",  qty:20},
      { id:"Liany",  qty:15}
    ]
  },
  {
    id:"scythe_cave",
    name:"Kosa Jaskini",
    img:"https://i.postimg.cc/63NTH0hZ/image.png",
    baseDmg:600,
    mats:[
      { id:"Diament", qty:5},
      { id:"Zelazo",  qty:20},
      { id:"Zloto",   qty:15},
      { id:"Obsydian",qty:10},
      { id:"Lapis",   qty:25}
    ]
  }
  // kolejne kosy możesz rozwinąć później
];

// =======================
// ENCHANTY
// =======================

const ENCHANT_TYPES = [
  { id:"strength",      name:"Siła",             desc:"Zwiększa obrażenia.",                 getValue:t=>0.03*t },
  { id:"attack_speed",  name:"Szybkość ataku",   desc:"Przyspiesza autoatak.",               getValue:t=>0.04*t },
  { id:"double_drop",   name:"Podwójny drop",    desc:"Szansa na podwójny drop ze skrzyń.",  getValue:t=>0.03*t },
  { id:"crit",          name:"Krytyk",           desc:"Szansa na cios krytyczny x2.",        getValue:t=>0.02*t },
  { id:"hp_boost",      name:"Wzmocnione serce", desc:"Zwiększa maksymalne HP.",             getValue:t=>0.05*t },
  { id:"coin_gain",     name:"Szczęście kupca",  desc:"Więcej monet.",                       getValue:t=>0.04*t },
  { id:"armor",         name:"Kamienna skóra",   desc:"Redukcja otrzymywanych obrażeń.",     getValue:t=>0.03*t }
];

const ENCHANT_COST_COINS = 1000;
const ENCHANT_COST_LAPIS = 5;

// =======================
// DUNGEON
// =======================

const DUNGEON_DIFFICULTY = {
  easy:      { name:"Easy",      hpMulti:1,      rewardMulti:1 },
  normal:    { name:"Normal",    hpMulti:5,      rewardMulti:2 },
  hard:      { name:"Hard",      hpMulti:25,     rewardMulti:4 },
  insane:    { name:"Insane",    hpMulti:125,    rewardMulti:8 },
  crazy:     { name:"Crazy",     hpMulti:625,    rewardMulti:15 },
  nightmare: { name:"Nightmare", hpMulti:3125,   rewardMulti:30 }
};

const dungeonState = {
  active:false,
  difficulty:"easy",
  room:0,
  maxRooms:50,
  bossEvery:5
};

// =======================
// SKRZYNIE
// =======================

const CHESTS = [
  { id:"earth",  name:"Ziemna Skrzynia",             price:25,   icon:CHEST_ICONS.earth,  room:ROOM_BG.earth,   pool:"earth"  },
  { id:"jungle", name:"Jungle Chest",                price:50,   icon:CHEST_ICONS.jungle, room:ROOM_BG.jungle,  pool:"jungle" },
  { id:"cave",   name:"Cave Chest",                  price:120,  icon:CHEST_ICONS.cave,   room:ROOM_BG.cave,    pool:"cave"   },
  { id:"hell",   name:"Piekielne Pustkowie Chest",   price:250,  icon:CHEST_ICONS.hell,   room:ROOM_BG.hell,    pool:"hell"   },
  { id:"ocean",  name:"Akwen Zapomnianych Chest",    price:400,  icon:CHEST_ICONS.ocean,  room:ROOM_BG.ocean,   pool:"ocean"  },
  { id:"crystal",name:"Kryształowa Skrzynia",        price:650,  icon:CHEST_ICONS.crystal,room:ROOM_BG.crystal, pool:"crystal"},
  { id:"fog",    name:"Mglista Skrzynia",            price:850,  icon:CHEST_ICONS.fog,    room:ROOM_BG.fog,     pool:"fog"    },
  { id:"burn",   name:"Żelazna Pogorzeliska",        price:1200, icon:CHEST_ICONS.burn,   room:ROOM_BG.burn,    pool:"burn"   }
];

// =======================
// GRACZ
// =======================

const player = {
  hp:100,
  maxHp:100,
  mp:40,
  maxMp:40,
  level:1,
  exp:0,
  expToNext:100,
  coins:0,
  materials:{},        // {nazwa: ilość}
  equipment:{ weapon:null },
  enchantments:[],
  autoAttack:false,
  baseDmg:10,
  coinMultiplier:1,
  bossDamageMultiplier:1,
  armorReduction:0
};

let currentMap = MAPS[0];
let currentEnemy = null;
let currentEnemyHp = 0;

// =======================
// HELPERY
// =======================

const $ = id => document.getElementById(id);

function randInt(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function weightedRandom(options, weights){
  const sum=weights.reduce((a,b)=>a+b,0);
  let r=Math.random()*sum;
  for(let i=0;i<options.length;i++){
    if(r<weights[i]) return options[i];
    r-=weights[i];
  }
  return options[options.length-1];
}

function log(msg,color){
  const box = $("combat-log");
  if(!box) return;
  const div=document.createElement("div");
  if(color) div.style.color=color;
  div.textContent=msg;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}

// =======================
// HUD
// =======================

function updateHUD(){
  const hpPerc = Math.max(0,Math.min(100,player.hp/player.maxHp*100));
  const mpPerc = Math.max(0,Math.min(100,(player.mp||0)/(player.maxMp||1)*100));

  const hpInner=$("hp-bar-inner"), mpInner=$("mp-bar-inner");
  const hpText=$("hp-bar-text"),   mpText=$("mp-bar-text");

  if(hpInner) hpInner.style.width=hpPerc+"%";
  if(mpInner) mpInner.style.width=mpPerc+"%";
  if(hpText)  hpText.textContent=`${Math.floor(player.hp)}/${player.maxHp}`;
  if(mpText)  mpText.textContent=`${Math.floor(player.mp)}/${player.maxMp}`;

  const lvl=$("player-level"), coins=$("player-coins");
  if(lvl)   lvl.textContent  = player.level;
  if(coins) coins.textContent= player.coins;
}

// =======================
// MATERIAŁY
// =======================

function addMaterial(name,qty){
  if(!player.materials[name]) player.materials[name]=0;
  player.materials[name]+=qty;
}

// =======================
// SPRZĘT + ENCHANTY
// =======================

function applyEquipmentAndEnchants(){
  let weaponDmg = player.equipment.weapon ? player.equipment.weapon.baseDmg : 5;
  let hpBonus   = 0;
  let dmgMulti  = 1;
  let coinMulti = 1;
  let armorRed  = 0;

  player.enchantments.forEach(e=>{
    if(e.typeId==="strength")    dmgMulti += e.value;
    if(e.typeId==="coin_gain")   coinMulti += e.value;
    if(e.typeId==="hp_boost")    hpBonus += Math.round(100 * e.value);
    if(e.typeId==="armor")       armorRed += e.value;
  });

  player.maxHp = 100 + hpBonus;
  if(player.hp>player.maxHp) player.hp=player.maxHp;
  player.baseDmg = Math.floor(weaponDmg * dmgMulti);
  player.coinMultiplier = coinMulti;
  player.armorReduction = armorRed;

  updateHUD();
}

// =======================
// ENEMY / MAP
// =======================

function updateEnemyHpBar(){
  const bar=$("enemy-hp-inner");
  if(!currentEnemy || !
// =======================
// ENEMY HP BAR
// =======================

function updateEnemyHpBar() {
  const bar = $("enemy-hp-inner");
  if (!currentEnemy || !bar) return;

  const percent = Math.max(
    0,
    Math.min(100, (currentEnemyHp / currentEnemy.maxHp) * 100)
  );
  bar.style.width = percent + "%";
}

// =======================
// SPAWN ENEMY NA MAPIE
// =======================

function spawnEnemyNormal() {
  const map = currentMap || MAPS[0];
  const mob = map.mobs[randInt(0, map.mobs.length - 1)];

  currentEnemy = {
    name: mob.name,
    img: mob.img,
    maxHp: mob.hp
  };
  currentEnemyHp = mob.hp;

  const imgEl = $("enemy-image");
  const bgEl = $("enemy-background");
  const mapName1 = $("map-name");
  const mapName2 = $("current-map-name");

  if (imgEl) imgEl.src = mob.img;
  if (bgEl) bgEl.style.backgroundImage = `url(${map.background})`;
  if (mapName1) mapName1.textContent = map.name;
  if (mapName2) mapName2.textContent = map.name;

  updateEnemyHpBar();
}

// =======================
// OBRAŻENIA + CRIT
// =======================

function calcDamage() {
  let dmg = player.baseDmg || 10;

  // crit z enchantów
  let critChance = 0;
  player.enchantments.forEach(e => {
    if (e.typeId === "crit") critChance += e.value; // np. 0.02–0.20
  });

  let isCrit = false;
  if (Math.random() < critChance) {
    dmg *= 2;
    isCrit = true;
  }

  if (isCrit) {
    log(`💥 CIOS KRYTYCZNY za ${Math.floor(dmg)}!`, "#facc15");
  }

  return Math.floor(dmg);
}

// =======================
// PRZECIWNIK BIJE GRACZA (ARMOR)
// =======================

function enemyHitsPlayer() {
  // bazowe dmg zależne od mapy
  const stage = currentMap ? currentMap.stage : 0;
  let base = 10 + stage * 10;

  const reduction = player.armorReduction || 0; // 0–1
  let dmg = base * (1 - reduction);
  if (dmg < 1) dmg = 1;

  player.hp -= dmg;
  if (player.hp < 0) player.hp = 0;

  log(`Przeciwnik zadał ci ${Math.floor(dmg)} obrażeń.`, "#fecaca");
  updateHUD();

  if (player.hp <= 0) {
    log("💀 Zginąłeś! Tracisz 20% monet i wracasz na pełne HP.", "#fca5a5");
    player.coins = Math.floor(player.coins * 0.8);
    player.hp = player.maxHp;
    updateHUD();
  }
}

// =======================
// ATAK GRACZA (klik w moba / autoattack)
// =======================

function hitEnemy() {
  if (!currentEnemy) return;

  const dmg = calcDamage();
  currentEnemyHp -= dmg;
  if (currentEnemyHp < 0) currentEnemyHp = 0;

  log(`Zadałeś ${dmg} obrażeń (${currentEnemy.name}).`, "#bfdbfe");
  updateEnemyHpBar();

  if (currentEnemyHp <= 0) {
    onEnemyKilled();
  } else {
    enemyHitsPlayer();
  }
}

// =======================
// KILL ENEMY – NORMAL vs DUNGEON
// =======================

function onEnemyKilled() {
  if (dungeonState.active) {
    handleDungeonKill();
  } else {
    handleNormalKill();
  }
}

// NORMALNE MAPY: drop, exp, coin, mats
function handleNormalKill() {
  const map = currentMap || MAPS[0];
  log(`✅ Pokonałeś: ${currentEnemy.name}`, "#bbf7d0");

  // monety
  const baseCoins = 5 * (map.stage + 1);
  const coinsGain = Math.floor(baseCoins * (player.coinMultiplier || 1));
  player.coins += coinsGain;

  // exp
  const expGain = 10 * (map.stage + 1);
  player.exp += expGain;

  while (player.exp >= player.expToNext) {
    player.exp -= player.expToNext;
    player.level++;
    player.expToNext = Math.floor(player.expToNext * 1.35);
    player.maxHp += 20;
    player.hp = player.maxHp;
    log(`⬆ Awans na poziom ${player.level}!`, "#fde68a");
  }

  // drobny drop materiału z ORES mapy
  const poolKey = map.id in ORES ? map.id : "earth";
  const pool = ORES[poolKey];
  if (pool) {
    const ore = pool[randInt(0, pool.length - 1)];
    addMaterial(ore.name, 1);
    log(`📦 Wypadł materiał: ${ore.name} x1`, "#a5b4fc");
  }

  updateHUD();
  spawnEnemyNormal();
}

// =======================
// SKRZYNIE (DOUBLE DROP)
// =======================

function generateChestDrops(poolKey) {
  const pool = ORES[poolKey];
  if (!pool) return [];

  // 1–3 itemy
  const count = randInt(1, 3);
  const drops = [];

  // szansa na double drop z enchantu
  let doubleChance = 0;
  player.enchantments.forEach(e => {
    if (e.typeId === "double_drop") doubleChance += e.value; // 0.03–0.30
  });

  for (let i = 0; i < count; i++) {
    const ore = pool[randInt(0, pool.length - 1)];
    let qty = randInt(ore.min, ore.max);

    if (Math.random() < doubleChance) {
      qty *= 2;
      log(`⚡ Podwójny drop: ${ore.name} x${qty}`, "#38bdf8");
    }

    drops.push({
      name: ore.name,
      img: ore.img,
      qty
    });
  }

  return drops;
}

function openChest(chestId) {
  const chest = CHESTS.find(c => c.id === chestId);
  if (!chest) return;

  if (player.coins < chest.price) {
    log("❌ Za mało monet na skrzynię!", "#fca5a5");
    return;
  }

  player.coins -= chest.price;
  updateHUD();

  const roomEl = $("chest-room-image");
  const dropEl = $("chest-drop-list");

  if (roomEl) {
    roomEl.innerHTML = `<img src="${chest.room}" style="width:100%;height:auto;">`;
  }

  const drops = generateChestDrops(chest.pool);

  if (dropEl) {
    dropEl.innerHTML = "";
    drops.forEach(d => {
      addMaterial(d.name, d.qty);
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.marginBottom = "4px";
      div.innerHTML = `
        <img src="${d.img}" width="32" height="32" style="margin-right:8px;">
        <span>${d.name} x${d.qty}</span>
      `;
      dropEl.appendChild(div);
    });
  }

  log(`🔓 Otworzyłeś: ${chest.name}`, "#bbf7d0");
}

// =======================
// ENCHANT – 1–3, TIER 1–10, BEZ DUPLIKATÓW
// =======================

function renderEnchantPanel() {
  const info = $("enchant-info");
  const box  = $("enchant-current");

  if (info) {
    info.innerHTML = `
      <p>Koszt: <b>${ENCHANT_COST_COINS}</b> monet + <b>${ENCHANT_COST_LAPIS}</b> Lapis.</p>
      <p>Losuje 1–3 <b>różnych</b> enchantów (Tier 1–10, bez duplikatów).</p>
    `;
  }

  if (!box) return;

  if (!player.enchantments.length) {
    box.innerHTML = "<p>Brak aktywnych enchantów.</p>";
    return;
  }

  box.innerHTML = player.enchantments.map(e => `
    <div style="margin-bottom:6px;">
      <b>${e.name}</b> – Tier ${e.tier}<br>
      <span style="font-size:12px;opacity:0.8;">${e.desc}</span>
    </div>
  `).join("");
}

function rollEnchant() {
  const lapisCount = player.materials["Lapis"] || 0;

  if (player.coins < ENCHANT_COST_COINS || lapisCount < ENCHANT_COST_LAPIS) {
    log("❌ Za mało monet albo Lapis na enchant!", "#fca5a5");
    return;
  }

  player.coins -= ENCHANT_COST_COINS;
  player.materials["Lapis"] = lapisCount - ENCHANT_COST_LAPIS;
  updateHUD();

  // ile enchantów? 1–3 (60% / 30% / 10%)
  const count = weightedRandom([1,2,3],[0.6,0.3,0.1]);

  const pool = [...ENCHANT_TYPES];
  const newEnchs = [];

  for (let i=0; i<count && pool.length>0; i++){
    const idx = randInt(0, pool.length-1);
    const type = pool.splice(idx,1)[0];

    const tier = randInt(1,10);
    const value = type.getValue(tier);

    newEnchs.push({
      typeId:type.id,
      name:type.name,
      tier,
      value,
      desc:`${type.desc} (Tier ${tier})`
    });
  }

  // nadpisujemy stare enchanty
  player.enchantments = newEnchs;

  log(`✨ Wylosowano ${newEnchs.length} nowych enchantów.`, "#a5b4fc");
  applyEquipmentAndEnchants();
  renderEnchantPanel();
}

// =======================
// DUNGEON
// =======================

function dungeonHpForRoom(room){
  const base = 1000;
  const growth = 800;
  const stage = currentMap?.stage || 0;
  const diff = DUNGEON_DIFFICULTY[dungeonState.difficulty] || DUNGEON_DIFFICULTY.easy;

  return Math.floor((base + growth*(room-1)) * Math.pow(5,stage) * diff.hpMulti);
}

function spawnDungeonEnemy(){
  const room = dungeonState.room;
  const isBoss = room % dungeonState.bossEvery === 0;
  const map = currentMap || MAPS[0];

  let mob;
  if (isBoss){
    mob = { name:`BOSS pokoju ${room}`, img: map.boss.img };
  } else {
    mob = map.mobs[randInt(0,map.mobs.length-1)];
  }

  const hp = dungeonHpForRoom(room) * (isBoss ? 5 : 1);

  currentEnemy = { name: mob.name, img: mob.img, maxHp: hp };
  currentEnemyHp = hp;

  const imgEl = $("enemy-image");
  const bgEl  = $("enemy-background");
  if (imgEl) imgEl.src = mob.img;
  if (bgEl)  bgEl.style.backgroundImage = `url(${map.background})`;

  updateEnemyHpBar();
}

function handleDungeonKill(){
  const room = dungeonState.room;
  const diff = DUNGEON_DIFFICULTY[dungeonState.difficulty] || DUNGEON_DIFFICULTY.easy;

  log(`🏆 Pokój ${room} Dungeon pokonany!`, "#bbf7d0");

  // nagroda: monety + materiały
  const baseCoins = 50 * Math.ceil(room/5);
  const coinsGain = Math.floor(baseCoins * diff.rewardMulti * (player.coinMultiplier||1));
  player.coins += coinsGain;

  const map = currentMap || MAPS[0];
  const poolKey = map.id in ORES ? map.id : "earth";
  const pool = ORES[poolKey];
  if (pool){
    const ore = pool[randInt(0,pool.length-1)];
    const qty = 1 + Math.floor(room/5);
    addMaterial(ore.name, qty);
    log(`📦 Dungeon loot: ${ore.name} x${qty}`, "#a5b4fc");
  }

  // prosta szansa na relikt z bossa (1%) — tu można podpiąć konkretne
  if (room % dungeonState.bossEvery === 0){
    if (Math.random() < 0.01){
      log("💎 Wypadł relikt z bossa Dungeon! (tu możesz dodać konkretny przedmiot)", "#facc15");
      // tutaj możesz dopisać konkretny RELIC i włożyć go w player.equipment.relic
    } else {
      log("Relikt z bossa Dungeon nie wypadł (1% szansy).", "#f97373");
    }
  }

  updateHUD();

  if (room >= dungeonState.maxRooms){
    log("🎉 Ukończyłeś cały Dungeon! GG.", "#4ade80");
    dungeonState.active = false;
    spawnEnemyNormal();
  } else {
    dungeonState.room++;
    const rEl = $("dungeon-room");
    if (rEl) rEl.textContent = dungeonState.room;
    spawnDungeonEnemy();
  }
}

function startDungeon(){
  dungeonState.active = true;
  dungeonState.room = 1;
  const rEl = $("dungeon-room");
  if (rEl) rEl.textContent = "1";
  log(`🔱 Wchodzisz do Dungeon (${DUNGEON_DIFFICULTY[dungeonState.difficulty].name}).`, "#22c55e");
  spawnDungeonEnemy();
}

// =======================
// AUTOATTACK
// =======================

let autoAttackInterval = null;

function refreshAutoAttackInterval() {
  if (autoAttackInterval) clearInterval(autoAttackInterval);

  // bazowy czas
  let base = 1200;
  let speedFactor = 1;

  player.enchantments.forEach(e=>{
    if (e.typeId === "attack_speed") {
      speedFactor -= e.value; // np. 0.04 * tier
    }
  });

  if (speedFactor < 0.1) speedFactor = 0.1;

  const interval = Math.max(150, base * speedFactor);

  autoAttackInterval = setInterval(()=>{
    if (player.autoAttack) hitEnemy();
  }, interval);
}

// =======================
// EVENTY / INIT
// =======================

document.addEventListener("DOMContentLoaded", () => {
  // klik w moba = atak
  const enemyImg = $("enemy-image");
  if (enemyImg) {
    enemyImg.addEventListener("click", hitEnemy);
  }

  // autoattack checkbox
  const autoChk = $("autoattack-checkbox");
  if (autoChk) {
    autoChk.addEventListener("change", () => {
      player.autoAttack = autoChk.checked;
      log(`Autoatak: ${player.autoAttack ? "ON" : "OFF"}`, "#7dd3fc");
    });
  }

  // przyciski skrzyń (data-chest)
  document.querySelectorAll(".chest-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-chest");
      openChest(id);
    });
  });

  // przycisk enchant
  const enchBtn = $("enchant-roll-btn");
  if (enchBtn) enchBtn.addEventListener("click", rollEnchant);

  // wybór trudności dungeon
  document.querySelectorAll(".difficulty-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const diff = btn.getAttribute("data-diff");
      if (DUNGEON_DIFFICULTY[diff]) {
        dungeonState.difficulty = diff;
        log(`Wybrano trudność Dungeon: ${DUNGEON_DIFFICULTY[diff].name}`, "#f97316");
      }
    });
  });

  // start dungeon
  const startDgBtn = $("start-dungeon-btn");
  if (startDgBtn) startDgBtn.addEventListener("click", startDungeon);

  // start gry
  currentMap = MAPS[0];
  spawnEnemyNormal();
  applyEquipmentAndEnchants();
  renderEnchantPanel();
  updateHUD();
  refreshAutoAttackInterval();
});
