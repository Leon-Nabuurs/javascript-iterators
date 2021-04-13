const kleuren = ['yellow', 'blue', 'red', 'orange'];


// while loopje
i = 0;
while (i < kleuren.length) {
    console.log(kleuren[i]);
    i++;
}

// for loopje
for (i= 0; i < kleuren.length; i++) {
    console.log(kleuren[i]);
};

// foreach loopje
kleuren.forEach(element => console.log(element));

// ANTWOORDEN
/*
1. mijn while loop: 5 regels, mijn for-loop: 3 regels
2. mijn foreach slechts 1 regel
3. de foreach zit het dichtst bij de spreektaal
 */

const objects = {'naam':'klaas', 'eten': 'boter', 'kleur': 'groen', 'maat' : 43};

for (const object in objects) {
    console.log(object);
}

// objects in arrays
Object.entries(objects).forEach(object => {
    console.log(object);
})

