var nossosTrs = document.getElementsByClassName("paciente");

for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length -1; posicaoDoTrAtual++){
	var trAtual = nossosTrs[posicaoDoTrAtual];
	var nomeTd = trAtual.getElementsByClassName("info-nome")[0]; //pega nome da posicao atual
	var pesoTd = trAtual.getElementsByClassName("info-peso")[0]; //pega peso na posicao atual
	var alturaTd = trAtual.getElementsByClassName("info-altura")[0]; //pega peso na posicao atual

	var paciente = {
	nome : nomeTd.textContent,
	peso : pesoTd.textContent,
	altura : alturaTd.textContent };

	var imc = calculaImc(paciente); //calculamos o imc usando o paciente como parametro e gravando dentro de imc

	var imcTd = trAtual.getElementsByClassName("info-imc")[0];
	imcTd.textContent = imc; //imprimindo o valor de imc nas TD's

}
function calculaImc(paciente){ //criando uma função que tem somente o calculo do IMC
		if(paciente.altura != 0){
			var imcDoPaciente = paciente.peso / (paciente.altura * paciente.altura);
			return imcDoPaciente;
		} else{
			console.log("Não posso executar uma divisão por 0!");
		}
	}


