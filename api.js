// // initial call
// fetch('https://www.dnd5eapi.co/api/')

//HTML Elements
const racesList = document.getElementById('racesList')
const raceInput = document.getElementById('raceInput')
const race = racesList.value

//Race Logic
const races = (req, res) => {
    return fetch('https://www.dnd5eapi.co/api/races/')
    .then(res => res.json())
    .then(raceData =>{
        for(let i=0; i < raceData.results.length; i++){
            console.log('races', raceData.results[i].name)
            const optionEl = document.createElement('option')
            optionEl.value = raceData.results[i].name
            racesList.appendChild(optionEl)
            console.log('race', raceData)
        }
    }).catch(err => {
        console.error('There was a problem retrieving all the races:', err);
    })
}
document.onload = races()

const getdata = async () => {
    try{
        const data = await fetch('https://www.dnd5eapi.co/api/races/dragonborn')
        .then( res=> res.json())
        .then(data => {
            return console.log('hello', data.ability_bonuses)
        })

    }catch(err){
        console.error('There was a problem retrieving all the races:', err);
    }
}

getdata()