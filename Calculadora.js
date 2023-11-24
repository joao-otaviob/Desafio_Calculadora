function calcularNivel(vitorias, derrotas) {
  
    var saldoVitorias = vitorias - derrotas;

     var nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 30) {
        nivel = "Prata";
    } else if (vitorias >= 31 && vitorias <= 40) {
        nivel = "Ouro";
    } else if (vitorias >= 41 && vitorias <= 50) {
        nivel = "Diamante";
    } else if (vitorias >= 51 && vitorias <= 60) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }


    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

calcularNivel(20, 40);
