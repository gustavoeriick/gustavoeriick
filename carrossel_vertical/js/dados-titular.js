$(document).ready(function(){
    $.getJSON('/outros/dados.json',function(retorno){

        var string_html = "";
        string_html = string_html + '    <div class="carousel-item active" data-bs-interval="1000000">';
        string_html = string_html + '      <img src="imagens/carteirinha.png" class="img-carrossel" alt="...">';
        string_html = string_html + '     </div>';

        for (var v in retorno)
        {
            string_html = string_html + '      <div class="carousel-item" data-bs-interval="1000000">';
            string_html = string_html + '<div class="carteirinha">';
            string_html = string_html + '<div class="info-cliente p-cobertura">';
            string_html = string_html + '    <span class="info-titulo">Plano de cobertura</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span class="info-resultado">'+retorno[v].plano+'</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<div class="info-cliente n-carteira">';
            string_html = string_html + '    <span class="info-titulo">Número da carteira</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span class="info-resultado numeroc">'+retorno[v].numeroc+'</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="w-100 info-cliente">';
            string_html = string_html + '    <span class="info-titulo">Usuário</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span class="info-resultado">'+retorno[v].usuario+'</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="w-100 info-cliente">';
            string_html = string_html + '    <span class="info-titulo">Titular</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span class="info-resultado">'+retorno[v].titular+'</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="w-100 info-cliente">';
            string_html = string_html + '    <span class="info-titulo">Empresa</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span class="info-resultado">'+retorno[v].empresa+'</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="w-100 info-cliente info">';
            string_html = string_html + '    Ao marcar sua consulta, informe que você utiliza a Rede Sempre Odonto';
            string_html = string_html + '</div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="div-linha"></div>';
            string_html = string_html + '<br>';
            string_html = string_html + '<div class="info-outras">';
            string_html = string_html + '    <span>Serviço de Atendimento ao Cliente:</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span>SP:(11)4861.2434</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span>Demais localidades: 3003.9420</span>';
            string_html = string_html + '    <br>';
            string_html = string_html + '    <span>www.sempreodonto.com.br</span>';
            string_html = string_html + '</div>';
            string_html = string_html + '<div class="ans text-end">';
            string_html = string_html + '    <img src = "imagens/ans.png" class = "icone-ans">';
            string_html = string_html + '</div>';
            string_html = string_html + '</div>';
            string_html = string_html + '</div>';
        }


        $('.carousel-inner').html(string_html);
    });
});