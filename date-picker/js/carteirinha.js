$(document).ready(function(){
	
	$("#form-matricula").click(function(){
		
		var matricula = $("#matricula").val();
		var cpf = $("#cpf").val();
		var data_nasc = $("#data_nasc").val();

		$.ajax({
			 
			type: "POST",
			data: "matricula="+matricula+"&cpf="+cpf+"&data_nasc="+data_nasc,
			url: "https://www.sempreodonto.com.br/teucardodonto/carteirinha/carteirinha_app.asp",
			success: function(data)
			{
				if(data == "Matrícula Incorreta!"){
					alert(data);
				}
				else{
					if(data == "Dados Incorretos!"){
						alert(data);
					}
					else{
						$("#form1").css("display","none");
						$("#form2").css("display","none");
						$("#carteirinha").css("display","block");
						var myArray = data.split("|");
						$("#plano").html(myArray[0]);
						$("#num_segur").html(myArray[1]);
						$("#nome_segur").html(myArray[2]);
						$("#titular").html(myArray[3]);
						$("#empresa").html(myArray[4]);
						$("#carteirinha_img").attr("src",myArray[5]);
					};
				};
			}
		});
	});	
	
	$("#form-cpf").click(function(){
		
		var matricula = $("#matricula").val();
		var cpf = $("#cpf").val();
		var data_nasc = $("#data_nasc").val();

		$.ajax({
			type: "POST",
			data: "matricula="+matricula+"&cpf="+cpf+"&data_nasc="+data_nasc,
			url: "https://www.sempreodonto.com.br/teucardodonto/carteirinha/carteirinha_app.asp",
			success: function(data)
			{
				if(data == "Matrícula Incorreta!"){
					alert(data);
				}
				else{
					if(data == "Dados Incorretos!"){
						alert(data);
					}
					else{
						$("#centro-carteirinha").css("background-color","white");
						$("#form1").css("display","none");
						$("#form2").css("display","none");
						$("#carteirinha").css("display","block");
						var myArray = data.split("|");
						$("#plano").html(myArray[0]);
						$("#num_segur").html(myArray[1]);
						$("#nome_segur").html(myArray[2]);
						$("#titular").html(myArray[3]);
						$("#empresa").html(myArray[4]);
						$("#carteirinha_img").attr("src",myArray[5]);
					};
				};
			}
		});
	});	
});