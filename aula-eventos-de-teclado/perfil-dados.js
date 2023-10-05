const voltar = document.querySelector("main > p > a")

document.addEventListener("keyup", (key) => {
    console.log(key.code);
    if(key.code == "Backspace"){
        voltar.click()
        //window.location.href = "./index.html";
    }
})
