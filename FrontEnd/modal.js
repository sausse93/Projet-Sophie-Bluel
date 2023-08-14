console.log("hello world")
const reponse = await fetch("http://localhost:5678/api/works")
const picture = await reponse.json()

let token = sessionStorage.getItem("token")
export function modal () {
const btnModifI = document.querySelector(".modifImage")
btnModifI.addEventListener("click",creatModal)
console.log(btnModifI)
console.log("btn modif image OK")
const btnModifP = document.querySelector(".modifImageProjet")
btnModifP.addEventListener("click",creatModal)

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

// Fermeture de la modal en cliquant sur la croix   
const croix = document.querySelector(".close")
croix.onclick = function () {
    modalBase.removeChild(modalElement)
}
function genererPhotoModal (photo) {
            console.log(photo.id)
            const photoModal = document.querySelector(".modal-body")
            const divPhoto = document.createElement("div")
            divPhoto.setAttribute("class", "photoModal")
            const photoElement = document.createElement("img")
            photoElement.setAttribute("class",photo.id)
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
            
            const removeItem = document.getElementById(`${photo.id}`)
            removeItem.addEventListener("click", function() {
                console.log(removeItem)
                async function deleteWorks() {
                    const promise = await fetch(`http://localhost:5678/api/works/${removeItem.id}`,{
                        method: 'DELETE',
                        headers: {
                            'Accept': '*/*',
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    if (promise.ok === true) {
                        alert("Suppression Ok")
                        reponse = await fetch("http://localhost:5678/api/works")
                        picture = await reponse.json()
                        document.querySelector("#myModal").innerHtml= ""
                        for (let photo of picture) {
                            genererPhotoModal(photo)
                        }
                    } else {
                        console.log(promise.status)
                        console.log(promise.ok)
                    }
                } 
                for (let photo of picture) {
                    if (removeItem.id == photo.id) {
                        deleteWorks()
                    }
                }
            })
}  
 for (let photo of picture) {
    genererPhotoModal(photo)
 }

}


