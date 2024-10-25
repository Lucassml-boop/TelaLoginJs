// Função para alternar a visibilidade da senha
function togglePasswordVisibility(inputId) {
    let inputField = document.querySelector(inputId);
    
    if (inputField.getAttribute('type') === 'password') {
      inputField.setAttribute('type', 'text');
    } else {
      inputField.setAttribute('type', 'password');
    }
  }
  
  // Adicionando o evento de clique para exibir ou ocultar a senha
  document.querySelector('#verSenha').addEventListener('click', () => togglePasswordVisibility('#senha'));
  document.querySelector('#verConfirmSenha').addEventListener('click', () => togglePasswordVisibility('#confSenha'));
  
  // Função para validar um campo com base em tamanho mínimo
  function validarCampo(input, label, minLength, labelText) {
    if (input.value.length < minLength) {
      label.setAttribute('style', 'color:red');
      label.innerHTML = `${labelText} *Insira no mínimo ${minLength} caracteres`;
      label.style.fontSize = '11px';
      input.setAttribute('style', 'border-color:red');
    } else {
      label.setAttribute('style', 'color:green');
      label.innerHTML = labelText;
      input.setAttribute('style', 'border-color:green');
    }
  }
  
  // Validação dos campos com eventos de keyup
  let nome = document.querySelector('#nome');
  let labelNome = document.querySelector('#labelNome');
  let usuario = document.querySelector('#usuario');
  let labelUsuario = document.querySelector('#labelUsuario');
  let senha = document.querySelector('#senha');
  let labelSenha = document.querySelector('#labelSenha');
  let confSenha = document.querySelector('#confSenha');
  let labelConfSenha = document.querySelector('#labelConfSenha');
  
  nome.addEventListener('keyup', () => validarCampo(nome, labelNome, 3, 'Nome'));
  usuario.addEventListener('keyup', () => validarCampo(usuario, labelUsuario, 4, 'Usuário'));
  
  // Validação de senha com comprimento mínimo de 6 caracteres
  senha.addEventListener('keyup', () => {
    if (senha.value.length < 6) {
      labelSenha.setAttribute('style', 'color:red');
      labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres';
      labelSenha.style.fontSize = '11px';
      senha.setAttribute('style', 'border-color:red');
    } else {
      labelSenha.setAttribute('style', 'color:green');
      labelSenha.innerHTML = 'Senha';
      senha.setAttribute('style', 'border-color:green');
    }
  });
  
  // Validação de confirmação de senha
  confSenha.addEventListener('keyup', () => {
    if (senha.value !== confSenha.value) {
      labelConfSenha.setAttribute('style', 'color:red');
      labelConfSenha.innerHTML = 'Confirmar Senha *As senhas não conferem';
      labelConfSenha.style.fontSize = '11px';
      confSenha.setAttribute('style', 'border-color:red');
    } else {
      labelConfSenha.setAttribute('style', 'color:green');
      labelConfSenha.innerHTML = 'Confirmar senha';
      confSenha.setAttribute('style', 'border-color:green');
    }
  });
  
  // Função de cadastro (em desenvolvimento)
  function cadastrar() {
    // Lógica de envio do formulário pode ser implementada aqui
    alert('Cadastro enviado');
  }
  