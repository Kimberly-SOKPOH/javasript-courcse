let Arraygenre = []
// event

document.addEventListener("DOMContentLoaded", chargement)

document.getElementById("submit").addEventListener("click", soumettre)

// function

function chargement(){
    let request = new XMLHttpRequest()
    request.open("GET", "data.json" , true)
    request.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let dataResponse = JSON.parse(this.responseText)
            console.log(dataResponse)
            Arraygenre  =  dataResponse.genre
            let genreOptions = " ";
            for( let i = 0; i < Arraygenre.length; i++){
                genreOptions += `<option value="${Arraygenre[i]}">${Arraygenre[i]}</option>` 
            }
            document.getElementById("gender").innerHTML = genreOptions;
        }
    }
    request.send()
}

function soumettre (e){
    e.preventDefault()
    let nom = document.getElementsById("nom_div"),
        email = document.getElementById("email"),
        password = document.getElementById("psw"),
        date = document.getElementById("date"),
        errorMessage = ""
        if ( nom.value == ""){
          let errorMessage = document.createElement("p");
          errorMessage.style.color = "red"
          errorMessage.innerHTML = " Entrez votre nom"
          nom.append(errorMessage)
          console.log(errorMessage)
            
        }
        if ( email.value == ""){
            errorMessage = `<p style=" color : red; width : 20PX "> Enter your email </p>`
            document.getElementById("email").innerHTML = errorMessage
        }
        if ( password.value == ""){
            errorMessage = `<p style=" color : red; width : 20PX "> Enter your password </p>`
            document.getElementById("psw").innerHTML = errorMessage
        }
        if ( date.value == ""){
            errorMessage = `<p style=" color : red; width : 20PX "> Enter your date </p>`
            document.getElementById("date").innerHTML = errorMessage
        }

}