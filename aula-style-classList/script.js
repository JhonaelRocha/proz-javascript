

const h2 = document.querySelector('h2');

h2.style.color = "blue";
h2.style.fontSize = "40px";

const button = document.querySelector('button');
button.style = styles();

/*Testes */
function styles(){
    style = document.createElement('style');

    style =
    `
    color: blue;
    background-color: transparent;
    border-radius: 10px;
    
    `
    return style;
}
/*Fim dos Testes */


const userNameInput = document.querySelector('#login-usuario');
userNameInput.classList.add('correct');

const senha = document.querySelector('#login-senha');
senha.classList.add('error');

const errorText = document.querySelectorAll('.error-text')[1];
errorText.classList.add('visible');