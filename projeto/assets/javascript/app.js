import {portifolio} from "./../../data/data.js"
const {username, role, resume, social} = portifolio
let portifolioNome = document.querySelector(".js-portifolio-name")
let portifolioRole = document.querySelector(".js-portifolio-role")
let resumeText = document.querySelector(".js-resume-text")
let portifolioContacts = document.querySelector(".js-portifolio-contacts")
let btnProjects = document.querySelector(".js-btn-projects")
let btnReturn = document.querySelector(".js-btn-return")


portifolioNome.innerText = username
portifolioRole.innerText = role
resumeText.innerText = resume

for(let i=0; i < social.length; i++) {
    let listItem = document.createElement("li")
let listItemImg = document.createElement("img")

    listItemImg.src = social[i]
    listItem.appendChild(listItemImg)
    portifolioContacts.appendChild(listItem)

    console.log(listItemImg)
}

btnProjects.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "inline-block"
})

btnReturn.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "none"
})