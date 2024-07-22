window.onload = function () {
    document.getElementById("Calcular").addEventListener("click", function () {

        numb1 = document.getElementById("numb1").value;
        numb2 = document.getElementById("numb2").value;

        document.getElementById("result1").value = parseInt(numb1) + parseInt(numb2);
    })
    document.getElementById("numb4").addEventListener("focusout",function(){

        numb1 = document.getElementById("numb3").value;
        numb2 = document.getElementById("numb4").value;

        document.getElementById("result2").value = parseInt(numb1) - parseInt(numb2);
    })
}

