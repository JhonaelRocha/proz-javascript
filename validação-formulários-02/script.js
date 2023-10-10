// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true;
  }
  console.log(inputsCorretos)
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos. email = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
  console.log(inputsCorretos)
})


// ----- VALIDAÇÃO DE SENHA ----- //


let senhaLabel = document.querySelector('label[for="senha"]');
let senhaInput = document.getElementById('senha');
let senhaHelper = document.getElementById('senha-helper');

togglePopup(senhaInput,senhaLabel);

senhaInput.addEventListener("blur", (event) => {
    let valorSenhaInput = event.target.value;
    if(valorSenhaInput != ""){
        estilizarInputCorreto(senhaInput,senhaHelper);
        inputsCorretos.senha = true;
        if(valorSenhaInput == confirmaSenhaInput.value){
            estilizarInputCorreto(confirmaSenhaInput,confirmaSenhaHelper);
        }
    }else{
        senhaHelper.innerText = "A senha não pode ser vazia"
        estilizarInputIncorreto(senhaInput,senhaHelper);
        inputsCorretos.senha = false;
    }
    console.log(inputsCorretos)
})


// ----- VALIDAÇÃO CONFIRMAR SENHA ----- //

let confirmaSenhaInput = document.getElementById('confirma-senha');
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');

console.log(confirmaSenhaHelper,confirmaSenhaInput,confirmaSenhaLabel);
togglePopup(confirmaSenhaInput,confirmaSenhaLabel);

confirmaSenhaInput.addEventListener("blur", (event) => {
    let valorConfirmaSenha = event.target.value;

    if(valorConfirmaSenha == senhaInput.value){
        estilizarInputCorreto(confirmaSenhaInput,confirmaSenhaHelper);
        inputsCorretos.confimaSenha = true;
    }else{
        confirmaSenhaHelper.innerText = "As senhas precisam ser iguais";
        estilizarInputIncorreto(confirmaSenhaInput,confirmaSenhaHelper);
        inputsCorretos.confimaSenha = false;
    }
    console.log(inputsCorretos.confimaSenha)
})

// ----- EVITAR ENVIO DO FORMULÁRIO ----- //

let btnSubmit = document.querySelector('button[type="submit"]');

let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confimaSenha: false
}


btnSubmit.addEventListener("click", (event) => {
    if(inputsCorretos.username == false || 
        inputsCorretos.email == false || 
        inputsCorretos.senha == false || 
        inputsCorretos.confimaSenha == false){
        event.preventDefault();
        alert("Os campos do formulário devem ser preenchidos corretamente.")
    }else{
        alert("Formulário enviado com sucesso.");
    }
})