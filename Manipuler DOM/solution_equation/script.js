// let a= Number(document.querySelector(".a").value);
// let b= Number(document.querySelector(".b").value);
// let c= Number(document.querySelector(".c").value)
// let d;
// let x0;
// let x1;
// let x2;


// let Delta = (a, b, c )=>{
//     d= (b**2)- 4*a*c;
//     return d
// }
// console.log(Delta)
// let calculex1=(a,b)=>{
//      x1= (b**2) - Math.sqrt(Delta) / (2*a)
// }
// let calculex2=(a,b)=>{
//     x2= (b**2) + Math.sqrt(Delta) / (2*a)
// }
// let calculex0=(a,b)=>{
//     x0= (b**2) / (2*a)
// }
// document.querySelector(".btn").addEventListener("click", Delta)
// if (d<0){
//     document.write("les solutions sont des nombres complexes")
// } else if(d>0){
//     document.write("les solutions sont : x1 =",calculex1 + "ou x2 =",calculex2)   
// } else {
//     document.write("la solution unioque est : x0 =",calculex0)   
// };
//  document.querySelector(".result").value= 


 document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault
    let a = Number(document.querySelector(".a").value);
    let b= Number(document.querySelector(".b").value);
    let c= Number(document.querySelector(".C").value);
    
    
  let delta =(b**2)- (4*a*c)
    let showResult = document.querySelector(".result");
     let parent = document.querySelector(".resolveur")

 if (delta>0){
    let x1;
    let x2;
    x1= (-b - Math.sqrt(delta))/2*a;
    x2= (-b + Math.sqrt(delta))/2*a;
    showResult.innerHTML= x1 +" ou "+ x2 
    parent.append(showResult);
}
 else if (delta=0){
    let x0
    x0=(-b)/2*a
    showResult.innerHTML= x0;
    parent.append(showResult);
}
 else {
    showResult.innerHTML= "les solutions sont des nombres complexes!";
    parent.append(showResult);
};

});


// document.querySelector(".activer-desacvtiver").addEventListener("click", function(){
//     let ancien= document.querySelector(".activer-desactiver").innerHTML;
//     let nouveau2 =document.querySelector(".activer-desactiver").innerHTML= "activer"
//     let nouveau1 =document.querySelector(".activer-desactiver").innerHTML= "desactiver"
//     if (ancien == nouveau1){
//         document.querySelector(".activer-desactiver").replaceChild(nouveau2)
//     } else if(ancien == nouveau2) {
//         document.querySelector(".activer-desactiver").replaceChild(nouveau1)
//     }

// })



