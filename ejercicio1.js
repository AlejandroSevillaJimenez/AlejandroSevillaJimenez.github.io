'use strict';

loadDocA("libros.xml", "xml");

function gestionarFicheroXML(xmlDoc){
	let tabla = document.querySelector("tabla");
	let libros = xmlDoc.querySelectorAll("libro");
	for(let i=0; i<libros.length; i++)
		tabla.innerHTML += "<div class = 'fila'>" + libros[i].textContent + "<div class = 'celda'>";
}

capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}
