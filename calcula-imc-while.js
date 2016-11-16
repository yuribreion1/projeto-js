var nossosTrs = document.getElementsByClassName("paciente");
var posicaoDoTrAtual = 0;

while(posicaoDoTrAtual <= nossosTrs.length -1){
	var trAtual = nossosTrs[posicaoDoTrAtual];
	var nomeTd = trAtual.getElementsByClassName("info-nome")[0]; //pega nome da posicao atual
	var pesoTd = trAtual.getElementsByClassName("info-peso")[0]; //pega peso na posicao atual
	var alturaTd = trAtual.getElementsByClassName("info-altura")[0]; //pega peso na posicao atual
	var imcTd = trAtual.getElementsByClassName("info-imc")[0];

	var paciente = {
	nome : nomeTd.textContent,
	peso : pesoTd.textContent,
	altura : alturaTd.textContent
}

	if(paciente.altura != 0){
		var imcDoPaciente = paciente.peso / (paciente.altura * paciente.altura);
		imcTd.textContent = imcDoPaciente;
		console.log(imcDoPaciente);
	} else{
		console.log("Não posso executar uma divisão por 0!");
	}
	posicaoDoTrAtual++;
}


