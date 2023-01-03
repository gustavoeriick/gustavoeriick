document.getElementById('opcoes_acesso').addEventListener('change',selecionaOpcao)

function selecionaOpcao() {

    var select = document.getElementById("opcoes_acesso");

    if (select.value == "1") {
        document.getElementById("div_matricula").style.display = 'block';
        document.getElementById("div_cpf").style.display = 'none';
        document.getElementById("div_senha").style.display = 'none';
        document.getElementById("div_orientacao").style.display = "none";
    } else if (select.value == "2") {
        document.getElementById("div_matricula").style.display = 'none';
        document.getElementById("div_cpf").style.display = 'block';
        document.getElementById("div_senha").style.display = 'block';
        document.getElementById("div_orientacao").style.display = "none";
    }
}