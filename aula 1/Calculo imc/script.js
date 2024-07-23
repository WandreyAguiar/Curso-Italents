window.onload = function () {
  document.getElementById("altura").addEventListener("focusout", function () {

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      const imc = peso / (altura * altura);
      resultado.value = imc.toFixed(2);

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
