//Essas linhas obtêm os nomes dos jogadores armazenados na 
//memória local do navegador 
//(usando o método localStorage.getItem - O método getItem é usado para recuperar um valor armazenado previamente no localStorage com base na chave fornecida.)
//Os nomes dos jogadores são armazenados sob as chaves 
//  "nomeJogador1" e "nomeJogador2".

var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");

//guarda os pontos
var pontosJogador1 = 0;
var pontosJogador2 = 0;

//Essas linhas atualizam o conteúdo de elementos HTML com os 
//IDs "nomeJogador1" e "nomeJogador2" para mostrar os nomes 
//dos jogadores seguidos por ":"

document.getElementById("nomeJogador1").innerHTML = nomeJogador1  + ":";
document.getElementById("nomeJogador2").innerHTML = nomeJogador2  + ":";

//pontos são mostrados no HTML
document.getElementById("pontosJogador1").innerHTML = pontosJogador1; //procura no documento HTML e encontra(pega) o elemento pelo ID.
document.getElementById("pontosJogador2").innerHTML = pontosJogador2;


//Estas linhas definem o texto para elementos HTML com IDs 
//"jogadorPerguntando" e "jogadorRespondendo" para indicar 
//qual jogador está no turno de pergunta e qual jogador está 
//no turno de resposta.
document.getElementById("jogadorPerguntando").innerHTML = "Turno de pergunta - " + nomeJogador1; 
document.getElementById("jogadorRespondendo").innerHTML = "Turno de resposta - " + nomeJogador2; 

//AULA 91
// função chamada quando o jogador enviar uma resposta.
function send(){
    getWord = document.getElementById("palavra").value; //pega o que foi digitado (o valor) do elemento com o nome "palavra"
    word = getWord.toLowerCase(); //coloca a palavra digitada em letra minuscúla pra evitar comparações entre minúsculas e maiúsculas.
    primeiraLetra = word.charAt(1); //Obtém o caractere na posição 1 (segundo caractere) da palavra.
    
    lengthDivide = Math.floor(word.length/2); //Calcula a posição do caractere no meio da palavra, arredondando para baixo usando Math.floor().
    segundaLetra = word.charAt(lengthDivide);//pega o caractere calculado aqui emcima.

    lengthMenos1 = word.length - 1; // Obtém a posição do último caractere na palavra.
    terceiraLetra = word.charAt(lengthMenos1);// Obtém o último caractere da palavra.

    removeprimeiraLetra = word.replace(primeiraLetra, "_");//Substitui o segundo caractere da palavra por "_".
    removesegundaLetra = removeprimeiraLetra.replace(segundaLetra,"_");//Substitui o caractere do meio da palavra por "_".
    removeterceiraLetra = removesegundaLetra.replace(terceiraLetra,"_");//Substitui o último caractere da palavra por "_".

    // Esta linha cria uma variável chamada 'pergunta' que contém uma string HTML formatada.
    // A string inclui um cabeçalho HTML (<h4>) com um ID 'wordDisplay' e uma variável chamada 'removeterceiraLetra'.
    pergunta = "<h4 id='wordDisplay'> P. " + removeterceiraLetra + "</h4>";

    // Esta linha cria uma variável chamada 'input_box' que contém uma string HTML.
    // A string inclui um texto "Resposta:", um campo de entrada de texto HTML (<input>) com um ID 'inputTextBox'.
    input_box = "<br>Resposta: <input type='text' id='inputTextBox'>";

    // Esta linha cria uma variável chamada 'checkButton' que contém uma string HTML.
    // A string inclui um botão HTML (<button>) com um evento 'onclick' que chama a função 'check()'.
    checkButton = "<br><br> <button onclick='check()'>Checar</button>";

    // Esta linha cria uma variável chamada 'row' que concatena as três variáveis HTML anteriores.
    // Isso cria uma única linha HTML que contém o cabeçalho, o campo de entrada e o botão de verificação.
    row = pergunta + input_box + checkButton;

    // Esta linha atualiza o conteúdo do elemento HTML com o ID 'output (saída)' com o valor contido na variável 'row (linha)'.
    document.getElementById("output").innerHTML = row;

    // Esta linha define o valor do elemento HTML com o ID 'palavra' como uma string vazia ("").
    document.getElementById("palavra").value = "";

}

// AULA 92
// Define as variáveis "turnoDaPergunta" e "turnoDaResposta" com os nomes dos jogadores iniciais.
turnoDaPergunta = "nomeJogador1";
turnoDaResposta = "nomeJogador2";

// Esta função é chamada quando o botão "Checar" é clicado.
function check() {
    getresposta = document.getElementById("inputTextBox").value;
    resposta = getresposta.toLowerCase();

    if(resposta == word){
        if(turnoDaResposta == "nomeJogador1"){
            pontosJogador1 = pontosJogador1 + 1;
            document.getElementById("pontosJogador1").innerHTML = pontosJogador1;
        }
        else{
            pontosJogador2 = pontosJogador2 +1;
            document.getElementById("pontosJogador2").innerHTML = pontosJogador2;
        }

    }

    if(turnoDaPergunta == "nomeJogador1"){
        turnoDaPergunta = "nomeJogador2";
        document.getElementById("jogadorPerguntando").innerHTML = "Turno de Pergunta - " +  nomeJogador2;
    }
    else{
        turnoDaPergunta = "nomeJogador1";
        document.getElementById("jogadorPerguntando").innerHTML = "Turno de Pergunta" + nomeJogador1;
    }

    if(turnoDaResposta == "nomeJogador1"){
        turnoDaResposta = "nomeJogador2";
        document.getElementById("jogadorRespondendo").innerHTML = "Turno de Resposta - " + nomeJogador2;
    }
    else{
        turnoDaResposta = "nomeJogador1";
        document.getElementById("jogadorRespondendo").innerHTML = "Turno de Resposta -" + nomeJogador1;
    }
    document.getElementById("output").innerHTML = "";
}
   