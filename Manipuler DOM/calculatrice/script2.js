
//  addition de deux nombres

document.querySelector("div").style.width ="300PX"
document.querySelector("div").style.height="400PX"
document.querySelector("div").style.border=" solid black 2px"
document.querySelector("div").style.borderRadius= "25PX"
document.querySelector("div").style.display="flex"
document.querySelector("div").style.flexDirection="column"
document.querySelector("div").style.alignItems="center"
document.querySelector("div").style.justifyContent="space-around"
document.querySelector("div").style.justifySelf="center"
// document.querySelector("div").style.
// document.querySelector("div").style.

document.querySelector(".text1").style.borderRadius= "25PX"
document.querySelector(".text2").style.borderRadius= "25PX"
document.querySelector(".text3").style.borderRadius= "25PX"
ocument.querySelector("input").style.backgroundColor="red"

let nombre1 =document.querySelector(".text1").value;
let nombre2 =document.querySelector(".text2").value;

let resultat = (nombre1, nombre2) =>{
    return nombre1 + nombre2
};

document.querySelector(".btn-egal").addEventListener("click", resultat)
document.querySelector(".text3").value= resultat;
console.log(document.querySelector(".text3").value)



 //  addition de deux nombres : exemple de monsieur
 
document.querySelector(".btn-calculer").
                        addEventListener("click", (e)=> {
                                                    console.log("you clicked me!!");
                                                    e.preventDefault();
                                                            })

let calculerF = (e) =>{
    e.preventDefault();
    let n1 = Number(document.querySelector(".nombre-un").value);
    let n2 = Number(document.querySelector(".nombre-deux").value);
    console.log(n1);
    document.querySelector(".somme").innerHTML = n1 + n2
}     
document.querySelector(".btn-calculer").addEventListener("click", calculerF);
