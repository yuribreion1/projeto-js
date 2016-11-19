var pacienteTr = document.getElementsByClassName("paciente");

percorreArray(pacienteTr, setaImc)

for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= pacienteTr.length -1; posicaoDoTrAtual++){
	var trAtual = pacienteTr[posicaoDoTrAtual];
	var nomeTd = trAtual.getElementsByClassName("info-nome")[0]; //pega nome da posicao atual
	var pesoTd = trAtual.getElementsByClassName("info-peso")[0]; //pega peso na posicao atual
	var alturaTd = trAtual.getElementsByClassName("info-altura")[0]; //pega peso na posicao atual

	var paciente = {
	nome : nomeTd.textContent,
	peso : pesoTd.textContent,
	altura : alturaTd.textContent,
	pegaImc : function(){ //adicionamos a função dentro da chave IMC, pois só queremos que ela seja executada dentro do objeto paciente -- função anonima
		if(this.altura != 0){
			var imcDoPaciente = this.peso / (this.altura * this.altura);
			return imcDoPaciente; //temos que retornar um valor para poder usar este valor
		} else{
			console.log("Não posso executar uma divisão por 0!");
		}
	}

	}
}


