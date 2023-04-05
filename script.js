const charSheet = document.getElementById("sheet");

const modifier = document.querySelectorAll(".mod");

const id = Date.now().toString();
const name = document.getElementById("name");

const str = document.getElementById("str");
const cha = document.getElementById("cha");
const dex = document.getElementById("dex");
const con = document.getElementById("con");
const wis = document.getElementById("wis");
const int = document.getElementById("int");

const dexMod = document.getElementById("dexMod");
const strMod = document.getElementById("strMod");
const chaMod = document.getElementById("chaMod");
const conMod = document.getElementById("conMod");
const wisMod = document.getElementById("wisMod");
const intMod = document.getElementById("intMod");

const findMod = (stat) => {
  return Math.ceil((stat - 10) / 2).toString();
};

//finish the object
const character = {
  id: `${id}`,
  name: `${name.value}`,
  str: `${str.value}`,
  cha: `${cha.value}`,
  dex: `${dex.value}`,
  dexMod: `${dexMod.value}`,
};
console.log(character)

dex.addEventListener("change", (e) => {
  e.preventDefault();

  mod = findMod(e.target.value);
    console.log(character)
  dexMod.setAttribute("value", mod);
});

str.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    strMod.setAttribute('value', mod)
})

wis.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    wisMod.setAttribute('value', mod)
})

con.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    conMod.setAttribute('value', mod)
})

int.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    intMod.setAttribute('value', mod)
})

cha.addEventListener('change', (e) => {
    e.preventDefault()

    mod = findMod(e.target.value)

    chaMod.setAttribute('value', mod)
})

//add submit button thathas a listener to submit the form as a new character to localstorage