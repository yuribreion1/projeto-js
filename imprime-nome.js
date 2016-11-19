var pacienteTr = document.getElementsByClassName("paciente");

percorreArray(pacienteTr, imprimeNome);

function imprimeNome(paciente){

	var tdNome = paciente.getElementsByClassName("info-nome")[0];

	var pacienteAtual = { nome : tdNome.textContent };
	console.log(pacienteAtual.nome);
}