//armazenar o estado de cadastro do usuário
let usuarioCadastrado = false;

//lidar com o envio do formulário de cadastro
document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    //obter valores dos campos de cadastro
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
        usuarioCadastrado = true; //usuário cadastrado
        alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}.`);

        //limpar formulário de 
        document.getElementById("cadastroForm").reset();

        //habilitar a área de comentários
        document.getElementById("comentarioForm").style.display = "block";
        document.getElementById("comentarios").innerHTML = "<p>Deixe seu comentário abaixo:</p>";
    }
});

//função para lidar com o envio do formulário de comentários
document.getElementById("comentarioForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (usuarioCadastrado) {
        const comentario = document.getElementById("comentario").value;

        if (comentario) {

            const novoComentario = document.createElement("p");
            novoComentario.textContent = comentario;
           
            document.getElementById("comentarios").appendChild(novoComentario);

            document.getElementById("comentarioForm").reset();
        }
    } else {
        alert("Por favor, cadastre-se antes de enviar um comentário.");
    }
});
