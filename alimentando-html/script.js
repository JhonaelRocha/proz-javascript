//Jeito Simples

const body = document.querySelector('body');
body.innerHTML =
`
<div class=produto_container>
    <h1 id="titulo">Titulo</h1>
    <div class="produto">
        <h2>Nome do Produto</h2>
        <p>Descrição: Produto muito legal</p>
        <p>R$ 20,00</p>
    </div>
</div>
`

//Jeito Complexo
function build(){
    const produto_container = document.createElement('div')
    produto_container.className = "produto_container"

    const titulo = document.createElement('h1')
    titulo.id = "titulo"
    produto_container.appendChild(titulo)

    const produto = document.createElement('div')
    produto.className = "produto"
    produto_container.appendChild(produto)

    const nome = document.createElement('h2')
    nome.innerText = "Nome do Produto"
    produto.appendChild(nome)

    const descricao = document.createElement('p')
    descricao.innerText = "Descrição: Produto muito legal"
    produto.appendChild(descricao)

    const preco = document.createElement('p')
    preco.innerText = "R$ 20,00"
    produto.appendChild(preco)

    return produto_container
}
body.appendChild(document.createElement('br'))
body.appendChild(build())