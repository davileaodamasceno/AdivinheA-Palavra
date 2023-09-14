function addUser() {

    //criar Variáveis que são preenchidas com os nomes digitados nas caixas//
    var nomeJogador1 = document.getElementById("nomeJogador1").value; //"Seleciona o elemento pelo o ID e extrai o valor atual, inserido pelo usuário"
    var nomeJogador2 = document.getElementById("nomeJogador2").value;

    //é uma forma de armazenamento persistente no navegador, onde você pode salvar informações que permanecerão disponíveis mesmo depois que o usuário fechar a página.
    //localStorage.setItem(chave, valor) -> isso é a sintaxe básica do método.
    //chave é uma string que identifica o que eu quero guardar (tipo de dado).
    //valor é o que você vai guardar na chave.
    //Pense em um armário com várias gavetas, cada uma contendo um item diferente. Para encontrar um item específico, você olha para a etiqueta da gaveta, que é a chave, e retira o item dela, que é o valor.

    

    localStorage.setItem("nomeJogador1", nomeJogador1);
    localStorage.setItem("nomeJogador2", nomeJogador2);

    //Faz navegar para outra página. "window" é a janela do navegador, ".location" propriedade que controla a URL
    window.location = "game.html";
}