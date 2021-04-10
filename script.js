function cal() {
    var a = parseInt(document.querySelector("#num1").value);
    var b = parseInt(document.querySelector("#num2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
        calculate = a + b;
    }else if (op == "none") {
        calculate = "Use the operator";
    }     else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "mod") {
        calculate = a % b;
    }

    document.querySelector("#result").innerHTML = calculate;
}