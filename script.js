console.clear();

var carta1 = {
	nome: "Bulbassauro",
	img:
		"https://repositorio.sbrauble.com/arquivos/in/pokemon_bkp/cd/105/314s_1.jpg",
	atributos: {
		atk: 7,
		def: 8,
		mp: 6
	}
};

var carta2 = {
	nome: "Charmander",
	img:
		"https://mypcards.com/img/2/221/pokemon_ltr_017/pokemon_ltr_017_en_thumb.jpg",
	atributos: {
		atk: 9,
		def: 6,
		mp: 4
	}
};

var carta3 = {
	nome: "Squirtle",
	img: "https://repositorio.sbrauble.com/arquivos/in/pokemon_bkp/cd/11/344.png",
	atributos: {
		atk: 7,
		def: 9,
		mp: 5
	}
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

var elementoResultado = document.getElementById("resultado");
var opcoes = document.getElementById("opcoes");

function sortearCarta() {
	var nmrMaquina = parseInt(Math.random() * 3);
	var nmrJogador = parseInt(Math.random() * 3);

	while (nmrMaquina == nmrJogador) {
		nmrJogador = parseInt(Math.random() * 3);
	}

	cartaMaquina = cartas[nmrMaquina];
	cartaJogador = cartas[nmrJogador];

	console.log(cartaMaquina);

	document.getElementById("btnSortear").disabled = true;
	document.getElementById("btnJogar").disabled = false;
	opcoes.innerHTML = "<img src='" + cartaJogador.img + "'><br>";
	exibirOpcoes();
}

function exibirOpcoes() {
	var opcoesTexto = "";

	for (var atributo in cartaJogador.atributos) {
		opcoesTexto +=
			"<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
	}
	opcoes.insertAdjacentHTML("beforeend", opcoesTexto);
}

function jogar() {
	var atributoSelecionado = obtemAtributo();
	if (atributoSelecionado == undefined) {
		return;
	}
	var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
	var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

	if (valorCartaJogador > valorCartaMaquina) {
		elementoResultado.innerHTML = "<img src='" + cartaMaquina.img + "'><br>";
		elementoResultado.insertAdjacentHTML(
			"beforeend",
			"<h2 style='color:green'>Você venceu!</h2>"
		);
	} else if (valorCartaMaquina > valorCartaJogador) {
		elementoResultado.innerHTML = "<img src='" + cartaMaquina.img + "'><br>";
		elementoResultado.insertAdjacentHTML(
			"beforeend",
			"<h2 style='color:red'>Você perdeu!</h2>"
		);
	} else {
		elementoResultado.innerHTML = "<img src='" + cartaMaquina.img + "'><br>";
		elementoResultado.insertAdjacentHTML(
			"beforeend",
			"<h2 style='color:black'>Você empatou!</h2>"
		);
	}
}

function obtemAtributo() {
	var radioAtributo = document.getElementsByName("atributo");
	for (i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked == true) {
			return radioAtributo[i].value;
		}
	}
	elementoResultado.innerHTML = "Você deve selecionar um atributo!";
}
