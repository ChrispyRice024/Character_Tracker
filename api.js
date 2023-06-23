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
const proficienciesDiv = document.getElementById('proficiencies')
const traitsDiv = document.getElementById('traits')

//Fetch Calls
const raceFetch = fetch('https://www.dnd5eapi.co/api/races/').then((res) => res.json())
const subRaceFetch = fetch('https://www.dnd5eapi.co/api/subraces/').then((res) => res.json())
const allRace = Promise.all([raceFetch, subRaceFetch])

//Various Variables
var selectedRace = []
// var raceData = {}
const race = racesList.value
console.log('selectedRace', selectedRace)
//Race Logic

allRace.then(res => res)
    // .then(res => res.json())
    .then(raceData => {
        console.log(raceData)
        for(let i=0; i < raceData[0].results.length; i++){
            // for(let j=0; i< raceData.results[j].length; i++){
                const race = raceData[0].results[i].name
                const optionEl = document.createElement('option')

                optionEl.value = race
                racesList.appendChild(optionEl)
                console.log('hello', raceData[0].results[i].name)
            // }
            
        }
        for(let i=0; i < raceData[1].results.length; i++){
            const race = raceData[1].results[i].name
                const optionEl = document.createElement('option')

                optionEl.value = race
                racesList.appendChild(optionEl)
        }
         
    }
    ).catch(err => {
        console.error('There was a problem retrieving all the races:', err);
    })

const races = (req, res) => {
    return fetch('https://www.dnd5eapi.co/api/races/')
    .then(res => res.json())
    .then(raceData =>{
        for(let i=0; i < raceData.results.length; i++){
            const race = raceData.results[i].name
            const optionEl = document.createElement('option')
            // const subRaces = () => {
            //     return fetch(`https://www.dnd5eapi.co/api/${race}`)
            //     .then(res => res.json())
            //     .then(race => {
            //         console.log('hello', race)
            //     })
            // }
            // subRaces()
            // const subRaces = raceData.results[i].url
            // console.log('direct fetch', subrace)
            // for(let i=0; i < )
            // console.log(subRaces)
            optionEl.value = race
            racesList.appendChild(optionEl)
        }
    }).catch(err => {
        console.error('There was a problem retrieving all the races:', err);
    })
}

// document.onload = races()

raceInput.addEventListener('input', (e) => {
    selectedRace = e.target.value.toLowerCase().replace(' ', '-')
    console.log('selectedRace', selectedRace)
    getRaceData()
})

const getRaceData = async () => {
    let fetch;

    if (selectedRace.contains('-')){
        fetch = `https://www.dnd5eapi.co/api/subraces/${selectedRace}`
    }else{
        fetch = `https://www.dnd5eapi.co/api/races/${selectedRace}`
    }
    try{
        const data = await fetch
        .then( res=> res.json())
        .then(data => {
            const raceData = data;
            console.log('raceData', raceData.ability_bonuses)
            
            //Speed Display
            speed.setAttribute('value', raceData.speed)
            
            //Ability Bonuses Display
            //Clear previous bonuses
            if (document.getElementById('ability_bonus')){
                document.getElementById('ability_bonus').parentNode.removeChild(document.getElementById('ability_bonus'))
            }
            console.log(raceData)
            for(let i=0; i < raceData.ability_bonuses.length; i++){
                const bonus = raceData.ability_bonuses[i]
                const listItem = document.createElement('li')
                listItem.setAttribute('id', 'ability_bonus')
                console.log(bonus.ability_score.name)
                listItem.innerHTML = `${bonus.ability_score.name} +${bonus.bonus}`
                console.log('listItem', listItem)
                ability_bonuses.appendChild(listItem)
            }

            // //Subraces
            // if(raceData.subraces && raceData.subraces.length > 0){
            //     const mainRace = document.createElement('li')
            //     mainRace.innerHTML = raceData.name
            // }

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

            //Proficiencies
            console.log(proficienciesDiv)
            if(raceData.starting_proficiencies.length > 0){
                for(let i=0; i< raceData.starting_proficiencies.length; i++){
                    const proficiency = raceData.starting_proficiencies
                    proficienciesDiv.innerHTML = proficiency[i].name 
                }
            }
            
            //Proficiency Options
            console.log(raceData.starting_proficiency_options)
        })

    }catch(err){
        console.error('There was a problem retrieving the race data', err);
    }
}


