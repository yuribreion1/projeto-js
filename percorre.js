function percorreArray(pacienteTr, imprimeNome){
	for (var posicaoAtual = 0; posicaoAtual <= pacienteTr.length - 1; posicaoAtual++) {

		var pacienteAtual = pacienteTr[posicaoAtual];
		imprimeNome(pacienteAtual);
		
	}
}