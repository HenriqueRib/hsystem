comandosJS.js

alert('teste'); //igual o echo , printf


// para chamar um arquivo js pelo html
 <script src="jogo.js"></script>  

// aqui consigo dimencionar o tamanho da pagina real da aplicação que será feita

var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight;
	largura = window.innerWidth;

	console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

// -> no arquivo .html chamo a função <body onresize="ajustaTamanhoPalcoJogo()">


// Math.floor serve para arredondar o resultado
var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

// função que é chamada dentro do body <script>posicaoRandomica()</script>

function posicaoRandomica() {// atravez da function o erro de body null não acontece 

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90


VERIFICO SE posicaoX É MENOR QUE 0 ? (SE FOR) RECEBE 0 :(SE NÃO RECEBELA ELA MESMO) posicaoX

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html

	var mosquito = document.createElement('img')

	// aqui podemos acessar contedos css atraves do JS e concatenar com atributos gerado pelo JavaScript
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px' 
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)
	
}
// para imprimir seu valor ao apertar F12 no navegador
console.log(NOMEDAVARIAVEL)


//
function tamanhoAleatorio() {

// não precisa de break pois ele já retorna
//multiplica por 3 nos da tres opções 
	var classe = Math.floor(Math.random() * 3)
	
	switch (classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2: 
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch (classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}


//css
.ladoA{
	transform: scalex(1); /*não muda possição , afim didatico*/
}

.ladoB{
	transform: scalex(-1);
}


//Remove o mosquio caso ele exista (na Function posicaoRandomica )
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
	}
	mosquito.id = 'mosquito'


// no html podemos refazer uma ação () 1000 )representando por 1 segundo
<script>
			setInterval(function(){
				posicaoRandomica()
			},1000 )</script>


// Inclusão do background
body {
	background-image: url(imagens/bg.jpg);
	background-repeat: no-repeat;
}


// Redireciona para uma página
window.location.href

// pega tudo o que contem ?eavariavel 
window.location.search
alert(window.location.search.replace('?' , '')) // retira o ? e subistitue por ''