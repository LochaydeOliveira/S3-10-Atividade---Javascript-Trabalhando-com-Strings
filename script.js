// EXERCÍCIO 01

let meuNome = "Lochayde"
let comprimentoMeuNome = meuNome.length

let frase = `Ex01: Olá! Meu nome é ${meuNome}, e ele possui ${comprimentoMeuNome} caracteres. `

// EXERCÍCIO 02

let preco = 15
let precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
let frase2 = `Ex02: O valor formatado de ${preco} é ${precoFormatado}.`


	//alert('O valor formatado de ' + preco + ' é ' + precoFormatado);



// EXERCÍCIO 03

let cumprimento = "Ex03: Bom dia"
let nome2 = "Rafael"
let sobrenome = "Almeida"
let mensagemCumprimento = `${cumprimento}, ${nome2} ${sobrenome}.`

console.log(frase)
console.log(frase2)
console.log(mensagemCumprimento)