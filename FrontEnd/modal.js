console.log("hello world")

const reponse = await fetch("http://localhost:5678/api/works")
const picture = await reponse.json()


export function modal () {
const btnModifI = document.querySelector(".modifImage")
btnModifI.addEventListener("click",creatModal)
const btnModifP = document.querySelector(".modifImageProjet")
btnModifP.addEventListener("click",creatModal)
}

function creatModal () {
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
const croix = document.querySelector(".close")

croix.onclick = function () {
    modalBase.removeChild(modalElement)
}
}

function modalPhoto () {
    const pictureModal = document.querySelector("#myModal")
    const divPhoto = document.createElement("div")
    divPhoto.setAttribute("class", "photoModal")
    const photoElement = document.createElement("img")
    photoElement.setAttribute("class",`photo${picture.id}`)
    const photoInfo = document.createElement("figcaption")
    const photoLogo = document.createElement("div")
    photoLogo.setAttribute("class", "logo")
    photoElement.src = picture.imageUrl
    photoInfo.innerText = "éditer"
    photoLogo.innerHTML =`
            <i class="fa-solid fa-up-down-left-right"></i>
            <i id="trash" class="fa-regular fa-trash-can"></i>
                                    `
    pictureModal.appendChild(divPhoto)
    divPhoto.appendChild(photoElement)
    divPhoto.appendChild(photoLogo)
    divPhoto.appendChild(photoInfo)
    
}

export function genererPhotoModal () {
    for (let photo of picture) {
        modalPhoto()
        genererPhoto(photo)
}
}

