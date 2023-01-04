/* Move a div para a esquerda*/

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left:'700px'});
    });
});

/* Mostra um alerta na tela quando clicamos na div */

$(document).ready(function(){
    $("div").click(function(){
        alert ("Parabéns, o código está funcionando.");
    });
});

/* Mostra um alerta personalizado ao escolher uma opção */

$("select").change(function () {
    var escolhido = "";
    $("select option:selected").each(function () {
        escolhido += $(this).text() + " ";
    });
     alert("Você prefere o "+escolhido);
})
.change();

/* JQuery + AJAX */

$(document).ready(function(){
    $("#driver").click(function(event){
        $('#stage'.load('/conteudo.html'));
    });
});