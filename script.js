
const print = (texto) => {
    console.log(texto);
    document.getElementById("saida").textContent += texto + "\n";
};

window.clearDiv = () => {
    document.getElementById("saida").textContent = "Aguardando resultados...";
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Exercício 1: Verificador de número positivo/negativo
document.getElementById("btnNumero").addEventListener("click", async () => {
    let numeroDigitado = prompt("Digite um número:");
    numeroDigitado = Number(numeroDigitado);

    if (isNaN(numeroDigitado)) {
        print("Você não digitou um número válido.");
    } else if (numeroDigitado > 0) {
        print("O número é positivo.");
    } else if (numeroDigitado < 0) {
        print("O número é negativo.");
    } else {
        print("O número é zero.");
    }

    await sleep(1000);
});

// Exercício 2: Verificador de maioridade
document.getElementById("btnMaioridade").addEventListener("click", async () => {
    let idade = prompt("Digite sua idade:");
    idade = Number(idade);

    if (isNaN(idade)) {
        print("Por favor, digite uma idade válida.");
    } else if (idade >= 18) {
        print("Você é maior de idade.");
    } else {
        print("Você é menor de idade.");
    }

    await sleep(1000);
});

// Exercício 3: Contagem progressiva de 1 até 10
document.getElementById("btnContagem").addEventListener("click", async () => {
    print("Contagem progressiva de 1 até 10:");
    for (let i = 1; i <= 10; i++) {
        print(i);
        await sleep(300);
    }

    await sleep(500);
});

// Exercício 4: Tabuada de um número
document.getElementById("btnTabuada").addEventListener("click", async () => {
    let numero = Number(prompt("Digite um número para ver sua tabuada:"));

    if (isNaN(numero)) {
        print("Você não digitou um número válido.");
        return;
    }

    print(`\nTabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        print(`${numero} x ${i} = ${numero * i}`);
        await sleep(100);
    }

    await sleep(500);
});


// Exercício 5: Contagem regressiva de 10 até 1
document.getElementById("btnContagemRegressiva").addEventListener("click", async () => {
    print("Contagem regressiva de 10 até 1:");
    let contador = 10;
    while (contador >= 1) {
        print(contador);
        contador--;
        await sleep(300);
    }

    await sleep(500);
});

// Exercício 6: Verificação de senha
document.getElementById("btnSenha").addEventListener("click", async () => {
    let senha;
    do {
        senha = prompt("Digite a senha:");
    } while (senha !== "1234");

    alert("Acesso permitido!");
    print("Senha correta: acesso permitido!");

    await sleep(500);
});

// Exercício 7: Soma de dois números
document.getElementById("btnSoma").addEventListener("click", async () => {
    function somar(a, b) {
        return a + b;
    }

    let resultado = somar(10, 15);
    print(`\nA soma de 10 + 15 é: ${resultado}`);
});

// Exercício 8: Verificar se número é par
document.getElementById("btnEhPar").addEventListener("click", async () => {
    const ehPar = numero => numero % 2 === 0;

    let entrada = prompt("Digite um número para verificar se é par:");
    let numero = Number(entrada);

    if (isNaN(numero)) {
        print("Você não digitou um número válido.");
    } else {
        print(`ehPar(${numero}) → ${ehPar(numero)}`);
    }

    await sleep(500);
});


// Exercício 9: Somar números até um limite
document.getElementById("btnSomarAte").addEventListener("click", async () => {
    function somarAte(limite) {
        let soma = 0;
        for (let i = 1; i <= limite; i++) {
            soma += i;
        }
        return soma;
    }

    print(`\nSoma de 1 até 10: ${somarAte(10)}`);
});

// Exercício 10: Verificar se número é primo
// Exercício 10: Verificar se número é primo
document.getElementById("btnEhPrimo").addEventListener("click", async () => {
    function ehPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    let entrada = prompt("Digite um número para verificar se é primo:");
    let numero = Number(entrada);

    if (isNaN(numero) || !Number.isInteger(numero)) {
        print("Por favor, digite um número inteiro válido.");
    } else {
        print(`ehPrimo(${numero}) → ${ehPrimo(numero)}`);
    }

    await sleep(500);
});

