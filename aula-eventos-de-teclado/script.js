const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", () => {
    navPerfil.style.display = "block"
})


document.addEventListener("keyup", (e) => {
    console.log(e.code)
    console.log(e.key)
    if (e.code == "Digit1") {
        if(navPerfil.style.display == "block"){
            linkPerfilDados.click()
        }else{
            navPerfil.style.display = "block"
        }
    }
    if(e.code == "Escape") {
        navPerfil.style.display = "none"
    }
});


