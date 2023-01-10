$(document).ready(function(){
    $('select').formSelect();
    $.ajax({
        type: "GET",		
        url: "https://sempreodonto.com.br/odontocea/rede/tipo_servico.asp",
        success: function(data){
            $("#tipo_servico").html(data);
            $("#tipo_servico").formSelect();
        }
    });

    $.ajax({
        type: "GET",		
        url: "https://sempreodonto.com.br/odontocea/rede/especialidade.asp",
        success: function(data){
            $("#especialidade").html(data);
            $("#especialidade").formSelect();
        }
    });

    $("#estado").change(function(){
        var uf = $("#estado").val();
        $.ajax({
            type: "GET",
            data: "uf="+uf,			
            url: "https://sempreodonto.com.br/odontocea/rede/cidades.asp",
            success: function(data){
                $("#cidade").html(data);
                $("#cidade").formSelect();
            }
        });                    
    });

    $("#cidade").change(function(){
        var cidade = $("#cidade").val();
        if (cidade !== null)
        {
            var teste = "";
            var letra = "";
            var quantidade = cidade.length;
            for (i = 0; i < quantidade; i++) {
                letra = cidade.substr(i, 1); 
                letra = letra.charCodeAt();
                teste = teste + " " + letra.toString(); 
            };

            $.ajax({
                type: "GET",
                data: "CIDADE="+teste,			
                url: "https://sempreodonto.com.br/odontocea/rede/bairros.asp",
                success: function(data){
                    $("#bairro").html(data);
                    $("#bairro").formSelect();
                }
            });
        };
    });

	$("#consultar_rede").click(function(){

		var UF = $("#estado").val();
		var cidade = $("#cidade").val();
		var bairro = $("#bairro").val();

		if (UF == null)
		{
			alert("Selecione um Estado");
			return;
		};	

		if (cidade == null)
		{
			alert("Selecione uma Cidade");
			return;
		};

		if (bairro == null)
		{
			alert("Selecione um Bairro");
			return;
		};		
		
		UF = RemoverAcentos(UF);
		cidade = RemoverAcentos(cidade);
		bairro = RemoverAcentos(bairro);
		var especialidade = RemoverAcentos($("#especialidade").val());
		
		var rede = $("#cod_rede").val();

		$.ajax({
			type: "GET",
			data: "ESTADO="+UF+"&CIDADE="+cidade+"&BAIRRO="+bairro+"&ESPECIALIDADE="+especialidade+"&cod_rede=3",			
			url: "https://sempreodonto.com.br/odontocea/rede/rede_resultado.asp",			
			beforeSend: function(){
			    $("#consultar_rede").attr("disabled","disabled");
			},
			success: function(data){
				$("#rede_resultado").html(data);
				$("#consultar_rede").removeAttr("disabled");
			}
		});
	});
});