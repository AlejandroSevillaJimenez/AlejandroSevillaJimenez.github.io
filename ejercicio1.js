'use strict';

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("tabla")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++)
		tabla.innerHTML += "<div class = 'fila'>" + libros[i].textContent + "<div class = 'celda'>" + libros[i].querySelector("ISBN");

}

let capa = document.querySelector("div:nth-child(1)")
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
}

gestionarFicheroXML(libros);
