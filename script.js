console.log("JavaScript conectado!");


const formulario = document.getElementById("formulario");

const cpf = document.getElementById("cpf");

const telefone = document.getElementById("telefone");

const cep = document.getElementById("cep");

const senha = document.getElementById("senha");

const confirmarSenha = document.getElementById("confirmar_senha");


// ============================================================
// MÁSCARA DO CPF
// ============================================================

cpf.addEventListener("input", function () {

    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");

    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;

});


// ============================================================
// MÁSCARA DO TELEFONE
// ============================================================

telefone.addEventListener("input", function () {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    telefone.value = valor;

});


// ============================================================
// MÁSCARA DO CEP
// ============================================================

cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

    cep.value = valor;

});


// ============================================================
// VALIDAÇÃO DO CPF
// ============================================================

function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {

        soma += Number(cpf.charAt(i)) * (10 - i);

    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {

        soma += Number(cpf.charAt(i)) * (11 - i);

    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf.charAt(10))) {
        return false;
    }

    return true;

}


// ============================================================
// ENVIO DO FORMULÁRIO
// ============================================================

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    // Verifica o CPF

    if (!validarCPF(cpf.value)) {

        alert("Digite um CPF válido.");

        cpf.focus();

        return;

    }


    // Verifica se as senhas são iguais

    if (senha.value !== confirmarSenha.value) {

        alert("As senhas não são iguais.");

        confirmarSenha.focus();

        return;

    }


    // Cadastro aprovado

    alert("Cadastro realizado com sucesso!");

});