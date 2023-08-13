console.log("hello world")

const reponse = await fetch("http://localhost:5678/api/works")
const picture = await reponse.json()
let i = 0
const photo = picture[i]

export function modal () {
const btnModifI = document.querySelector(".modifImage")
btnModifI.addEventListener("click",creatModal)
console.log(btnModifI)
console.log("btn modif image OK")
const btnModifP = document.querySelector(".modifImageProjet")
btnModifP.addEventListener("click",creatModal)
suppressionModalPhoto()
}
// fonction pour creer la modal avec les photo 
function creatModal () {

    // La forme de la modal 

const modalBase = document.querySelector("body")
const modalHeader = document.querySelector("header")
const modalElement = document.createElement("div")
modalElement.setAttribute("id", "myModal")
modalBase.insertBefore(modalElement, modalHeader)
document.getElementById("myModal").innerHTML=""
modalElement.innerHTML = `
        
<div class="modal-header">
<span class="close">&times;</span>
<h2>Galerie photo</h2>
</div>
<div class="modal-body">
</div>
<div class="modal-footer">
<button class="addPhoto">Ajouter une photo</button>
<button class="supGallery">Supprimer la galerie</button>
</div>
` 
console.log("Btn ok")
const modal = document.getElementById("myModal")
modal.style.display = "block" 
genererPhotoModal()
// Fermeture de la modal en cliquant sur la croix   
const croix = document.querySelector(".close")
croix.onclick = function () {
    modalBase.removeChild(modalElement)
}
}
function genererPhotoModal () {
fetch("http://localhost:5678/api/works")
            .then(function (reponse){
                return reponse.json()
            })
            for (let i = 0; i < picture.length ; i++){
            const photo = picture[i]
            
const photoModal = document.querySelector(".modal-body")
const divPhoto = document.createElement("div")
divPhoto.setAttribute("class", "photoModal")
const photoElement = document.createElement("img")
photoElement.setAttribute("class",`photo${photo.id}`)
const photoInfo = document.createElement("figcaption")
const photoLogo = document.createElement("div")
photoLogo.setAttribute("class", "logo")
photoElement.src = photo.imageUrl
photoInfo.innerText = "éditer"
photoLogo.innerHTML =`
            <i class="fa-solid fa-up-down-left-right"></i>
            <i id="${photo.id}" class="fa-regular fa-trash-can "></i>
                                    `
    photoModal.appendChild(divPhoto)
    divPhoto.appendChild(photoElement)
    divPhoto.appendChild(photoLogo)
    divPhoto.appendChild(photoInfo)
    const removePhoto = document.getElementById(`${photo.id}`)
console.log("Valeur de removePhoto")
console.log(removePhoto.id)
removePhoto.addEventListener("click", suppBtn())
}
}


const idProject = picture.id

const removePhoto = document.getElementById(`${photo.id}`)
console.log("Valeur de removePhoto")
console.log(removePhoto)

function suppressionModalPhoto () {
console.log("ok")}
function suppBtn (){
async function suppPhoto() {
    const promise = await fetch(`http://localhost:5678/api/works/${idProject}`, {
        method: 'DELETE',
        headers:{
            'Authorization': 'bearer' + token
        }
    })
    if (promise.ok === true) {
        reponse = await fetch("http://localhost:5678/api/works")
        picture = await reponse.json()
        document.querySelector(".gallery").innerHTML = ""
        document.querySelector(".photoModal").innerHTML=""
        for (let photo of picture) {
            genererPhoto(photo)
            genererPhotoModal(photo)
            console.log("ok")

        }
    }else {
        console.log(promise.status)
        alert("Suppression Impossible")
    }
    
    }
    for (let photo of picture) {
        if (removePhoto.id === photo.id)
        suppPhoto()

}
}
