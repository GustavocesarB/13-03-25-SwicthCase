function colorirFundo() {
    document.body.bgColor = "#ffffff";

    let txtCorFundo = document.getElementById("txtCorFundo");
    // a linha abaixo, variavel cor esta está pegando o elemento txt cor e está deixando minúscula
    let cor1 = txtCorFundo.value.toLowerCase(); //tolowercase to=para lower=baixo case=caso, então serve para transformar a palavra tanto em maiúscula quando minuscula
    //


    switch (cor1) { //O algoritimo switch vai procurar a cor e irá executar a troca da cor
        case "azul": //cores dentro do switch
            document.body.bgColor = " #0000ff";
            break; //utiliza para fechar o bloco (case) 
        case "roxo": //cores dentro do switch
            document.body.bgColor = " #A020F0";
            break; //utiliza para fechar o bloco (case) 
        case "verde claro": //cores dentro do switch
            document.body.bgColor = " #90EE90";
            break; //utiliza para fechar o bloco (case) 
        case "marrom": //cores dentro do switch
            document.body.bgColor = " #800000";
            break; //utiliza para fechar o bloco (case) 
        case "laranja": //cores dentro do switch
            document.body.bgColor = " #FFA500";
            break; //utiliza para fechar o bloco (case) 
        case "ouro": //cores dentro do switch
            document.body.bgColor = " #FFD700";
            break; //utiliza para fechar o bloco (case) 
        case "azul": //cores dentro do switch
            document.body.bgColor = " #0000ff";
            break; //utiliza para fechar o bloco (case)
        case "azul escuro": //cores dentro do switch
            document.body.bgColor = "rgb(1, 1, 39)";
            break; //utiliza para fechar o bloco (case) 
        default:
            document.body.bgColor = "#ffffff";
            break;
    }
}

// Adicionando o evento de escuta para o botão "Enter"
document.getElementById("txtCorFundo").addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada foi o "Enter" (código 13)
    if (event.key === "Enter") {
        colorirFundo(); // Chama a função colorir
    }
});


//------------------------------------------------------------------------------------------------------------------------------------------

function colorirLetras() {
    document.body.style.color = "000000";

    let txtCorLetras = document.getElementById("txtCorLetras");
    // a linha abaixo, variavel cor esta está pegando o elemento txt cor e está deixando minúscula
    let cor2 = txtCorLetras.value.toLowerCase(); //tolowercase to=para lower=baixo case=caso, então serve para transformar a palavra tanto em maiúscula quando minuscula
    //


    switch (cor2) { //O algoritimo switch vai procurar a cor e irá executar a troca da cor
        case "azul": //cores dentro do switch
            document.body.style.color = " #0000ff";
            break; //utiliza para fechar o bloco (case) 
        case "roxo": //cores dentro do switch
            document.body.style.color = " #A020F0";
            break; //utiliza para fechar o bloco (case) 
        case "verde claro": //cores dentro do switch
            document.body.style.color = " #90EE90";
            break; //utiliza para fechar o bloco (case) 
        case "marrom": //cores dentro do switch
            document.body.style.color = " #800000";
            break; //utiliza para fechar o bloco (case) 
        case "laranja": //cores dentro do switch
            document.body.style.color = " #FFA500";
            break; //utiliza para fechar o bloco (case) 
        case "ouro": //cores dentro do switch
            document.body.style.color = " #FFD700";
            break; //utiliza para fechar o bloco (case) 
        case "azul": //cores dentro do switch
            document.body.style.color = " #0000ff";
            break; //utiliza para fechar o bloco (case)
        case "azul escuro": //cores dentro do switch
            document.body.style.color = "rgb(1, 1, 39)";
            break; //utiliza para fechar o bloco (case) 
        default:
            document.body.style.color = "#000000";
            break;
    }
}

// Adicionando o evento de escuta para o botão "Enter"
document.getElementById("txtCorLetras").addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada foi o "Enter" (código 13)
    if (event.key === "Enter") {
        colorirLetras(); // Chama a função colorir
    }
});
