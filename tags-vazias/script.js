const titulo = document.getElementById('titulo');
const ul = document.querySelector('ul');
const a = document.querySelector('a');
const ol = document.querySelector('#lista-ordenada');
titulo.innerText = 'Proz Educação'
ul.innerHTML = 
`
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`

a.innerText = 'Link da Proz'
ol.innerHTML =
`
<li><a href="https://www.youtube.com/?gl=BR">YouTube</a></li>
<li><a href="https://www.google.com.br/">Google</a></li>
<li><a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal">Wikipedia</a></li>
`