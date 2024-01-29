let texte1 = "OFPPT";
texte1 +=" ";
let texte2= "en force";
let texte3 = texte1 + texte2;

console.log(texte3);

let a = 10;
let b = "10";
let x = a==b;
let y = a===b;

if(a==b) {
    let x;
} else if (a===b) {
    let y ;
}; 
console.log(x, y);

let statut="etudiant";
let age=20;
if(statut=="etudiant" || age===20) {
    console.log("okkkkkkkk")
} else if (statut=="employe"){
    console.log("error")
};



let valide=false;

if(!valide){
    console.log("d'accord")
};
console.log(valide);