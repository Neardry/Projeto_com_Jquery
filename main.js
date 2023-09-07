$(document).ready(function(){ //Quando a página estiver carregada, esta função executará.
    $('header button').click(function() { //Baixa o cabeçalho
        $('form').slideDown();
    });
    $('#botao-cancelar').click(function(){ //Recolhe o cabeçalho
        $('form').slideUp();
    })
    $('form').on('submit', function(e) {  //Previne que o botão recarregue a página
        e.preventDefault();

        const enderecoNovaImagem = $('#endereco-imagem-nova').val(); /* .val() é a mesma coisa do .value porém é assim que o Jquery reconhece, e ele é uma função. */
        const novoItem = $('<li style="display: none"></li>') /* Atribuí o atributo style e display none para fazer o efeito de fade in */;
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem) /* .appendTo() pega o que foi escrito antes dele, neste caso a tag img e coloca entre as tags que forem colocadas como 
        parametro para ele, neste caso sendo o novoItem, ele irá colocar a tag img entre as tags de abertura e fechamento <li> */
        
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>    
        </div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul').fadeIn(1000); /* os valores de parametro nessas animações "prontas" estão em milisegundos, então 1000ms é igual a 1s */

        $('#endereco-imagem-nova').val(''); /* O que estiver dentro do val() vai ser associado a ele como se fosse elemento.value = '' */
    });
});