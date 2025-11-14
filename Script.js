/* ============================================================
   MINECRAFT RPG CLICKER – CORE ENGINE (PART 1)
   Fundament gry – moby, mapy, statystyki, walka, auto-attack
   ============================================================ */


/* ============================================
   PLAYER DATA
   ============================================ */
const player = {
    hp: 100,
    maxHp: 100,
    mp: 50,
    maxMp: 50,
    coins: 0,
    level: 1,
    exp: 0,
    expToNext: 100,
    autoAttackEnabled: false,
    autoAttackSpeed: 1500, // co ile ms bije autoattack
    weapon: null, // kosy
    armor: null,
    accessory1: null,
    accessory2: null,
    enchantments: [] // max 3
};


/* ============================================
   LOAD ALL IMAGES (YOUR LINKS)
   ============================================ */
const IMG = {

    // Top Icons
    inventory: "https://i.postimg.cc/V6NnF0WY/image.png",
    talents: "https://i.postimg.cc/cLmhWnT8/image.png",
    map: "https://i.postimg.cc/VkVSXsNP/image.png",
    smith: "https://i.postimg.cc/13mFSY8s/image.png",
    enchant: "https://i.postimg.cc/1tGRfsdC/image.png",
    level: "https://i.postimg.cc/RCpyKjBz/image.png",
    coin: "https://i.postimg.cc/MHg9NJ6n/image.png",

    // Chests
    chestEarth: "https://i.postimg.cc/XJxsDMx4/image.png",
    chestJungle: "https://i.postimg.cc/LXc6g7K5/image.png",
    chestCave: "https://i.postimg.cc/J0rYx7LC/image.png",
    chestHell: "https://i.postimg.cc/NMgxqNPs/image.png",
    chestOcean: "https://i.postimg.cc/3Rc0SnMT/image.png",
    chestBoss: "https://i.postimg.cc/XvZrZ9B6/image.png",
    chestCrystal: "https://i.postimg.cc/sX4td8kB/image.png",
    chestFog: "https://i.postimg.cc/mrYbkdxF/image.png",
    chestBurn: "https://i.postimg.cc/Jh5Gv7zc/image.png",

    // All 7 map backgrounds
    mapBg: {
        earth: "https://i.postimg.cc/7ZtMNvg1/image.png",
        jungle: "https://i.postimg.cc/85g7Dwh3/image.png",
        cave: "https://i.postimg.cc/sg3GGTqS/image.png",
        hell: "https://i.postimg.cc/TYLDXybZ/bbb5e5cc-d2e1-4fda-9278-aac37410ae9a-1920x1080.png",
        ocean: "https://i.postimg.cc/G2P1DxZC/image.png",
        crystal: "https://i.postimg.cc/zBhWQFWt/image.png",
        fog: "https://i.postimg.cc/SNwKTYkD/image.png",
        burn: "https://i.postimg.cc/8CbKXW82/image.png"
    }
};


/* ============================================
   MAP + MOB DEFINITIONS (WITH HP MULTIPLIER)
   ============================================ */

function scaleHP(base, stage) {
    // Map HP grows x5 each biome
    return base * Math.pow(5, stage);
}

const MAPS = [
    {
        name: "Ziemny Biom",
        id: "earth",
        stage: 0,
        mobs: [
            { name: "Ziemny Kostek", img: "https://i.postimg.cc/bNsCKpyn/b475fed7-ec12-45d4-aeea-f1eae5ef1a6d.png", hp: scaleHP(150, 0) },
            { name: "Gliniany Kret", img: "https://i.postimg.cc/ZY8JDWFH/image.png", hp: scaleHP(260, 0) },
            { name: "Strażnik Pagórka", img: "https://i.postimg.cc/SRhkx4q7/image.png", hp: scaleHP(420, 0) }
        ],
        boss: {
            name: "Władca Ziemi",
            img: "https://i.postimg.cc/bNsCKpyn/b475fed7-ec12-45d4-aeea-f1eae5ef1a6d.png",
            hp: scaleHP(2000, 0)
        }
    },

    // Jungle = 5x stronger
    {
        name: "Dżunglowy Biom",
        id: "jungle",
        stage: 1,
        mobs: [
            { name: "Leśny Pieniek", img: "https://i.postimg.cc/wjHyGKsn/image.png", hp: scaleHP(300, 1) },
            { name: "Splątana Liana", img: "https://i.postimg.cc/SQvnk2z4/image.png", hp: scaleHP(550, 1) },
            { name: "Drzewny Duszek", img: "https://i.postimg.cc/63VfFVpf/image.png", hp: scaleHP(900, 1) }
        ],
        boss: {
            name: "Strażnik Korzeni",
            img: "https://i.postimg.cc/MK517KnL/image.png",
            hp: scaleHP(5500, 1)
        }
    },

    // Cave = 25x stronger than earth
    {
        name: "Cave Biom",
        id: "cave",
        stage: 2,
        mobs: [
            { name: "Kamienny Górnik", img: "https://i.postimg.cc/8zfxF35S/image.png", hp: scaleHP(700, 2) },
            { name: "Kryształowy Nietoperz", img: "https://i.postimg.cc/bvDYw3Xb/image.png", hp: scaleHP(1200, 2) },
            { name: "Żywa Ruda", img: "https://i.postimg.cc/yxnv5h8r/image.png", hp: scaleHP(2000, 2) }
        ],
        boss: {
            name: "Strażnik Szybu",
            img: "https://i.postimg.cc/mkqTQ9W3/image.png",
            hp: scaleHP(15000, 2)
        }
    }
];


/* ============================================
   CURRENT MAP & MOB
   ============================================ */
let currentMap = 0;
let currentMob = null;
let currentMobHP = 0;


/* ============================================
   SPAWN MOB
   ============================================ */
function spawnMob() {
    const map = MAPS[currentMap];
    const mob = map.mobs[Math.floor(Math.random() * map.mobs.length)];

    currentMob = mob;
    currentMobHP = mob.hp;

    document.getElementById("enemy-image").src = mob.img;
    document.getElementById("enemy-hp-inner").style.width = "100%";
    document.getElementById("enemy-hp-text").innerText = `${currentMobHP} / ${mob.hp}`;
    document.getElementById("map-name").innerText = map.name;

    // background
    document.getElementById("enemy-background").style.backgroundImage =
        `url(${IMG.mapBg[map.id]})`;
}


/* ============================================
   DEAL DAMAGE (CLICK ATTACK)
   ============================================ */
function attackMob() {
    if (!currentMob) return;

    const dmg = calcDamage();
    currentMobHP -= dmg;

    log(`Zadałeś ${dmg} obrażeń.`);

    if (currentMobHP <= 0) {
        killMob();
    } else {
        updateMobHPBar();
    }
}


/* ============================================
   DAMAGE FORMULA
   ============================================ */
function calcDamage() {
    let base = 10;

    if (player.weapon) base += player.weapon.damage;

    // enchant bonuses (strength, crit, etc. — later part)
    player.enchantments.forEach(e => {
        if (e.type === "strength") base *= 1 + e.value;
        if (e.type === "speed") console.log("");
    });

    return Math.floor(base);
}


/* ============================================
   UPDATE HP BAR
   ============================================ */
function updateMobHPBar() {
    const max = currentMob.hp;
    const percent = Math.max(0, currentMobHP / max * 100);
    document.getElementById("enemy-hp-inner").style.width = percent + "%";
    document.getElementById("enemy-hp-text").innerText =
        `${currentMobHP} / ${max}`;
}


/* ============================================
   MOB KILLED
   ============================================ */
function killMob() {
    log(`Pokonałeś ${currentMob.name}!`);

    player.coins += 1;
    updateHUD();

    spawnMob();
}


/* ============================================
   HUD UPDATE
   ============================================ */
function updateHUD() {
    document.getElementById("coins-value").innerText = player.coins;
}


/* ============================================
   COMBAT LOG
   ============================================ */
function log(msg) {
    const logBox = document.getElementById("combat-log");
    logBox.innerHTML += `<div>${msg}</div>`;
    logBox.scrollTop = logBox.scrollHeight;
}


/* ============================================
   AUTO ATTACK
   ============================================ */
setInterval(() => {
    if (player.autoAttackEnabled) attackMob();
}, player.autoAttackSpeed);


/* ============================================
   CLICK HANDLER
   ============================================ */
document.getElementById("enemy-image").addEventListener("click", attackMob);


/* ============================================
   GAME INIT
   ============================================ */
spawnMob();
updateHUD();
/* ============================================================
   PART 2 — CHESTS, DROP TABLES & ROOMS
   ============================================================ */


/* ============================================
   ROOM BACKGROUNDS (Your Links)
   ============================================ */

const ROOM_BG = {
    boss: "https://i.postimg.cc/3J79gxZz/image.png",
    hell: "https://i.postimg.cc/1tMmztRz/image.png",
    ocean: "https://i.postimg.cc/RV2Mh2md/image.png",
    cave: "https://i.postimg.cc/MH8FgbJy/image.png",
    jungle: "https://i.postimg.cc/RCD31s90/image.png",
    earth: "https://i.postimg.cc/wvSV7h6Z/image.png",
    crystal: "https://i.postimg.cc/vZ1TYLHF/image.png",
    fog: "https://i.postimg.cc/28nm2c6Q/image.png",
    burn: "https://i.postimg.cc/nzLcWv5p/image.png"
};


/* ============================================
   ORES / MATERIALS (By biome)
   ============================================ */

const ORES = {

    earth: [
        { name: "Ziemia", img: "https://i.postimg.cc/fLmcZJ1W/image.png", min: 1, max: 3 },
        { name: "Gleba", img: "https://i.postimg.cc/RhTw62S5/image.png", min: 1, max: 2 },
        { name: "Kamień", img: "https://i.postimg.cc/5tZrnQwv/image.png", min: 1, max: 2 }
    ],

    jungle: [
        { name: "Drewno", img: "https://i.postimg.cc/CMfccK18/image.png", min: 1, max: 3 },
        { name: "Patyki", img: "https://i.postimg.cc/RZGdW6Pd/image.png", min: 1, max: 4 },
        { name: "Liany", img: "https://i.postimg.cc/02kJbtLm/image.png", min: 1, max: 2 }
    ],

    cave: [
        { name: "Diament", img: "https://i.postimg.cc/4dphhjff/image.png", min: 1, max: 1 },
        { name: "Żelazo", img: "https://i.postimg.cc/TPzD1TX4/image.png", min: 1, max: 2 },
        { name: "Złoto", img: "https://i.postimg.cc/BvLFJXRg/image.png", min: 1, max: 2 },
        { name: "Obsydian", img: "https://i.postimg.cc/y8bsDc15/image.png", min: 1, max: 1 },
        { name: "Lapis", img: "https://i.postimg.cc/PfbYS7fP/image.png", min: 1, max: 3 }
    ],

    hell: [
        { name: "Pustkowy Brick", img: "https://i.postimg.cc/bwnk1GNk/image.png", min: 1, max: 2 },
        { name: "Pustkowy Kruszec", img: "https://i.postimg.cc/1tBjPCkR/image.png", min: 1, max: 1 },
        { name: "Kawałek Złota", img: "https://i.postimg.cc/wvNDQ7Vh/image.png", min: 1, max: 3 },
        { name: "Nether Fragment", img: "https://i.postimg.cc/0jxKGZjt/image.png", min: 1, max: 2 },
        { name: "Potępiony Brick", img: "https://i.postimg.cc/3NgCYd4V/image.png", min: 1, max: 1 }
    ],

    ocean: [
        { name: "Morska Latarnia", img: "https://i.postimg.cc/K8VKpm4P/image.png", min: 1, max: 1 },
        { name: "Pryzmaryn", img: "https://i.postimg.cc/m2gtbPHM/image.png", min: 1, max: 3 },
        { name: "Gąbka", img: "https://i.postimg.cc/YC40WT8r/image.png", min: 1, max: 1 },
        { name: "Kawałek Pryzmarynu", img: "https://i.postimg.cc/3wmwLpPq/image.png", min: 1, max: 3 }
    ],

    crystal: [
        { name: "Kryształowe odłamki", img: "https://i.postimg.cc/t4VXWvj0/image.png", min: 1, max: 2 },
        { name: "Ruda Luminitu", img: "https://i.postimg.cc/h4LgDQ0D/image.png", min: 1, max: 1 },
        { name: "Kruszący się Kamień", img: "https://i.postimg.cc/vZ9tkMs6/image.png", min: 1, max: 2 }
    ],

    fog: [
        { name: "Zwiędłe Drzewa", img: "https://i.postimg.cc/cH93r1YX/image.png", min: 1, max: 2 },
        { name: "Szeptające Krzewy", img: "https://i.postimg.cc/sXQWGdcz/image.png", min: 1, max: 2 }
    ],

    burn: [
        { name: "Stopiona Ziemia", img: "https://i.postimg.cc/hPr0BnZZ/image.png", min: 1, max: 1 },
        { name: "Żelazne Kościska", img: "https://i.postimg.cc/VvNk0j1c/image.png", min: 1, max: 2 },
        { name: "Rdzawe Złoże", img: "https://i.postimg.cc/3NhbtBWJ/image.png", min: 1, max: 2 }
    ]
};


/* ============================================
   CHEST DEFINITIONS
   ============================================ */

const CHESTS = [
    {
        id: "earthChest",
        name: "Ziemna Skrzynia",
        price: 25,
        chestImg: IMG.chestEarth,
        dropPool: ORES.earth,
        room: ROOM_BG.earth
    },
    {
        id: "jungleChest",
        name: "Jungle Chest",
        price: 50,
        chestImg: IMG.chestJungle,
        dropPool: ORES.jungle,
        room: ROOM_BG.jungle
    },
    {
        id: "caveChest",
        name: "Cave Chest",
        price: 120,
        chestImg: IMG.chestCave,
        dropPool: ORES.cave,
        room: ROOM_BG.cave
    },
    {
        id: "hellChest",
        name: "Piekielne Pustkowie Chest",
        price: 250,
        chestImg: IMG.chestHell,
        dropPool: ORES.hell,
        room: ROOM_BG.hell
    },
    {
        id: "oceanChest",
        name: "Akwen Zapomnianych Chest",
        price: 400,
        chestImg: IMG.chestOcean,
        dropPool: ORES.ocean,
        room: ROOM_BG.ocean
    },
    {
        id: "crystalChest",
        name: "Kryształowa Skrzynia",
        price: 600,
        chestImg: IMG.chestCrystal,
        dropPool: ORES.crystal,
        room: ROOM_BG.crystal
    },
    {
        id: "fogChest",
        name: "Mglista Skrzynia",
        price: 800,
        chestImg: IMG.chestFog,
        dropPool: ORES.fog,
        room: ROOM_BG.fog
    },
    {
        id: "burnChest",
        name: "Żelazna Pogorzeliska",
        price: 1000,
        chestImg: IMG.chestBurn,
        dropPool: ORES.burn,
        room: ROOM_BG.burn
    }
];


/* ============================================
   OPEN CHEST FUNCTION
   ============================================ */

function openChest(chestId) {
    const chest = CHESTS.find(c => c.id === chestId);
    if (!chest) return;

    if (player.coins < chest.price) {
        log("Za mało monet!");
        return;
    }

    player.coins -= chest.price;
    updateHUD();

    // Set room preview
    document.getElementById("chest-room-image").innerHTML =
        `<img src="${chest.room}">`;

    // Generate drops
    const drops = generateChestDrops(chest.dropPool);

    // Display drops
    const list = document.getElementById("chest-drop-list");
    list.innerHTML = "";

    drops.forEach(drop => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div style="margin-bottom:8px; display:flex; align-items:center;">
                <img src="${drop.img}" width="40" height="40" style="margin-right:10px;">
                <span>${drop.name} x${drop.qty}</span>
            </div>
        `;
        list.appendChild(div);
    });

    log(`Otworzyłeś skrzynię: ${chest.name}!`);
}


/* ============================================
   CHEST DROP GENERATOR
   ============================================ */

function generateChestDrops(pool) {
    let items = [];

    // 1–3 losowe nagrody
    const count = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < count; i++) {
        const ore = pool[Math.floor(Math.random() * pool.length)];
        const qty = Math.floor(Math.random() * (ore.max - ore.min + 1)) + ore.min;

        items.push({
            name: ore.name,
            img: ore.img,
            qty: qty
        });
    }

    return items;
}


/* ============================================
   CHEST BUTTON EVENT BINDING
   ============================================ */

document.querySelectorAll(".chest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const chestId = btn.getAttribute("data-id");
        openChest(chestId);
    });
});
/* ============================================================
   PART 3 — CRAFTING, EQUIPMENT, RELICS, STATS
   ============================================================ */


/* ============================================
   EQUIPMENT STRUCTURE
   ============================================ */

player.equipment = {
    weapon: null,
    armor: null,
    accessory1: null,
    accessory2: null,
    relic: null
};


/* ============================================
   BASE WEAPON (SCYTHE) DEFINITIONS
   ============================================ */

const WEAPONS = [

    {
        id: "scythe_earth",
        name: "Kosa Ziemna",
        img: "https://i.postimg.cc/28Chjzh2/image.png",
        baseDmg: 25,
        materials: [
            { id: "Ziemia", qty: 20 },
            { id: "Gleba", qty: 10 },
            { id: "Kamień", qty: 15 }
        ]
    },

    {
        id: "scythe_jungle",
        name: "Kosa Dżungli",
        img: "https://i.postimg.cc/LXc6g7K5/image.png",
        baseDmg: 80,
        materials: [
            { id: "Drewno", qty: 40 },
            { id: "Patyki", qty: 20 },
            { id: "Liany", qty: 15 }
        ]
    },

    {
        id: "scythe_cave",
        name: "Kosa Jaskini",
        img: "https://i.postimg.cc/63NTH0hZ/image.png",
        baseDmg: 240,
        materials: [
            { id: "Diament", qty: 5 },
            { id: "Żelazo", qty: 20 },
            { id: "Złoto", qty: 15 },
            { id: "Obsydian", qty: 10 },
            { id: "Lapis", qty: 25 }
        ]
    },

    {
        id: "scythe_hell",
        name: "Kosa Piekielna",
        img: "https://i.postimg.cc/cCCWTgPt/image.png",
        baseDmg: 1500,
        materials: [
            { id: "Pustkowy Brick", qty: 40 },
            { id: "Pustkowy Kruszec", qty: 20 },
            { id: "Nether Fragment", qty: 25 },
            { id: "Potępiony Brick", qty: 10 }
        ]
    },

    {
        id: "scythe_ocean",
        name: "Kosa Akwenu",
        img: "https://i.postimg.cc/nrj5Cv69/image.png",
        baseDmg: 7000,
        materials: [
            { id: "Pryzmaryn", qty: 50 },
            { id: "Kawałek Pryzmarynu", qty: 30 },
            { id: "Gąbka", qty: 10 }
        ]
    },

    {
        id: "scythe_crystal",
        name: "Kosa Kryształu",
        img: "https://i.postimg.cc/jdhqR3r9/image.png",
        baseDmg: 40000,
        materials: [
            { id: "Kryształowe odłamki", qty: 40 },
            { id: "Ruda Luminitu", qty: 10 }
        ]
    },

    {
        id: "scythe_fog",
        name: "Kosa Mglista",
        img: "https://i.postimg.cc/zXDZFJsG/image.png",
        baseDmg: 210000,
        materials: [
            { id: "Zwiędłe Drzewa", qty: 60 },
            { id: "Szeptające Krzewy", qty: 30 }
        ]
    },

    {
        id: "scythe_burn",
        name: "Kosa Pogorzeliska",
        img: "https://i.postimg.cc/vmr3KnnW/image.png",
        baseDmg: 950000,
        materials: [
            { id: "Stopiona Ziemia", qty: 25 },
            { id: "Żelazne Kościska", qty: 40 },
            { id: "Rdzawe Złoże", qty: 30 }
        ]
    }
];


/* ============================================
   ARMOR / ACCESSORIES
   ============================================ */

const ACCESSORIES = [
    {
        id: "deep_pearl",
        name: "Perła Głębin",
        img: "https://i.postimg.cc/rFW0Fykt/image.png",
        bonusHP: 100,
        materials: [
            { id: "Pryzmaryn", qty: 10 },
            { id: "Gąbka", qty: 5 }
        ]
    },

    {
        id: "root_core",
        name: "Rdzeń Korzeni",
        img: "https://i.postimg.cc/FK1hzGLB/image.png",
        bonusHP: 150,
        materials: [
            { id: "Drewno", qty: 20 },
            { id: "Liany", qty: 10 }
        ]
    },

    {
        id: "guardian_helmet",
        name: "Hełm Strażnika",
        img: "https://i.postimg.cc/5tZrnQwv/image.png",
        bonusHP: 400,
        materials: [
            { id: "Kamień", qty: 40 },
            { id: "Żelazo", qty: 20 }
        ]
    },

    {
        id: "lighthouse_bless",
        name: "Błogosławieństwo Latarnika",
        img: "https://i.postimg.cc/vZcK6K0f/image.png",
        bonusHP: 250,
        materials: [
            { id: "Morska Latarnia", qty: 5 },
            { id: "Pryzmaryn", qty: 15 }
        ]
    }
];


/* ============================================
   RELICS (1% DROP)
   ============================================ */

const RELICS = [
    {
        id: "relic_crystal",
        name: "Serce Luminitu",
        img: "https://i.postimg.cc/nr65vJ75/image.png",
        bonusDmg: 0.20, // +20% dmg
        source: "Kryształowy Tytan"
    },
    {
        id: "relic_fog",
        name: "Maska Zagubionego Rycerza",
        img: "https://i.postimg.cc/m23fQPXQ/image.png",
        bonusHP: 5000,
        source: "ARCYSZEPT"
    },
    {
        id: "relic_burn",
        name: "Zardzewiałe Rękawice Maszyny",
        img: "https://i.postimg.cc/fbc9sjBy/image.png",
        bonusDmg: 0.35, // +35%
        source: "ARDENTUS"
    }
];


/* ============================================
   PLAYER MATERIAL STORAGE
   ============================================ */

player.materials = {}; // { "Ziemia": 35, "Drewno": 12 ... }


/* ============================================
   FUNCTION: ADD MATERIAL
   ============================================ */

function addMaterial(name, qty) {
    if (!player.materials[name]) player.materials[name] = 0;
    player.materials[name] += qty;
}


/* ============================================
   CRAFT CHECK
   ============================================ */

function canCraftRecipe(recipe) {
    return recipe.materials.every(mat => {
        return player.materials[mat.id] >= mat.qty;
    });
}


/* ============================================
   CRAFT EXECUTION
   ============================================ */

function craftItem(item) {

    if (!canCraftRecipe(item)) {
        log("❌ Za mało materiałów!", "red");
        return false;
    }

    // Remove mats
    item.materials.forEach(mat => {
        player.materials[mat.id] -= mat.qty;
    });

    log(`✔ Stworzono: ${item.name}`, "lightgreen");
    return true;
}


/* ============================================
   EQUIP ITEM
   ============================================ */

function equipItem(item, type) {

    player.equipment[type] = item;

    recalcStats();

    log(`Wyposażono: ${item.name}`);
}


/* ============================================
   STAT RECALC
   ============================================ */

function recalcStats() {

    let weaponDmg = player.equipment.weapon ? player.equipment.weapon.baseDmg : 1;
    let hpBonus = 0;
    let dmgMultiplier = 1;

    if (player.equipment.armor?.bonusHP) hpBonus += player.equipment.armor.bonusHP;
    if (player.equipment.accessory1?.bonusHP) hpBonus += player.equipment.accessory1.bonusHP;
    if (player.equipment.accessory2?.bonusHP) hpBonus += player.equipment.accessory2.bonusHP;

    if (player.equipment.relic?.bonusHP) hpBonus += player.equipment.relic.bonusHP;
    if (player.equipment.relic?.bonusDmg) dmgMultiplier += player.equipment.relic.bonusDmg;

    player.maxHP = 100 + hpBonus;
    player.hp = Math.min(player.hp, player.maxHP);

    player.baseDmg = Math.floor(weaponDmg * dmgMultiplier);

    updateHUD();
}


/* ============================================
   RENDER CRAFTING MENU
   ============================================ */

function renderCrafting() {

    const body = document.getElementById("craft-body");
    body.innerHTML = "";

    WEAPONS.forEach(w => {
        const div = document.createElement("div");
        div.className = "craft-item";

        let canCraft = canCraftRecipe(w);

        div.innerHTML = `
            <img src="${w.img}" class="craft-icon">
            <div class="craft-info">
                <div class="craft-name">${w.name}</div>
                <div class="craft-mats">
                    ${w.materials.map(m => `
                        <div>${m.id}: ${player.materials[m.id] || 0}/${m.qty}</div>
                    `).join("")}
                </div>
            </div>
            <button class="craft-btn" ${canCraft ? "" : "disabled"} data-id="${w.id}">
               CRAFT
            </button>
        `;

        body.appendChild(div);
    });

    document.querySelectorAll(".craft-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const item = WEAPONS.find(w => w.id === id);
            if (craftItem(item)) {
                equipItem(item, "weapon");
                renderCrafting();
            }
        });
    });

}
/* ============================================================
   PART 4 — ENCHANTY (1–3 SZT., DO 10 TIERÓW, BEZ DUPLIKATÓW)
   + POPRAWKI HUD / AUTOATTACK POD NOWY INDEX.HTML
   ============================================================ */


/* ============================================
   POPRAWKA HUD POD NAZWY ID Z INDEX.HTML
   ============================================ */

function updateHUD() {
    // HP / MP
    const hpPercent = Math.max(0, Math.min(100, (player.hp / player.maxHP) * 100));
    const mpPercent = Math.max(0, Math.min(100, (player.mp / player.maxMp) * 100 || 0));

    const hpBarInner = document.getElementById("hp-bar-inner");
    const hpBarText  = document.getElementById("hp-bar-text");
    const mpBarInner = document.getElementById("mp-bar-inner");
    const mpBarText  = document.getElementById("mp-bar-text");

    if (hpBarInner) hpBarInner.style.width = hpPercent + "%";
    if (hpBarText)  hpBarText.textContent  = `${Math.floor(player.hp)} / ${player.maxHP}`;

    if (mpBarInner) mpBarInner.style.width = mpPercent + "%";
    if (mpBarText)  mpBarText.textContent  = `${Math.floor(player.mp || 0)} / ${player.maxMp || 0}`;

    // LEVEL / COINS
    const lvlEl   = document.getElementById("player-level");
    const coinEl  = document.getElementById("player-coins");

    if (lvlEl)  lvlEl.textContent  = player.level;
    if (coinEl) coinEl.textContent = player.coins;
}

/* Nadpisujemy log, żeby wspierał kolor opcjonalnie */
function log(msg, color) {
    const logBox = document.getElementById("combat-log");
    if (!logBox) return;
    const div = document.createElement("div");
    if (color) div.style.color = color;
    div.textContent = msg;
    logBox.appendChild(div);
    logBox.scrollTop = logBox.scrollHeight;
}


/* ============================================
   AUTOATTACK – PODŁĄCZENIE POD CHECKBOX
   ============================================ */

const autoChk = document.getElementById("autoattack-checkbox");
if (autoChk) {
    autoChk.addEventListener("change", () => {
        player.autoAttackEnabled = autoChk.checked;
        log(`Auto-Atak: ${player.autoAttackEnabled ? "Włączony" : "Wyłączony"}`, "#7dd3fc");
    });
}


/* ============================================
   ENCHANT DEFINICJE (TYPY + TIER 1–10)
   ============================================ */

const ENCHANT_TYPES = [
    {
        id: "strength",
        name: "Siła",
        descBase: "Zwiększa obrażenia.",
        // value[tier] – mnożnik dmg (np. 0.03 = +3%)
        getValue: tier => 0.03 * tier
    },
    {
        id: "attack_speed",
        name: "Szybkość Ataku",
        descBase: "Przyspiesza auto-atak.",
        // value[tier] – skrócenie czasu auto-ataku (np. 0.04 = -4% czasu)
        getValue: tier => 0.04 * tier
    },
    {
        id: "double_drop",
        name: "Podwójny Drop",
        descBase: "Szansa na podwójny drop ze skrzyń.",
        getValue: tier => 0.03 * tier  // 3%–30%
    },
    {
        id: "crit",
        name: "Krytyk",
        descBase: "Szansa na cios krytyczny x2.",
        getValue: tier => 0.02 * tier // 2%–20%
    },
    {
        id: "boss_damage",
        name: "Niszczyciel Bossów",
        descBase: "Zwiększone obrażenia przeciw bossom.",
        getValue: tier => 0.04 * tier // 4%–40%
    },
    {
        id: "hp_boost",
        name: "Wzmocnione Serce",
        descBase: "Zwiększa maksymalne HP.",
        getValue: tier => 0.05 * tier // 5%–50%
    },
    {
        id: "coin_gain",
        name: "Szczęście Kupca",
        descBase: "Więcej monet z mobów i skrzyń.",
        getValue: tier => 0.04 * tier // 4%–40%
    },
    {
        id: "mp_regen",
        name: "Regeneracja Many",
        descBase: "Szybsza regeneracja MP.",
        getValue: tier => 0.05 * tier
    },
    {
        id: "armor",
        name: "Kamienna Skóra",
        descBase: "Redukcja obrażeń otrzymywanych.",
        getValue: tier => 0.03 * tier
    }
];

// Przechowujemy w player.enchantments maksymalnie 3 różne typy
player.enchantments = player.enchantments || [];


/* ============================================
   HELPER: LOSOWY Z PRZEDZIAŁU LICZB CAŁKOWITYCH
   ============================================ */

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Weighted random: np. [1,2,3], [0.6,0.3,0.1] */
function weightedRandom(options, weights) {
    const sum = weights.reduce((a,b)=>a+b,0);
    const r = Math.random() * sum;
    let acc = 0;
    for (let i = 0; i < options.length; i++) {
        acc += weights[i];
        if (r <= acc) return options[i];
    }
    return options[options.length - 1];
}


/* ============================================
   ROLL ENCHANT – KOSZT + LOSOWANIE 1–3
   ============================================ */

// koszt: X monet + Y Lapisów
const ENCHANT_COST_COINS = 1000;
const ENCHANT_COST_LAPIS = 5;

function rollEnchant() {

    // Sprawdzamy zasoby
    const lapisCount = player.materials["Lapis"] || 0;
    if (player.coins < ENCHANT_COST_COINS || lapisCount < ENCHANT_COST_LAPIS) {
        log("❌ Za mało monet albo lapisu na enchant!", "#fca5a5");
        return;
    }

    // Płacimy
    player.coins -= ENCHANT_COST_COINS;
    player.materials["Lapis"] = lapisCount - ENCHANT_COST_LAPIS;
    updateHUD();

    // Ile enchantów w tym losowaniu?
    // 1 – 60%, 2 – 30%, 3 – 10%
    const count = weightedRandom([1, 2, 3], [0.6, 0.3, 0.1]);

    // Robimy kopię typów, żeby nie było duplikatów
    const pool = [...ENCHANT_TYPES];
    const newEnchants = [];

    for (let i = 0; i < count && pool.length > 0; i++) {
        const idx = randInt(0, pool.length - 1);
        const type = pool.splice(idx, 1)[0]; // wycinamy z puli

        const tier = randInt(1, 10);
        const val  = type.getValue(tier);

        const ench = {
            typeId: type.id,
            name:  type.name,
            tier,
            value: val,
            desc: `${type.descBase} (Tier ${tier})`
        };

        newEnchants.push(ench);
    }

    // Nowy zestaw *zastępuje* stary (tak jak chciałeś – jak masz pecha, możesz mieć 1)
    player.enchantments = newEnchants;

    log(`✨ Przelosowano enchanty (${newEnchants.length} szt.)`, "#a5b4fc");

    renderEnchantPanel();
    recalcStatsWithEnchants();
}


/* ============================================
   WIĄZANIE PRZYCISKU ENCHANT
   ============================================ */

const enchBtn = document.getElementById("enchant-roll-btn");
if (enchBtn) {
    enchBtn.addEventListener("click", rollEnchant);
}


/* ============================================
   RENDER ENCHANT PANELU
   ============================================ */

function renderEnchantPanel() {
    const box = document.getElementById("enchant-current");
    const info = document.getElementById("enchant-info");
    if (!box) return;

    if (info) {
        info.innerHTML = `
        <p>Koszt: <b>${ENCHANT_COST_COINS}</b> monet + <b>${ENCHANT_COST_LAPIS}</b> Lapis.</p>
        <p>Losuje <b>1–3 różnych enchantów</b> (max 10 tierów każdy, bez duplikatów typów).</p>`;
    }

    if (player.enchantments.length === 0) {
        box.innerHTML = "<p>Brak aktywnych enchantów.</p>";
        return;
    }

    box.innerHTML = player.enchantments.map(e => {
        return `
        <div class="enchant-entry">
            <div><b>${e.name}</b> – Tier ${e.tier}</div>
            <div style="font-size:13px;opacity:0.8;">${e.desc}</div>
        </div>
        `;
    }).join("");
}


/* ============================================
   ZASTOSOWANIE ENCHANTÓW W STATYSTYKACH
   ============================================ */

function recalcStatsWithEnchants() {
    // Najpierw zwykłe staty z eq
    recalcStats(); // z PART 3

    // Następnie modyfikacje z enchantów
    let dmgMulti = 1;
    let hpMulti  = 1;
    let coinMulti = 1;
    let bossDmgMulti = 1;
    let armorReduction = 0;
    let autoSpeedFactor = 1;

    player.enchantments.forEach(e => {
        switch (e.typeId) {
            case "strength":
                dmgMulti += e.value;
                break;
            case "hp_boost":
                hpMulti += e.value;
                break;
            case "coin_gain":
                coinMulti += e.value;
                break;
            case "boss_damage":
                bossDmgMulti += e.value;
                break;
            case "armor":
                armorReduction += e.value;
                break;
            case "attack_speed":
                autoSpeedFactor -= e.value; // skraca czas
                break;
            // double_drop, crit, mp_regen obsłużymy w konkretnych funkcjach (drop/atak)
        }
    });

    // Zaktualizuj finalne staty
    player.maxHP = Math.floor(player.maxHP * hpMulti);
    if (player.hp > player.maxHP) player.hp = player.maxHP;

    player.baseDmg = Math.floor(player.baseDmg * dmgMulti);
    player.coinMultiplier = coinMulti;
    player.bossDamageMultiplier = bossDmgMulti;
    player.armorReduction = armorReduction;

    // Autoattack speed
    const minInterval = 200; // hard cap
    player.autoAttackSpeed = Math.max(minInterval, 1500 * autoSpeedFactor);

    // Jeśli mamy już interval z PART 1, warto go przepiąć:
    if (window.__autoAttackInterval) {
        clearInterval(window.__autoAttackInterval);
    }
    window.__autoAttackInterval = setInterval(() => {
        if (player.autoAttackEnabled) attackMob();
    }, player.autoAttackSpeed);

    updateHUD();
}

/* Od razu na start wyrenderuj panel (brak enchantów = informacja) */
renderEnchantPanel();
recalcStatsWithEnchants();
/* ============================================================
   PART 5 — DUNGEON + CRIT + DOUBLE DROP + ARMOR + FIX MOB HP
   ============================================================ */


/* ============================================
   POPRAWKA HP Moba (bez enemy-hp-text w HTML)
   ============================================ */

function updateMobHPBar() {
    if (!currentMob) return;
    const max = currentMob.hp;
    const percent = Math.max(0, Math.min(100, currentMobHP / max * 100));
    const bar = document.getElementById("enemy-hp-inner");
    if (bar) bar.style.width = percent + "%";
}

/* nadpisujemy spawnMob żeby czyścił HP poprawnie */
function spawnMob() {
    const map = MAPS[currentMap];
    const mob = map.mobs[Math.floor(Math.random() * map.mobs.length)];

    currentMob = { ...mob }; // kopia
    currentMobHP = mob.hp;

    const enemyImg = document.getElementById("enemy-image");
    const mapName  = document.getElementById("current-map-name");
    const bg       = document.getElementById("enemy-background");

    if (enemyImg) enemyImg.src = mob.img;
    if (mapName)  mapName.textContent = map.name;
    if (bg)       bg.style.backgroundImage = `url(${IMG.mapBg[map.id]})`;

    updateMobHPBar();
}


/* ============================================
   PRZECIWNIK BIJE GRACZA (ARMOR REDUCTION)
   ============================================ */

function enemyHitsPlayer(baseDmg) {
    // redukcja z enchantu armor
    const reduction = player.armorReduction || 0; // 0–1
    let dmg = baseDmg * (1 - reduction);
    if (dmg < 1) dmg = 1;

    player.hp -= dmg;
    if (player.hp < 0) player.hp = 0;

    log(`Przeciwnik zadał ci ${Math.floor(dmg)} obrażeń.`, "#fecaca");

    if (player.hp <= 0) {
        player.hp = 1; // żeby nie było soft-locka
        log("💀 Zginąłeś! (reset HP, minus trochę monet)", "#fca5a5");
        player.coins = Math.floor(player.coins * 0.8);
        player.hp = player.maxHP;
    }

    updateHUD();
}


/* ============================================
   NADPISANIE DAMAGE – CRIT + ENCHANTY
   ============================================ */

function calcDamage() {
    // bazowo z recalcStatsWithEnchants -> player.baseDmg
    let base = player.baseDmg || 10;

    // crit
    let critChance = 0;
    player.enchantments.forEach(e => {
        if (e.typeId === "crit") critChance += e.value; // np 0.02–0.2
    });

    let isCrit = false;
    if (Math.random() < critChance) {
        base *= 2;
        isCrit = true;
    }

    if (isCrit) {
        log(`💥 CIOS KRYTYCZNY za ${Math.floor(base)}!`, "#facc15");
    }

    return Math.floor(base);
}


/* ============================================
   NADPISANIE ATAKU (kliknięcie w moba)
   ============================================ */

function attackMob() {
    if (!currentMob) return;

    const dmg = calcDamage();
    currentMobHP -= dmg;
    if (currentMobHP < 0) currentMobHP = 0;

    log(`Zadałeś ${dmg} obrażeń (${currentMob.name}).`, "#bfdbfe");
    updateMobHPBar();

    if (currentMobHP <= 0) {
        killMob();
    } else {
        // wróg oddaje
        enemyHitsPlayer(10 + (MAPS[currentMap].stage + 1) * 5);
    }
}


/* ============================================
   NADPISANIE KILLMOB – COINY + EXP + DROP MATERIALI
   ============================================ */

function killMob() {
    if (!currentMob) return;
    const map = MAPS[currentMap];

    log(`✅ Pokonałeś: ${currentMob.name}`, "#bbf7d0");

    // podstawowe monety + mnożnik z enchantu Coin
    let coinBase = 5 * (map.stage + 1);
    let coinMulti = player.coinMultiplier || 1;
    const coinsGain = Math.floor(coinBase * coinMulti);

    player.coins += coinsGain;

    // prosty EXP
    const expGain = 10 * (map.stage + 1);
    player.exp += expGain;

    // level up
    while (player.exp >= player.expToNext) {
        player.exp -= player.expToNext;
        player.level++;
        player.expToNext = Math.floor(player.expToNext * 1.35);
        player.maxHP += 20;
        player.hp = player.maxHP;
        log(`⬆ Poziom ${player.level}!`, "#fde68a");
    }

    // prosty drop materiału (1 ruda z puli mapy)
    const poolName = map.id === "earth" ? "earth"
                    : map.id === "jungle" ? "jungle"
                    : map.id === "cave"   ? "cave"
                    : map.id === "hell"   ? "hell"
                    : map.id === "ocean"  ? "ocean"
                    : map.id === "crystal"? "crystal"
                    : map.id === "fog"    ? "fog"
                    : "burn";

    const pool = ORES[poolName];
    if (pool) {
        const ore = pool[Math.floor(Math.random() * pool.length)];
        addMaterial(ore.name, 1);
        log(`📦 Wypadł materiał: ${ore.name} x1`, "#a5b4fc");
    }

    updateHUD();
    spawnMob();
}


/* ============================================
   DOUBLE DROP – NADPISANIE generateChestDrops
   ============================================ */

// zapamiętaj starą funkcję jeśli istnieje
const _old_generateChestDrops = typeof generateChestDrops === "function"
    ? generateChestDrops
    : null;

function generateChestDrops(pool) {
    // bazowy drop
    let items = [];
    const count = Math.floor(Math.random() * 3) + 1;

    // szansa na double drop z enchantów
    let doubleChance = 0;
    player.enchantments.forEach(e => {
        if (e.typeId === "double_drop") doubleChance += e.value; // np 0.03–0.30
    });

    for (let i = 0; i < count; i++) {
        const ore = pool[Math.floor(Math.random() * pool.length)];
        const qtyBase = Math.floor(Math.random() * (ore.max - ore.min + 1)) + ore.min;

        let qty = qtyBase;
        if (Math.random() < doubleChance) {
            qty *= 2;
            log(`⚡ Podwójny drop: ${ore.name} x${qty}`, "#38bdf8");
        }

        items.push({
            name: ore.name,
            img: ore.img,
            qty
        });
    }

    return items;
}


/* ============================================================
   DUNGEON SYSTEM
   ============================================================ */

const DUNGEON_DIFFICULTY = {
    easy:      { name: "Easy",      hpMulti: 1,      rewardMulti: 1 },
    normal:    { name: "Normal",    hpMulti: 5,      rewardMulti: 2 },
    hard:      { name: "Hard",      hpMulti: 25,     rewardMulti: 4 },
    insane:    { name: "Insane",    hpMulti: 125,    rewardMulti: 8 },
    crazy:     { name: "Crazy",     hpMulti: 625,    rewardMulti: 15 },
    nightmare: { name: "Nightmare", hpMulti: 3125,   rewardMulti: 30 }
};

const dungeonState = {
    active: false,
    difficulty: "easy",
    room: 0,
    maxRooms: 50,
    bossEvery: 5,
    enemyHP: 0,
    enemyMaxHP: 0
};

function updateDungeonUI() {
    const roomEl = document.getElementById("dungeon-room");
    if (roomEl) roomEl.textContent = dungeonState.room.toString();
}

/* Wybór trudności */
document.querySelectorAll(".difficulty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const diff = btn.getAttribute("data-diff");
        if (!DUNGEON_DIFFICULTY[diff]) return;
        dungeonState.difficulty = diff;
        log(`Wybrano trudność Dungeon: ${DUNGEON_DIFFICULTY[diff].name}`, "#f97316");
    });
});

/* Start Dungeon */
const startDungeonBtn = document.getElementById("start-dungeon-btn");
if (startDungeonBtn) {
    startDungeonBtn.addEventListener("click", () => {
        startDungeon();
    });
}

function startDungeon() {
    dungeonState.active = true;
    dungeonState.room = 1;
    log(`🔱 Wchodzisz do Dungeon (${DUNGEON_DIFFICULTY[dungeonState.difficulty].name})`, "#22c55e");
    spawnDungeonEnemy();
    updateDungeonUI();
}

/* HP w Dungeon:
   - bazowe HP rośnie z numerem pokoju (additive)
   - mnożone przez map.stage oraz difficulty.hpMulti
*/
function computeDungeonHP(roomNumber) {
    const base = 1000; // start
    const growth = 850; // ile przybywa per room
    const mapStage = MAPS[currentMap]?.stage || 0;
    const diffMulti = DUNGEON_DIFFICULTY[dungeonState.difficulty].hpMulti;

    // hp = (base + growth * (room-1)) * 5^stage * diffMulti
    const hp = (base + growth * (roomNumber - 1)) * Math.pow(5, mapStage) * diffMulti;
    return Math.floor(hp);
}

function spawnDungeonEnemy() {
    const room = dungeonState.room;
    const isBoss = room % dungeonState.bossEvery === 0;

    const map = MAPS[currentMap];
    let mobData;

    if (isBoss) {
        mobData = {
            name: `BOSS pokoju ${room}`,
            img: map.boss.img
        };
    } else {
        mobData = map.mobs[Math.floor(Math.random() * map.mobs.length)];
    }

    currentMob = { name: mobData.name, img: mobData.img };
    dungeonState.enemyMaxHP = computeDungeonHP(room) * (isBoss ? 5 : 1);
    dungeonState.enemyHP = dungeonState.enemyMaxHP;

    currentMob.hp = dungeonState.enemyMaxHP; // dla updateMobHPBar
    currentMobHP = dungeonState.enemyHP;

    const enemyImg = document.getElementById("enemy-image");
    if (enemyImg) enemyImg.src = mobData.img;

    const bg = document.getElementById("enemy-background");
    if (bg) bg.style.backgroundImage = `url(${IMG.mapBg[map.id]})`;

    updateMobHPBar();
}

/* Nadpisujemy killMob tak, żeby obsługiwał Dungeon, ale NIE psuł normalnych map */

const _oldKillMob = killMob; // zapamiętaj poprzednią wersję

function killMob() {
    if (!dungeonState.active) {
        // normalna mapa -> stary kill
        _oldKillMob();
        return;
    }

    const room = dungeonState.room;
    const isBoss = room % dungeonState.bossEvery === 0;
    const diffConf = DUNGEON_DIFFICULTY[dungeonState.difficulty];

    log(`🏆 Pokój ${room} Dungeon pokonany!`, "#bbf7d0");

    // nagroda: monety + materiały
    const baseCoins = 50 * (room / dungeonState.bossEvery);
    const coinsGain = Math.floor(baseCoins * diffConf.rewardMulti * (player.coinMultiplier || 1));
    player.coins += coinsGain;

    // trochę materiałów z aktualnej mapy
    const map = MAPS[currentMap];
    const poolName = map.id === "earth" ? "earth"
                    : map.id === "jungle" ? "jungle"
                    : map.id === "cave"   ? "cave"
                    : map.id === "hell"   ? "hell"
                    : map.id === "ocean"  ? "ocean"
                    : map.id === "crystal"? "crystal"
                    : map.id === "fog"    ? "fog"
                    : "burn";

    const pool = ORES[poolName];
    if (pool) {
        const ore = pool[Math.floor(Math.random() * pool.length)];
        const qty = 1 + Math.floor(room / 5);
        addMaterial(ore.name, qty);
        log(`📦 Dungeon loot: ${ore.name} x${qty}`, "#a5b4fc");
    }

    // szansa na relikt z bossów w dungeon
    if (isBoss) {
        const relicRoll = Math.random();
        if (relicRoll < 0.01) {
            // losowy relikt
            const rel = RELICS[Math.floor(Math.random() * RELICS.length)];
            player.equipment.relic = rel;
            log(`💎 Znalazłeś RELIKT w Dungeon: ${rel.name}`, "#facc15");
            recalcStatsWithEnchants();
        } else {
            log("Relikt z bossa Dungeon NIE wypadł (1% szansy).", "#f97373");
        }
    }

    updateHUD();

    // kolejny pokój albo koniec
    if (room >= dungeonState.maxRooms) {
        log("🎉 Ukończyłeś cały Dungeon! GG.", "#4ade80");
        dungeonState.active = false;
        spawnMob(); // wróć do zwykłej mapy
    } else {
        dungeonState.room++;
        updateDungeonUI();
        spawnDungeonEnemy();
    }
}
