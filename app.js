let destinacija=document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);
let element=document.getElementsByTagName("li");
console.log(element);
let wrap=document.querySelector("#wrapper");
console.log(wrap);
let nekeDestinacije=document.querySelectorAll(".naziv");
console.log(nekeDestinacije);
let listaDestinacija=document.querySelector("#lista-destinacija");
console.log("roditelj ovog cvora je",listaDestinacija.parentNode);

let listaDestinacija2=document.querySelector("#lista-destinacija");
console.log("Ovo su djeca tog cvora", listaDestinacija2.children);

let listaDestinacija3=document.querySelector("#lista-destinacija");
console.log("Next sibling is:",listaDestinacija3.nextElementSibling);
console.log("previous sibling is:",listaDestinacija3.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log("banner node name is:", banner.nodeName);
console.log("banner node name is:", banner.nodeType);

let destinacijaFrancuska=document.querySelector(".naziv");
destinacijaFrancuska.textContent="Beograd";
var dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);