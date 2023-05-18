const charSheet = document.getElementById("sheet");
const submit = document.getElementById('submit')

const id = Date.now().toString();
const charName = document.getElementById("name");

//Stat Classes
const wisSkill = document.getElementsByClassName('wis')
const dexSkill = document.getElementsByClassName('dex')
const intSkill = document.getElementsByClassName('int')
const strSkill = document.getElementsByClassName('str')
const conSkill = document.getElementsByClassName('con')
const chaSkill = document.getElementsByClassName('cha')
//Mod Classes
const dexClass = document.getElementsByClassName('dexMod')
const strClass = document.getElementsByClassName('strMod')
const conClass = document.getElementsByClassName('conMod')
const intClass = document.getElementsByClassName('intMod')
const wisClass = document.getElementsByClassName('wisMod')
const chaClass = document.getElementsByClassName('chaMod')
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
//Skill Mods
const acrobaticsMod = document.getElementById('acrobaticsMod')
const animalMod = document.getElementById('animalMod')
const arcanaMod = document.getElementById('arcanaMod')
const athleticsMod = document.getElementById('athleticsMod')
const deceptionMod = document.getElementById('deceptionMod')
const historyMod = document.getElementById('historyMod')
const insightMod = document.getElementById('insightMod')
const intimidateMod = document.getElementById('intimidateMod')
const investigateMod = document.getElementById('investigateMod')
const medicineMod = document.getElementById('medicineMod')
const natureMod = document.getElementById('natureMod')
const perceptionMod = document.getElementById('perceptionMod')
const performanceMod = document.getElementById('performanceMod')
const persuasionMod = document.getElementById('persuasionMod')
const religionMod = document.getElementById('religionMod')
const slightHandMod = document.getElementById('slightHandMod')
const stealthMod = document.getElementById('stealthMod')
const survivalMod = document.getElementById('survivalMod')
//Skill Totals
const acrobaticsSkill = document.getElementById('acrobaticsSkill')
const animalSkill = document.getElementById('animalSkill')
const arcanaSkill = document.getElementById('arcanaSkill')
const athleticsSkill = document.getElementById('athleticsSkill')
const deceptionSkill = document.getElementById('deceptionSkill')
const historySkill = document.getElementById('historySkill')
const insightSkill = document.getElementById('insightSkill')
const intimidationSkill = document.getElementById('intimidationSkill')
const investigateSkill = document.getElementById('investigateSkill')
const medicineSkill = document.getElementById('medicineSkill')
const natureSkill = document.getElementById('natureSkill')
const perceptionSkill = document.getElementById('perceptionSkill')
const performanceSkill = document.getElementById('performanceSkill')
const persuasionSkill = document.getElementById('persuasionSkill')
const religionSkill = document.getElementById('religionSkill')
const slightHandSkill = document.getElementById('slightHandSkill')
const stealthSkill = document.getElementById('stealthSkill')
const survivalSkill = document.getElementById('survivalSkill')
//Proficiencies
const acrobaticsPro = document.getElementById('acrobaticsPro')
const handlingPro = document.getElementById('handlingPro')
const arcanaPro = document.getElementById('arcanaPro')
const athleticsPro = document.getElementById('athleticsPro')
const deceptionPro = document.getElementById('deceptionPro')
const historyPro = document.getElementById('historyPro')
const insightPro = document.getElementById('insightPro')
const intimidatePro = document.getElementById('intimidatePro')
const investigatePro = document.getElementById('investiatePro')
const medicinePro = document.getElementById('medicinePro')
const naturePro = document.getElementById('naturePro')
const perceptionPro = document.getElementById('perceptionPro')
const performancePro = document.getElementById('performacePro')
const persuasionPro = document.getElementById('persuasionPro')
const religionPro = document.getElementById('religionPro')
const slightHandPro = document.getElementById('slightHandPro')
const stelathPro = document.getElementById('stealthPro')
const survivalPro = document.getElementById('survivalPro')
//Arrays
const dexSkills = [
    acrobaticsSkill,
    slightHandSkill,
    stealthSkill
]

const stats = [
    str,
    dex,
    con,
    wis,
    int,
    cha
]

const mods = [
    dexMod,
    strMod,
    conMod,
    wisMod,
    intMod,
    chaMod
]

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

const skillTotal = [
    acrobaticsSkill,
    animalSkill,
    arcanaSkill,
    athleticsSkill,
    deceptionSkill,
    historySkill,
    insightSkill,
    intimidationSkill,
    investigateSkill,
    medicineSkill,
    natureSkill,
    perceptionSkill,
    performanceSkill,
    persuasionSkill,
    religionSkill,
    slightHandSkill,
    stealthSkill,
    survivalSkill
]

const proficiencies = [
    acrobaticsPro,
    handlingPro,
    arcanaPro,
    athleticsPro,
    deceptionPro,
    historyPro,
    insightPro,
    intimidatePro,
    investigatePro,
    medicinePro,
    naturePro,
    perceptionPro,
    performancePro,
    persuasionPro,
    religionPro,
    slightHandPro,
    stealthPro,
    survivalPro
]

const findMod = (stat) => {
  return Math.ceil((stat - 10) / 2);
};

const findSkillMod = (skill, mod) => {
    return skill + mod
}

let character = {
    id:`${id}`
};
console.log(character)

// const determineStats = (e) => {
//     return strMod + e.target.value
// }
//Setting Character Name
charName.addEventListener('change', (e) => {
    e.preventDefault()

    character['charName'] = e.target.value
    console.log(character)
    console.log(e.target.value)
})
//Setting Character Modifiers
dex.addEventListener("change", (e) => {
    e.preventDefault();
    const mod = findMod(e.target.value);

    dexMod.setAttribute("value", mod);

    for(let i=0; i < dexClass.length; i++){
        dexClass[i].setAttribute('value', mod)
    }

    character['dex'] = e.target.value
    character['dexMod'] = mod
});

str.addEventListener('change', (e) => {
    e.preventDefault()
    
    const mod = findMod(e.target.value)

    strMod.setAttribute('value', mod)
    for(let i=0; i < strClass.length; i++){
        strClass[i].setAttribute('value', mod)
    }

    character['str'] = e.target.value
    character['strMod'] = mod
})

wis.addEventListener('change', (e) => {
    e.preventDefault()
    
    const mod = findMod(e.target.value)
    console.log(wisMod.value)
    wisMod.setAttribute('value', mod)

    for(let i=0; i < wisClass.length; i++){
        wisClass[i].setAttribute('value', mod)
    }

    character['wis'] = e.target.value
    character['wisMod'] = mod
})

con.addEventListener('change', (e) => {
    e.preventDefault()

    const mod = findMod(e.target.value)

    
    conMod.setAttribute('value', mod)

    for(let i=0; i < conClass.length; i++){
        conClass[i].setAttribute('value', mod)
    }

    character['con'] = e.target.value
    character['conMod'] = mod
})

int.addEventListener('change', (e) => {
    e.preventDefault()

    const mod = findMod(e.target.value)

    intMod.setAttribute('value', mod)

    for(let i=0; i < intClass.length; i++){
        intClass[i].setAttribute('value', mod)
    }

    character['int'] = e.target.value
    character['intMod'] = mod
})

cha.addEventListener('change', (e) => {
    e.preventDefault()

    const mod = findMod(e.target.value)

    chaMod.setAttribute('value', mod)

    for(let i=0; i < chaClass.length; i++){
        chaClass[i].setAttribute('value', mod)
    }

    character['cha'] = e.target.value
    character['chaMod'] = mod
})


//Determine Skill Values
acrobatics.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(dexMod.value)
    mod = parseInt(dexMod.value)
    skill = parseInt(acrobatics.value)
    acrobaticsSkill.value = mod + skill
})

animalHandling.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(wisMod.value)
    skill = parseInt(animalHandling.value)
    animalSkill.value = mod + skill
})

arcana.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(intMod.value)
    skill = parseInt(arcana.value)
    arcanaSkill.value = mod + skill
})

athletics.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(strMod.value)
    skill = parseInt(athletics.value)
    athleticsSkill.value = mod + skill
})

deception.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(chaMod.value)
    skill = parseInt(deception.value)
    deceptionSkill.value = mod + skill
})

history.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(intMod.value)
    skill = parseInt(history.value)
    historySkill.value = mod + skill
})

insight.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(wisMod.value)
    skill = parseInt(insight.value)
    insightSkill.value = mod + skill
})

intimidate.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(chaMod.value)
    skill = parseInt(intimidate.value)
    intimidateSkill.value = mod + skill
})

investigate.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(intMod.value)
    skill = parseInt(investigate.value)
    investigateSkill.value = mod + skill
})

medicine.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(wisMod.value)
    skill = parseInt(medicine.value)
    medicineSkill.value = mod + skill
})

nature.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(intMod.value)
    skill = parseInt(nature.value)
    natureSkill.value = mod + skill
})

perception.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(wisMod.value)
    skill = parseInt(perception.value)
    perceptionSkill.value = mod + skill
})

performance.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(chaMod.value)
    skill = parseInt(performance.value)
    performanceSkill.value = mod + skill
})

persuasion.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(chaMod.value)
    skill = parseInt(persuasion.value)
    persuasionSkill.value = mod + skill
})

religion.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(intMod.value)
    skill = parseInt(religion.value)
    religionSkill.value = mod + skill
})

slightHand.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(dexMod.value)
    skill = parseInt(slightHand.value)
    slightHandSkill.value = mod + skill
})

stealth.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(dexMod.value)
    skill = parseInt(stealth.value)
    stealthSkill.value = mod + skill
})

survival.addEventListener('change', (e) => {
    e.preventDefault()

    mod = parseInt(wisMod.value)
    skill = parseInt(survival.value)
    survivalSkill.value = mod + skill
})

const updateSkills = () => {
    for(let i=0; i < skills.length; i++){
        if(proficiency[i] === true){
            skills[i].value += 3
    }
}
}

//Submit Character To Local Storage
submit.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.reload()

// localStorage.clear()
    localStorage.setItem(`${character.id}`, JSON.stringify(character))
})
console.log(character)

