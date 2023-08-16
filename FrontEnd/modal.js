console.log("hello world")
import { genererPhoto } from "./script.js"
let reponse = await fetch("http://localhost:5678/api/works")
let picture = await reponse.json()

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

    if (!document.querySelector("#myModal")){
        console.log(!document.querySelector("#myModal"))
        const modalElement = document.createElement("div")
        modalElement.setAttribute("id", "myModal")
        document.getElementById("portfolio").appendChild(modalElement)
        document.getElementById("myModal").innerHTML=""
        modalElement.innerHTML += `
<div id="modalEdition">      
<div class="modal-header">
<i class="fa-solid fa-xmark"></i>
<h2>Galerie photo</h2>
</div>
<div class="modal-body">
</div>
<div class="modal-footer">
<button class="addPhoto">Ajouter une photo</button>
<button class="supGallery">Supprimer la galerie</button>
</div>
</div>

` 
        console.log("Btn ok")
    }else {
        document.querySelector("#myModal").style.display= "flex"
        document.querySelector(".modalEdition").style.display= "flex"
    }
    

// Fermeture de la modal en cliquant sur la croix   
/*const croix = document.querySelector(".fa-xmark")
croix.onclick = function () {
    const modalElement = document.getElementById("myModal")
    document.getElementById("portfolio").removeChild(modalElement)
}*/

// fonction de la generation des photos dans la modal
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
            
            // fonction de la suppression d'une photo en cliquant sur la poubelle
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
                        alert("Suppression de l'élément fait")
                        reponse = await fetch("http://localhost:5678/api/works")
                        picture = await reponse.json()
                        document.querySelector(".modal-body").innerHTML=""
                        document.querySelector(".gallery").innerHTML=""
                        for (let photo of picture) {
                            genererPhotoModal(photo)
                            genererPhoto(photo)
                        }
                        
                    } else {
                        alert("Suppression de l'élément impossible")
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
// Géneration de la page modal pour l'ajout d'une photo
const photoAdd = document.querySelector(".addPhoto")
photoAdd.addEventListener("click", function () {
    console.log("Bouton ajouter une photo OK")

    document.querySelector("#modalEdition").style.display = "none"

      if (!document.querySelector(".modalAjout")){
        document.querySelector("#myModal").innerHTML += `
        <div class="modalAjout">
            <div class="modal-img">
                <div class="icon-haut">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            <h2>Ajout photo</h2>
            <form id="form-img">
                <div class="img-aperçu">
                    <div class="img-icon">
                        <i class="fa-regular fa-image"></i>
                    </div>
                    <img class="image">
                    <input id="img-input" type="file" accept="image/jpeg image/png image/jpg">
                    <label for="img-input" id="img-label">
                        <i class="fa-solid fa-plus"></i> Ajouter une photo
                    </label>
                    <p class="info-img">jpeg, png: 4mo max </p>
                </div>
                <div class="img-case">
                    <label for="input-titre">Titre</label>
                    <div>
                    <input id="input-titre" type="text" name="titre">
                    </div>
                </div>
                <div class="img-case">
                    <label for="img-categorie">Catégories</label>
                    <div>
                        <select name="img-categorie" id="Cateliste">
                            <option value="default" selected></option>
                            <option value="1" name="Objet">Objets</option>
                            <option value="2" name="Appartements">Appartements</option>
                            <option value="3" name="Hotels & restaurants">Hôtels & restaurants</option>
                        </select>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="img-val">
                    <button id="img-validation" type="submit">Valider</button>
                </div>
            </div>
        </div>    

    `
    } else {
        document.querySelector(".modalAjout").style.display = "flex"
    }   
    // Retour a la modal précedente 
    const backEdition = document.querySelector(".fa-arrow-left")
    backEdition.addEventListener("click", function() {
        console.log("boutton retour OK")
        document.querySelector("#modalEdition").style.display="block"
        document.querySelector(".modalAjout").style.display= "none"
        
      })

    // Ajout d'une photo
    const imgConteneur = document.querySelector(".img-aperçu")
    const imgInput = document.querySelector("#img-input")
    const img = document.querySelector(".image")
    img.style.display= "none"
    imgInput.addEventListener("change", function() {
        const imgLabel = document.querySelector("#img-label")
        imgLabel.removeAttribute("id", "img-label")
        imgLabel.setAttribute("id", "img-switch")
        imgLabel.innerHTML=""
        console.log(this.files)
        const fichier = this.files[0]

        if (fichier) {
            console.log(fichier)
            const analyseur = new FileReader()

            document.querySelector(".img-icon").style.display= "none"
            document.querySelector(".info-img").style.display= "none"
            document.querySelector(".image").style.display= "block"

            analyseur.readAsDataURL(fichier)
            analyseur.addEventListener("load", function () {
                document.querySelector(".image").setAttribute("src",this.result)
            })
            
        }

    })
    
    const modalForm = document.querySelector("#form-img")
    modalForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("title",document.getElementById("input-titre").value )
        formData.append("image",imgInput.files[0])
        formData.append("category",document.getElementById("Cateliste").value)

        for (const value of formData.values()) {
            console.log(value)
        }
       
        async function addWorks() {
            const promise = await fetch("http://localhost:5678/api/works", {
                method:'POST',
                headers:{
                    'Accept': "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })
            if (promise.ok) {
                const reponse = await fetch("http://localhost:5678/api/works")
                const picture = await reponse.json()
                document.querySelector(".gallery").innerHTML= ""
                document.querySelector("#modalEdition").innerHTML=""
                alert("Ajout de la nouvelle photo à la gallerie")
                for (let photo of picture) {
                    genererPhoto(photo)
                    genererPhotoModal(photo)
                    
                }
            } else {
                console.log(promise.status)
                alert("Impossible à ajouter")
            }

        }
        addWorks()
        document.querySelector("#form-img").reset()
    })
    })


const croix = document.querySelector(".fa-xmark")
console.log(document.querySelector(".fa-xmark"))
croix.onclick = function () {
    console.log("btn fermer est OK")
    const modalElement = document.getElementById("myModal")
    document.getElementById("portfolio").removeChild(modalElement)
}
}


