window.onload = function () {
    document.getElementById("azul").addEventListener("mouseover", function () {
        document.getElementById("titulo").style.color = "blue";
    })


    document.getElementById("amarelo").addEventListener("mouseout", function () {
        document.getElementById("titulo").style.color = "yellow";
    })


    document.getElementById("vermelho").addEventListener("mouseup", function () {
        document.getElementById("titulo").style.color = "red";
    })
}