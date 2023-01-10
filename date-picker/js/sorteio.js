$(document).ready(function(){
	$("#consulta-numero-sorte").click(function(){
        var cpf = $("#cpf").val();
        var data = $("#data_nasc").val();

        if ((cpf == null) || (cpf == ""))
		{
			alert("CPF em branco. Informe o CPF do titular e tente consultar novamente");
			return;
		};

		if ((data == null) || (data == ""))
		{
			alert("Data de nascimento em branco. Informe a data de nascimento e tente consultar novamente");
			return;
		};

		$.ajax({
			type: "POST",
			data: "data=" + data + "&cpf=" + cpf,			
			url: "https://sempreodonto.com.br/odontocea/numero_sorte_consulta.asp",			
			success: function(data){
				$("#result").html(data);
			}
		});
	});
});