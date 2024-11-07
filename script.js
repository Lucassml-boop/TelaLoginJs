// Seleção dos elementos do DOM
let nome = document.querySelector("#nome");
let labelNome = document.querySelector('label[for="nome"]'); // Seleciona o label corretamente
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector('label[for="usuario"]'); // Seleciona o label corretamente
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confSenha = document.querySelector("#confSenha");
let labelConfSenha = document.querySelector("#labelConfSenha");
let validConfSenha = false;

// Função para alternar a visibilidade da senha
function togglePasswordVisibility(inputId) {
  let inputField = document.querySelector(inputId);

  if (inputField.getAttribute("type") === "password") {
    inputField.setAttribute("type", "text");
  } else {
    inputField.setAttribute("type", "password");
  }
}

// Adicionando o evento de clique para exibir ou ocultar a senha
document
  .querySelector("#verSenha")
  .addEventListener("click", () => togglePasswordVisibility("#senha"));
document
  .querySelector("#verConfirmSenha")
  .addEventListener("click", () => togglePasswordVisibility("#confSenha"));

// Função para validar um campo com base em tamanho mínimo
function validarCampo(input, label, minLength, labelText) {
  if (input.value.length < minLength) {
    label.setAttribute("style", "color:red");
    label.innerHTML = `${labelText} *Insira no mínimo ${minLength} caracteres`;
    label.style.fontSize = "11px";
    input.setAttribute("style", "border-color:red");
    return false; // Retorna false se a validação falhar
  } else {
    label.setAttribute("style", "color:green");
    label.innerHTML = labelText;
    input.setAttribute("style", "border-color:green");
    return true; // Retorna true se a validação passar
  }
}

// Validação dos campos com eventos de keyup
nome.addEventListener("keyup", () => {
  validNome = validarCampo(nome, labelNome, 3, "Nome"); // Atualiza validNome com o retorno da validação
});

usuario.addEventListener("keyup", () => {
  validUsuario = validarCampo(usuario, labelUsuario, 4, "Usuário"); // Atualiza validUsuario com o retorno da validação
});

// Validação de senha com comprimento mínimo de 6 caracteres
senha.addEventListener("keyup", () => {
  if (senha.value.length < 6) {
    labelSenha.setAttribute("style", "color:red");
    labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres";
    labelSenha.style.fontSize = "11px";
    senha.setAttribute("style", "border-color:red");
    validSenha = false; // Atualiza validSenha
  } else {
    labelSenha.setAttribute("style", "color:green");
    labelSenha.innerHTML = "Senha";
    labelSenha.style.fontSize = "11px";
    senha.setAttribute("style", "border-color:green");
    validSenha = true; // Atualiza validSenha
  }
});

// Validação de confirmação de senha
confSenha.addEventListener("keyup", () => {
  if (confSenha.value === "") {
    labelConfSenha.setAttribute("style", "color:red");
    labelConfSenha.innerHTML = "Confirmar Senha *Campo obrigatório";
    labelConfSenha.style.fontSize = "11px";
    confSenha.setAttribute("style", "border-color:red");
    validConfSenha = false; // Atualiza validConfSenha
  } else if (senha.value !== confSenha.value) {
    labelConfSenha.setAttribute("style", "color:red");
    labelConfSenha.innerHTML = "Confirmar Senha *As senhas não conferem";
    labelConfSenha.style.fontSize = "11px";
    confSenha.setAttribute("style", "border-color:red");
    validConfSenha = false; // Atualiza validConfSenha
  } else {
    labelConfSenha.setAttribute("style", "color:green");
    labelConfSenha.innerHTML = "Confirmar Senha";
    labelConfSenha.style.fontSize = "11px";
    confSenha.setAttribute("style", "border-color:green");
    validConfSenha = true; // Atualiza validConfSenha
  }
});

// Mensagem de erro e sucesso
let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

function cadastrar() {
  let listUser = JSON.parse(localStorage.getItem("listUser") || "[]");

  listUser.push({
    nomeCad: nome.value,
    userCad: usuario.value,
    senhaCad: senha.value,
  });

  localStorage.setItem("listUser", JSON.stringify(listUser));

  if (validNome && validUsuario && validSenha && validConfSenha) {
    msgError.style.display = "none"; // Esconde a mensagem de erro caso já tenha sido mostrada
    msgSuccess.style.display = "block";
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    setTimeout(() => {
        window.location.href = "login.html";
      }, 1500); // Redireciona após 1.5 segundos
  } else {
    msgSuccess.style.display = "none"; // Esconde a mensagem de sucesso caso já tenha sido mostrada
    msgError.style.display = "block";
    msgError.innerHTML ="<strong>Preencha todos os campos corretamente antes de concluir o cadastro...</strong>";
  }
}
