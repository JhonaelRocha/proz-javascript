// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
function mostrarPopup(input,label){
    input.addEventListener("focus",function() {
        label.classList.add("required-popup")
    })
    
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur",function() {
        label.classList.remove("required-popup")
    })
}
mostrarPopup(usernameInput,usernameLabel)


// Validar valor do input
usernameInput.addEventListener('change', function(event){
    let valor = event.target.value
    console.log(valor)
    if(valor.length < 3){
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameInput.classList.remove("correct")
        usernameHelper.innerText = "O Username precisa ter no mínimo 3 caracteres"
    }else{
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})

//Validar Email
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

mostrarPopup(emailInput,emailLabel)


emailInput.addEventListener("change", function(e){
    let valor = e.target.value;
    console.log(valor)

    if(valor.length > 5 && valor.includes("@") && (valor.includes(".com") || valor.includes(".gov"))){
        emailInput.classList.add("correct")
        emailInput.classList.remove("error")
        emailHelper.classList.remove("visible")
    }else{
        emailHelper.innerText = "Email inválido"
        emailHelper.classList.add("visible")
        emailInput.classList.add("error")
        emailInput.classList.remove("correct")
    }
})