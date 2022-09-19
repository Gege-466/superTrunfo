var carta1 = {
    nome: "Homem de ferro",
    atributos: {
        força: 7,
        velocidade: 6,
        equipamento: 10,
        inteligencia: 9,
    }
}

var carta2 = {
    nome: "Capitão américa",
    atributos: {
        força: 8,
        velocidade: 7,
        equipamento: 5,
        inteligencia: 7,
    }
}

var carta3 = {
    nome: "Thor",
    atributos: {
        força: 9,
        velocidade: 6,
        equipamento: 7,
        inteligencia: 5,
    }
}

var carta4 = {
    nome: "Viúva negra",
    atributos: {
        força: 7,
        velocidade: 6,
        equipamento: 8,
        inteligencia: 8,
    }
}

var carta5 = {
    nome: "Hulk",
    atributos: {
        força: 10,
        velocidade: 6,
        equipamento: 2,
        inteligencia: 4,
    }
}

var carta6 = {
    nome: "Gavião arqueiro",
    atributos: {
        força: 7,
        velocidade: 6,
        equipamento: 8,
        inteligencia: 8,
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas [numeroMaquina]

    var numeroJogador = parseInt(Math.random() * 6)
    while (numeroMaquina == numeroJogador) {
        numeroJogador = parseInt(Math.random() * 6)
    }
    cartaJogador = cartas[numeroJogador]
    console.log (cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")

    for ( var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "VOCE VENCEU"
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "VOCE PERDEU"
    } else {
        elementoResultado.innerHTML = "EMPATOU"
    }
    console.log(cartaMaquina)
}

