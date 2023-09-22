let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
function atualizarTotal(){
    valorSubtotal.innerText = (quantidadeProduto01.value * subtotalInfo.valor).toFixed(2)
}
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;
// ------ VARIAVEIS------------ //

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01")
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")

let btnRemoveProduto = document.querySelector('#btn-subtrair-produto-01')
// ------ FUNÇÕES -------------- //
valorSubtotal.innerText = (quantidadeProduto01.value * 11.66).toFixed(2)
function adicionarUm() {
    
    quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1
    if(quantidadeProduto01.value == 0){
        quantidadeSubtotal.innerText = "Nada aqui."
    }
    else if(quantidadeProduto01.value > 1){
        quantidadeSubtotal.innerText = quantidadeProduto01.value + " itens";
    }else{
        quantidadeSubtotal.innerText = quantidadeProduto01.value + " item";
    }
    atualizarTotal()
}
function RemoverUm(){
    if(quantidadeProduto01.value > 0){
        quantidadeProduto01.value -= 1
        if(quantidadeProduto01.value == 0){
            quantidadeSubtotal.innerText = "Nada aqui."
        }
        else if(quantidadeProduto01.value > 1){
            quantidadeSubtotal.innerText = quantidadeProduto01.value + " itens";
        }else{
            quantidadeSubtotal.innerText = quantidadeProduto01.value + " item";
        }
    }
    valorSubtotal.innerText = (quantidadeProduto01.value * 11.66).toFixed(2)
    atualizarTotal()
}
// -------EVENTO --------------//


btnAddProduto01.addEventListener("click",adicionarUm)
btnRemoveProduto.addEventListener("click",RemoverUm)