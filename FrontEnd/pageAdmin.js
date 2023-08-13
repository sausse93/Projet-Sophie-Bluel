
// Mise en place des differentes fonction 

    // Fonction de mise en place de la page d'admin

export function pageAdmin (){
    let token = sessionStorage.getItem("token")
    if (token) {
    editBarre()
    modifIntro()
    modifProjet()
    logout()
    suppCate()
}
}
 
    // Fonction pour la barre noir en haut de la page
function editBarre () {
    const body = document.querySelector("body")
    const header = document.querySelector("header")
    const divBarre = document.createElement("div")
    divBarre.setAttribute("id", "barreEdite")
    body.insertBefore(divBarre , header)
    divBarre.innerHTML +=  `
        
    <button id="bouttonEdit">
        <i class="fa-regular fa-pen-to-square"></i>
        <a href="#modal">Mode édition</a>
    </button>
    <button id="bouttonPubli">
        publier les changements
    </button>
     `	   
     console.log("Fonction editBarre OK")
}

    // Fonction pour le boutton Logout

function logout () {
        const logout = document.querySelector(".log")
        logout.innerText = "logout"
        logout.addEventListener("click",buttonLogout)
    }

function buttonLogout () {
    sessionStorage.removeItem("token")
    window.location.href = "index.html"
}

    // Fonction ajout des bouttons modifier 

function modifIntro() {
    const imageIntro = document.querySelector(".imageIntro")
    const imageModif = document.createElement("figcaption")
    imageModif.setAttribute("class", "modif")
    imageIntro.appendChild(imageModif)
    imageModif.innerHTML +=`<button class="modifImage"> <i class="fa-regular fa-pen-to-square"></i>modifier</button> `
    console.log("Fonction modifIntro OK")
}

function modifProjet() {
    const parentProjet = document.querySelector("#portfolio")
    const dessousProjet = document.querySelector("#categories") 
    const projetModif = document.createElement("div")
    const projet = document.querySelector("#projet")
    parentProjet.insertBefore(projetModif, dessousProjet)
    projetModif.setAttribute("class", "modifProjet")
    projetModif.appendChild(projet)
    projetModif.innerHTML +=`<button class="modifImageProjet"> <i class="fa-regular fa-pen-to-square"></i>modifier</button>`
    console.log("Fonction modifProjet OK")
    const btnProjet =document.querySelector(".modifImageProjet")
    btnProjet.addEventListener("click", function(){
        console.log("Modif projet OK")
    })    
}
// Suppression des catégories 

function suppCate () {
    const categorie = document.querySelector("#categories")
    categorie.setAttribute("style", "display:none")
}


// Lancement Fonction de la page en mode Admin

