var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e){

	e.preventDefault();

var pacienteNome = document.querySelector("#campo-nome");
var pacientePeso = document.querySelector("#campo-peso");
var pacienteAltura = document.querySelector("#campo-altura");

var pacienteNovo = 	"<tr class='paciente'>" +  
					"<td class='info-nome' >" + pacienteNome.value + "</td>" +
					"<td class='info-peso' >" + pacientePeso.value + "</td>" + 
					"<td class='info-altura' >" + pacienteAltura.value + "</td>" + 
					"<td class='info-imc' >" + pacientePeso.value / (pacienteAltura.value * pacienteAltura.value) + "</td>" +				
					"</tr>";

var tabela = document.querySelector("table"); //seleciona sempre o primeiro elemento
tabela.innerHTML += pacienteNovo;

pacienteNome.value = " ";
pacientePeso.value = " ";
pacienteAltura.value = " ";

});