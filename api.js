// // initial call
// fetch('https://www.dnd5eapi.co/api/')

//HTML Elements
const racesList = document.getElementById('racesList')
const raceInput = document.getElementById('raceInput')
const speed = document.getElementById('speed')
const ability_bonuses = document.getElementById('ability_bonuses')
const size = document.getElementById('size')
const size_description = document.getElementById('size_description')
const languages = document.getElementById('languages')
const language_desc = document.getElementById('language_desc')
const alignment = document.getElementById('alignment')

//Various Variables
var selectedRace = []
// var raceData = {}
const race = racesList.value
console.log('selectedRace', selectedRace)
//Race Logic
const races = (req, res) => {
    return fetch('https://www.dnd5eapi.co/api/races/')
    .then(res => res.json())
    .then(raceData =>{
        for(let i=0; i < raceData.results.length; i++){
            const optionEl = document.createElement('option')

            optionEl.value = raceData.results[i].name
            racesList.appendChild(optionEl)
        }
    }).catch(err => {
        console.error('There was a problem retrieving all the races:', err);
    })
}

document.onload = races()

raceInput.addEventListener('input', (e) => {
    selectedRace = e.target.value.toLowerCase()
    console.log('selectedRace', selectedRace)
    getRaceData()
})

const getRaceData = async () => {
    try{
        const data = await fetch(`https://www.dnd5eapi.co/api/races/${selectedRace}`)
        .then( res=> res.json())
        .then(data => {
            const raceData = data;
            console.log('raceData', raceData.ability_bonuses)
            
            //Speed Display
            speed.setAttribute('value', raceData.speed)
            
            //Ability Bonuses Display
            for(let i=0; i < raceData.ability_bonuses.length; i++){
                const bonus = raceData.ability_bonuses[i]
                const listItem = document.createElement('li')
                console.log(bonus.ability_score.name)
                listItem.innerHTML = `${bonus.ability_score.name} +${bonus.bonus}`
                console.log('listItem', listItem)
                ability_bonuses.appendChild(listItem)
            }

            //Size Display
            size.setAttribute('value', raceData.size)
            size_description.innerHTML = raceData.size_description

            //Language Display
            for(let i=0; i < raceData.languages.length; i++){
                languages.innerHTML = raceData.languages[i].name
            }
            language_desc.innerHTML = raceData.language_desc

            //Alignment
            alignment.innerHTML = raceData.alignment
        })

    }catch(err){
        console.error('There was a problem retrieving the race data', err);
    }
}

