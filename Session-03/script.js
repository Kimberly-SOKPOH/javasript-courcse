let x = "DD";
let abv;
switch (x){
    case "DD":
        abv = "développement Digital";
        break;
    case "ID":
        abv = "Infrastructure Digital";
        break;
    case "WD":
        abv = "Web Design";
        break;
    default :
         abv = "Cette filiere n'existe pas"

}
console.log(abv) 



jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]

for (i=0;i<=4; i++){
    console.log(jour[i])
}
for (item in jour){
    console.log(jour[item])
}
for (jr of jour){
    console.log(jour(jr))
}


let txt ="";

jours.forEach(myFuncton);

function myFunction(value, index, array) {
    txt+=value+"";
}
console.log(txt)


let n = 10;
while (n>=0){
    console.log(n)
    n = n - 1
}

do{
    console.log(n)
    n = n - 1
}
while (n >= 0)


//declaration 

for (let i = 0; i < 10; i++) 
{
if (i === 3) { break; }
text += "The number is " + i + "<br>";
}