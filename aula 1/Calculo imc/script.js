window.onload = function () {
  document.getElementById("altura").addEventListener("focusout", function () {
// acessando o index para pegar as entradas do usuario e tranformalas em variaveis 
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");

    // if para que o usuaria ensira valores maiores que 0
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      const imc = peso / (altura * altura);
      resultado.value = imc.toFixed(2);
    // operação para obter o imc
      
    // condições do imc para escrever as mensagem sobre o peso
      if (imc < 18.5) {
        mensagem.textContent = "Você está abaixo do peso!!";
      } else if (imc >= 18.5 && imc < 25) {
        mensagem.textContent = "Você está com o peso normal!";
      } else if (imc >= 25 && imc < 30) {
        mensagem.textContent = "Você está com sobrepeso!!";
      } else {
        mensagem.textContent = "Você está com obesidade!!!";
      }
    } else {
      mensagem.textContent =
        "Por favor, insira valores válidos para peso e altura.";
    }
  });
};
