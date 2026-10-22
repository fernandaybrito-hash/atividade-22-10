// function verificar (a, b){
//     if(isNaN(a) || isNaN(b) ){
//         alert("Digite um número!")
//         return false
//     }
//     return true
// }

// // soma
// function soma(a, b) {
//     return a + b;
// }
// let n1 = Number(prompt("Digite o primeiro número para sua soma:"))
// let n2 = Number(prompt("Digite o segundo número para sua soma:"))
// let resultadoSoma = soma(n1, n2)

// if(verificar(n1, n2 )){
//     alert("O resultado é: " + resultadoSoma);
// };

// // subtração
// function subtracao(c, d) {
//     return c - d;
// }
// let n3 = Number(prompt("Digite seu primeiro número para sua subtração:"))
// let n4 = Number(prompt("Digite seu segundo número para sua subtração:"))
// let resultadoSubtracao = subtracao(n3, n4)

// if(verificar(n3, n4 )){
//     alert("O resultado é: " + resultadoSubtracao);
// };

// // multiplicação
// function multiplicacao(e, f) {
//     return e * f;
// }
// let n5 = Number(prompt("Digite seu primeiro número para sua multiplicação:"))
// let n6 = Number(prompt("Digite seu segundo número para sua multiplicação:"))
// let resultadoMultiplicacao = multiplicacao(n5, n6)

// if(verificar(n5, n6 )){
//     alert("O resultado é: " + resultadoMultiplicacao);
// };

// // divisão
// function divisao(g, h) {
//     return g / h;
// }
// let n7 = Number(prompt("Digite seu primeiro número para sua divisão:"))
// let n8 = Number(prompt("Digite seu segundo número para sua divisão:"))
// let resultadoDivisao = divisao(n7, n8)

//  if(verificar(n7, n8 )){
//     alert("O resultado é: " + resultadoDivisao)
//  };


function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function verificar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    }
    return true;
}

function verificarAprovacao(media) {
    if (media >= 7) {
        alert("Aprovado!");
    } else if (media >= 5) {
        alert("Recuperação!");
    } else {
        alert("Reprovado!");
    }
}

let comeco = prompt("Vamos calcular sua média?");

while (
    comeco !== null &&
    comeco.toLowerCase().trim() !== "sim" &&
    comeco.toLowerCase().trim() !== "nao" &&
    comeco.toLowerCase().trim() !== "não"
) {
    comeco = prompt("Não entendi. Sim ou não?");
}

if (comeco !== null && comeco.toLowerCase().trim() === "sim") {
    let n1, n2, n3;

    do {
        n1 = Number(prompt("Digite sua primeira nota:"));
        n2 = Number(prompt("Digite sua segunda nota:"));
        n3 = Number(prompt("Digite sua terceira nota:"));

        if (!verificar(n1, n2) || isNaN(n3)) {
            alert("Digite apenas números nas três notas!");
        }
    } while (isNaN(n1) || isNaN(n2) || isNaN(n3));

    let media = calcularMedia(n1, n2, n3);

    alert("Sua média é: " + media.toFixed(1));
    verificarAprovacao(media);

} else if (comeco !== null) {
    alert("Então tchau!");
}






