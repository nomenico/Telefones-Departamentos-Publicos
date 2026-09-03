function mostrarTelefone() {
    let opcao, tel;
    opcao = parseInt(document.getElementById("txtopcao").value);

    switch (opcao) {
        case 1:
            tel = "190";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 2:
            tel = "193";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 3:
            tel = "192";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 4:
            tel = "199";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 5:
            tel = "197";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 6:
            tel = "(21) 2332-2924";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 7:
            tel = "(21) 2253-1177";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 8:
            tel = "180";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 9:
            tel = "100";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 10:
            tel = "151";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 11:
            tel = "(21) 2332-8611";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 12:
            tel = "(21) 3460-4040";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        case 13:
            tel = "(21) 2334-7910";
            resultado.innerHTML = "Telefone: " + tel;
            break;
        default:
            alert("Selecione uma das opções!");
    }
}