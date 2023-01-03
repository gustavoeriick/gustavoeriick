var button = document.getElementById("matricula");

button.addEventListener("click", function() {

    var div_matricula = document.getElementById("div_matricula");
    var div_cpf = document.getElementById("div_cpf");
    var div_senha = document.getElementById("div_senha");
    var div_orientacao = document.getElementById("div_orientacao")

    if (div_matricula.style.display === "none") {
        div_matricula.style.display = "block";
        div_cpf.style.display = "none";
        div_senha.style.display = "none";
        div_orientacao.style.display = "none";
    } else {
        div_matricula.style.display = "block";
        div_cpf.style.display = "none";
        div_senha.style.display = "none";
        div_orientacao.style.display = "none";
    }
});

var button = document.getElementById("cpf");

button.addEventListener("click", function() {

    var div_cpf = document.getElementById("div_cpf");
    var div_senha = document.getElementById("div_senha");
    var div_matricula = document.getElementById("div_matricula");
    var div_orientacao = document.getElementById("div_orientacao")

    if(div_cpf.style.display === "none") {
        div_cpf.style.display = "block";
        div_senha.style.display = "block"
        div_matricula.style.display = "none"; 
        div_orientacao.style.display = "none";
    } else {
        div_cpf.style.display = "block";
        div_senha.style.display = "block"
        div_matricula.style.display = "none"; 
        div_orientacao.style.display = "none";
    }

});