import { pageAdmin } from "./pageAdmin.js"
import { modal} from "./modal.js"
const reponse = await fetch("http://localhost:5678/api/works")
const picture = await reponse.json()
console.log(picture)


function genererPhoto (photo) {
    const divGallery = document.querySelector(".gallery")
        const photoElement = document.createElement("figure")
        const photoImg = document.createElement("img")
        photoImg.src=photo.imageUrl
        const photoNom = document.createElement("figcaption")
        photoNom.innerText = photo.title

        divGallery.appendChild(photoElement)
        photoElement.appendChild(photoImg)
        photoElement.appendChild(photoNom)
}

for (let photo of picture){
    genererPhoto(photo)
}

// Ajout Bouton Tous
const boutonTous = document.querySelector(".One")
boutonTous.addEventListener("click", function() {
   document.querySelector(".gallery").innerHTML=""
   for (let photo of picture) {
    genererPhoto(photo)
    console.log(photo)
   }
   
})

// Ajout Boutton objet
const boutonObjet = document.querySelector(".Two");

boutonObjet.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML=""
    for (let photo of picture) {
        if (photo.categoryId === 1){
            console.log(photo)
            
            genererPhoto(photo)
        }
    }
    });

// Ajout Boutton appartement

const boutonAppartements = document.querySelector(".Three");

boutonAppartements.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML=""
    for (let photo of picture) {
        if (photo.categoryId === 2) {
            console.log(photo)
            genererPhoto(photo)
        }
    }
})

// Ajout Boutton Hôtel

const boutonHotel = document.querySelector(".Four")
boutonHotel.addEventListener("click", function() {
    document.querySelector(".gallery").innerHTML=""
    for (let photo of picture) {
        if (photo.categoryId === 3) {
            console.log(photo)
            genererPhoto(photo)
        }
    }
})
pageAdmin()   
modal()
