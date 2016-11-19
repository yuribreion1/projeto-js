var pacienteTr = document.getElementsByClassName("paciente");

percorreArray(pacienteTr, function(paciente){

	var tdNome = paciente.getElementsByClassName("info-nome")[0];
	var tdPeso = paciente.getElementsByClassName("info-peso")[0];
	var tdAltura = paciente.getElementsByClassName("info-altura")[0];

	var pacienteAtual = { 	nome : tdNome.textContent, 
							peso : tdPeso.textContent, 
							altura : tdAltura.textContent,
							pegaImc : function() {
								if(this.altura != 0 ){
									var imc = this.peso / (this.altura * this.altura);
									return imc;
								} else {
									console.log("Não podemos dividir valor por zero");
								}
							}
						}
					

		var imc = pacienteAtual.pegaImc(); //neste formato agora, sem passagem de parametro temos uma função como um getter

		var imcTd = paciente.getElementsByClassName("info-imc")[0];
		imcTd.textContent = imc; //imprimindo o valor de imc nas TD's
		console.log(imc);
	});

