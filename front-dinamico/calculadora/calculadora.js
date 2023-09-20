numero1.addEventListener("change", calculadora);
numero2.addEventListener("change", calculadora);
calcular.addEventListener("click", calculadora);

function calculadora() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    const op = operacao.value;
    const resultadoVisor = document.getElementById("resultado-visor");

    //alteração da interface
    numero1.style.border = `1px solid ${num1?"black":"red"}`;
    numero2.style.border = `1px solid ${num2?"black":"red"}`;

    //verifica se os inputs foram inseridos
    if (!numero1.value || !numero2.value) {
        resultadoVisor.style.display = "none";
        aviso.style.display = "block";
        return;
      } else {
        aviso.style.display = "none";
      }

   switch(op) {
    case '+':
        resultado.innerText = `${num1 + num2}`;
        resultadoVisor.style.display = "block";
        break;
    case '-':
        resultado.innerText = `${num1 - num2}`;
        resultadoVisor.style.display = "block";
        break;
    case '×':
        resultado.innerText = `${num1 * num2}`;
        resultadoVisor.style.display = "block";
        break;
    case '/':
        if(num2 === 0) {
            alert("O segundo operando deve ser diferente de 0!");
            return;
        } else {
            resultado.innerText = `${(num1 / num2).toFixed(3)}`;
            resultadoVisor.style.display = "block";
            break;
        }
   }

   if(parseFloat(resultado.innerText) > 20) {
        resultadoVisor.style.backgroundColor = "rgba(48, 232, 100, 0.35)";
    } else {
        resultadoVisor.style.backgroundColor = "rgba(235, 138, 19, 0.52)";
    }
}