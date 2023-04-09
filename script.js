const charSheet = document.getElementById("sheet");
const submit = document.getElementById('submit')

const id = Date.now().toString();
const charName = document.getElementById("name");
//Stats
const str = document.getElementById("str");
const cha = document.getElementById("cha");
const dex = document.getElementById("dex");
const con = document.getElementById("con");
const wis = document.getElementById("wis");
const int = document.getElementById("int");
//Mods
const dexMod = document.getElementById("dexMod");
const strMod = document.getElementById("strMod");
const chaMod = document.getElementById("chaMod");
const conMod = document.getElementById("conMod");
const wisMod = document.getElementById("wisMod");
const intMod = document.getElementById("intMod");
//Skills
const acrobatics = document.getElementById('acrobatics')
const animalHandling = document.getElementById('animalHandling')
const arcana = document.getElementById('arcana')
const athletics = document.getElementById('athletics')
const deception = document.getElementById('deception')
const history = document.getElementById('history')
const insight = document.getElementById('insight')
const intimidate = document.getElementById('intimidate')
const investigate = document.getElementById('investigate')
const medicine = document.getElementById('medicine')
const nature = document.getElementById('nature')
const perception = document.getElementById('perception')
const performance = document.getElementById('performance')
const persuasion = document.getElementById('persuasion')
const religion = document.getElementById('religion')
const slightHand = document.getElementById('slightHand')
const stealth = document.getElementById('stealth')
const survival = document.getElementById('survival')

const skills = [
    acrobatics,
    animalHandling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidate,
    investigate,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    slightHand,
    stealth,
    survival
]
 
for(let i=0; i <= skills.length; i++) {
    console.log(`skill ${skills[i]}`, skills[i])
}

const findMod = (stat) => {
  return Math.ceil((stat - 10) / 2).toString();
};

//finish the object
let character = {
    id:`${id}`
};
console.log(character)

charName.addEventListener('change', (e) => {
    e.preventDefault()

    character['charName'] = e.target.value
    console.log(character)
    console.log(e.target.value)
})

dex.addEventListener("change", (e) => {
  e.preventDefault();

  mod = findMod(e.target.value);

  dexMod.setAttribute("value", mod);

  character['dex'] = e.target.value
  character['dexMod'] = mod
});

str.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    strMod.setAttribute('value', mod)

    character['str'] = e.target.value
    character['strMod'] = mod
})

wis.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    wisMod.setAttribute('value', mod)

    character['wis'] = e.target.value
    character['wisMod'] = mod
})

con.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    
    conMod.setAttribute('value', mod)

    character['con'] = e.target.value
    character['conMod'] = mod
})

int.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    intMod.setAttribute('value', mod)

    character['int'] = e.target.value
    character['intMod'] = mod
})

cha.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    chaMod.setAttribute('value', mod)

    character['cha'] = e.target.value
    character['chaMod'] = mod
})
console.log(localStorage)
submit.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.reload()

// localStorage.clear()
    localStorage.setItem(`${character.id}`, JSON.stringify(character))
})
//add submit button thathas a listener to submit the form as a new character to localstorage