//declaration fonctionnelle

const différence = function(a, b){
    return a * b
}
console.log(différence(3, 5))


//syntaxe des fonctions fléchées 

const somme =  (c, d) => {
    return c + d;
}
console.log(somme(3, 5))


const stagiaire = [
    { nom: "ABALO", prenom: "koffi", age: "20",},
    { nom: "AMADI", prenom: "Ami", age: "21",},
    { nom: "SOUDI", prenom: "Bola", age: "18",},
    { nom: "JESTER", prenom: "Luc", age: "14",},
];

// let nomStagiaires;

// nomStagiaires = stagiaire.map((object) =>{
//     fullname= object["nom"] + " " + object['prenom'];
//     return fullname
// });
// console.log(stagiaire)
// console.log(nomStagiaires)

let nomStagiaires

nomStagiaires = stagiaire.map((item, index, urstagiaires) =>{
    let st
    st = {...item, branche: "dd", id: index+1};
    if (item["age"] > 20) {
        st= {...st, remarque: "plius grand que 20"}
    } else {
        st= {...st, remarque: "plius petit que 20"}
    }
    return st;

});
console.log(nomStagiaires)

