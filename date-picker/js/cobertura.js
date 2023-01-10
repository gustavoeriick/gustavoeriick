$(document).ready(function(){
var alfa = $("#filtro").val();
$("#texto.form-control").prop('readonly', true);

   // $("#Texto-Label").html("novo texto");



$(".select-dropdown").click(function(){
    	
    var alfa = $("#filtro").val();
    if(alfa == "CPF"){
        $("#Texto-Label").change(function(){
            $("input#texto.form-control").val('');
            $("#Texto-Label").text("Digite o CPF aqui:");
            $("#texto.form-control").attr('readonly',false);
            $("#texto.form-control").prop('maxlength','11');
            $('#texto.form-control').keypress(function (e) {    
        
                var digito = (e.which) ? e.which : event.keyCode    
            
                if (String.fromCharCode(digito).match(/[^0-9]/g))    
            
                    return false;                        
            
            });
            alfa = "";
        });

    else{
        console.log("entrei");
        $("input#texto.form-control").val('');
        $("#Texto-Label").text("Digite sua matrícula aqui:");
        $("#texto.form-control").attr('readonly',false);
        $("#texto.form-control").prop('maxlength','8');
        $('#texto.form-control').keypress(function (e) {    
    
            var digito = (e.which) ? e.which : event.keyCode    
        
            if (String.fromCharCode(digito).match(/[^0-9]/g))    
        
                return false;                        
        
        });
        alfa = ""
    }

});



if(alfa == "CPF"){
    $("#Texto-Label").change(function(){

    });
    $("input#texto.form-control").val('');
    $("#Texto-Label").text("Digite o CPF aqui:");
    $("#texto.form-control").attr('readonly',false);
    $("#texto.form-control").prop('maxlength','11');
    $('#texto.form-control').keypress(function (e) {    

        var digito = (e.which) ? e.which : event.keyCode    
    
        if (String.fromCharCode(digito).match(/[^0-9]/g))    
    
            return false;                        
    
    });
    alfa = "";
}
else{
    console.log("entrei");
    $("input#texto.form-control").val('');
    $("#Texto-Label").text("Digite sua matrícula aqui:");
    $("#texto.form-control").attr('readonly',false);
    $("#texto.form-control").prop('maxlength','8');
    $('#texto.form-control').keypress(function (e) {    

        var digito = (e.which) ? e.which : event.keyCode    
    
        if (String.fromCharCode(digito).match(/[^0-9]/g))    
    
            return false;                        
    
    });
    alfa = ""
}




$("input#texto.form-control").click(function(){
    $("input#texto.form-control").attr('border-bottom','1px solid white;');
});







$.ajax({
    type: "GET",		
    url: "https://sempreodonto.com.br/odontocea/rede/tipo_servico.asp",
    success: function(data){
        $("#tipo_servico").html(data);
        $("#tipo_servico").formSelect();
    }
});





$("#background-cor-primaria").click(function(){
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