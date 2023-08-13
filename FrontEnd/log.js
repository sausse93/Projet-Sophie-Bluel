async function connexion(){
    const formLogIn = document.querySelector('#login-form')
    formLogIn.addEventListener("submit", async function (e) {
        e.preventDefault()
        let users = {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value

        }
        console.log(users)
        let reponse = await fetch(`http://localhost:5678/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(users)
        })
       
        if (reponse.ok){
            let result = await reponse.json()
            const token = result.token
            sessionStorage.setItem("token", token)
            window.location.href = 'index.html'
            console.log(result.token)
            console.log(token)

        }else {
            const messageErreur = "Erreur dans l’identifiant ou le mot de passe"
            alert(messageErreur)
            throw new Error (`Une erreur c'est produite !`) 
        }
       
    }) 
    
} 

connexion()
