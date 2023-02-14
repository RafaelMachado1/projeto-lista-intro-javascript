// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
//  Escreva uma função que recebe dois números e retorna a soma deles.
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
//Escreva uma função que pede ao usuário uma mensagem e a imprime no console.
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// Escreva dentro da função calculaAreaRetangulo uma lógica que pede ao usuário a 
//altura e a largura (nessa ordem) de um retângulo e imprime no console a área do 
//retângulo.
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  altura = prompt("Digite a ltura do retângulo")
  largura = prompt("Digite a largura do retângulo")

  area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
//  Escreva dentro da função imprimeIdade uma lógica que pede ao usuário o ano 
// atual e seu ano de nascimento e imprima no console sua idade.
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual:")
  const anoNascimento = prompt("Digite o ano de seu nascimento")

  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
//   Escreva dentro da função calculaIMC uma lógica que recebe o peso em kg e a 
//altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)
}

// EXERCÍCIO 04
// Escreva dentro da função imprimeInformacoesUsuario uma lógica que pede ao 
//usuário seu nome, sua idade e seu email (nessa ordem), e imprime no console 
//uma mensagem como a seguinte:
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:")
  const idade = prompt("Digite seua idade:")
  const email = prompt("Digite seu email:")

  const resposta = console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
//   Escreva dentro da função imprimeTresCoresFavoritas uma lógica que pergunta 
//ao usuário suas três cores favoritas e imprime no console um array que contenha 
//essas três cores.
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt("Digite sua primeira cor favorita:")
  const corDois = prompt("Digite sua segunda cor favorita:")
  const corTres = prompt("Digite sua terceira cor favorita:")

  const coresFavoritas = [corUm, corDois, corTres]

  console.log(coresFavoritas)

}


// EXERCÍCIO 06
//  Escreva dentro da função retornaStringEmMaiuscula uma lógica que recebe uma 
// string e retorna ela em letra maiúscula.
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}

// EXERCÍCIO 07
//  Escreva dentro da função calculaIngressosEspetaculo uma lógica que recebe o 
//custo de um espetáculo de teatro e o valor de cada ingresso 
//(considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos 
//precisam ser vendidos para que o espetáculo não dê prejuízo.
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}


// EXERCÍCIO 08
// Escreva dentro da função checaStringsMesmoTamanho uma lógica que recebe duas 
//strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo 
//tamanho.
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
//   Escreva dentro da função retornaPrimeiroElemento uma lógica que recebe um 
//array e retorna o primeiro elemento.
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array [0]
}

// EXERCÍCIO 10
//  Escreva dentro da função retornaUltimoElemento uma lógica que recebe um array 
//e retorna o último elemento.
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length -1]
}

// EXERCÍCIO 11
//   Escreva dentro da função trocaPrimeiroEUltimo uma lógica que recebe um array 
//e retorna um array com o primeiro e o último elemento trocados.
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let inverter = array [array.length -1]

  array [array.length -1] = array [0]
  array [0] = inverter

}
//teste 11
let testeInverter = ["ola","abc","rodrigo"]
console.log(trocaPrimeiroEUltimo(testeInverter))


// EXERCÍCIO 12
//  Escreva dentro da função checaIgualdadeDesconsiderandoCase uma lógica que 
//recebe duas strings e retorna um booleano (true ou false) indicando se elas são 
//iguais, desconsiderando letras maiúsculas ou minúsculas.
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}


// EXERCÍCIO 13
//  Escreva dentro da função checaRenovacaoRG uma lógica que pergunta ao usuário o 
//ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de 
//identidade foi emitida (nesta ordem). A função deve imprimir no console um 
//booleano (true ou false) que indica se a carteira precisa ser renovada ou não. 
//A carteira precisa ser renovada segundo os seguintes critérios:

//* Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, também deve ser renovada).
//* Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, também deve ser renovada).
//* Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Digite o ano em que estamos:")
  let anoNascimento = prompt("Digite seu ano de nascimento:")
  let anoEmitida = prompt("Digite o ano em que seu RG foi emitido:")

  let idadePessoa = anoAtual - anoNascimento
  let tempoRg = anoAtual - anoEmitida

  let caso1 = idadePessoa <= 20 && tempoRg >= 5
  let caso2 = idadePessoa > 20 && idadePessoa <= 50 && tempoRg >= 10
  let caso3 = idadePessoa > 50 && tempoRg >= 15

  console.log(caso1 || caso2 || caso3)
}


// EXERCÍCIO 14
//  Escreva dentro da função checaAnoBissexto uma lógica que recebe um ano e 
//retorna um booleano (true ou false) que indica se o ano é bissexto. 
//Um ano é bissexto de acordo com as seguintes condições:

//* São bissextos todos os anos múltiplos de 400.
//* São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não 
//de 400.
//* Não são bissextos todos os demais anos.
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ehMultiplo400 = ano % 400 === 0
  ehMultiplo4 = (ano % 4 === 0) &&  (ano % 100 !== 0)

  ehBissexto = ehMultiplo400 || ehMultiplo4

  console.log(ehMultiplo400, ehMultiplo4)

  return ehBissexto
}


// EXERCÍCIO 15
//  Escreva dentro da função checaValidadeInscricaoLabenu uma lógica que faz as 
//seguintes perguntas ao usuário 
//(condições para ser uma pessoa estudante da Labenu):

//* Você tem mais de 18 anos?
//* Você possui ensino médio completo?
//* Você possui disponibilidade exclusiva durante os horários do curso?

//O usuário deve responder essas perguntas com "sim" ou "nao".

//A função deve imprimir no console um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todas as respostas para todas as perguntas forem positivas.
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  checa1 = idade === "sim"
  checa2 = ensinoMedio === "sim"
  checa3 = disponibilidade === "sim"

  console.log(checa1 && checa2 && checa3)
}