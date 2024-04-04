function somar(){
    var num1;//declarando variavel
    var num2;
    var res;

    //coletnado os dados dos campos, a partir dos identificadores (tpNum e tsNum)
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando calculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do metodo

function subtrair(){
    var num1;//declarando variavel
    var num2;
    var res;

    //coletnado os dados dos campos, a partir dos identificadores (tpNum e tsNum)
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando calculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do metodo

function multiplicar(){
    var num1;//declarando variavel
    var num2;
    var res;

    //coletnado os dados dos campos, a partir dos identificadores (tpNum e tsNum)
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando calculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do metodo

function dividir(){
    var num1;//declarando variavel
    var num2;
    var res;

    //coletnado os dados dos campos, a partir dos identificadores (tpNum e tsNum)
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando calculo
    res = num1 / num2;
    if(num2 <= 0){
        res = "Impossivel dividir por números menores ou iguais a zero!"
    }else{
        res = num1 / num2;
    }
    //faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do metodo

function tabuada(){
    var num1;
    var num2;

    num1= parseInt(document.getElementById("tpNum").value);
    num2= parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i); 
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);  
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do metodo

//faça uma função para calcular potência
function potencia(){
    var num1;
    var num2;
    var res;

    num1= parseInt(document.getElementById("tpNum").value);
    num2= parseInt(document.getElementById("tsNum").value);

    res = Math.pow(num1,num2);
    document.getElementById("resultado").innerHTML = num1 + " elevado a " + num2 + " é igual a: " + res;

}//fim do metodo

//faça uma função para calcular a raiz dos dois numeros
function raiz(){
    var num1;
    var num2;
    var resNum1;
    var resNum2;

    num1= parseInt(document.getElementById("tpNum").value);
    num2= parseInt(document.getElementById("tsNum").value); 

    resNum1 = Math.sqrt(num1)
    resNum2 = Math.sqrt(num2)
    document.getElementById("resultado").innerHTML = "A raiz quadrada de " + num1 + " é igual a: " + resNum1 + "\n\n" + 
                                                     "A raiz quadrada de " + num2 + " é igual a: " + resNum2;
}//fim do metodo

//faça uma função para calcular a fórmula de bhaskara
function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;
    var resposta;

    a = parseInt(document.getElementById("textA").value);
    b = parseInt(document.getElementById("textB").value);
    c = parseInt(document.getElementById("textC").value);

    delta = b * b - 4 * a * c;

    if (delta <= 0){
        resposta = "Delta é igual a: " + delta + " .Impossível fazer a operação. O resultado de delta não pode ser menor ou igual a zero";
    }else{

        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)

        resposta = "x1 é igual a: " + x1 + "\nx2 é igual a: " + x2;
    }
        
    document.getElementById("resultado").innerHTML = "Delta é igual a: " + delta + "\n" + resposta;

}//fim do metodo

//faça um programa que peça ao usuario um numero e
//imprima se é par ou impar

function parOuImpar(){
    var num1;
    var num2;
    var res1;
    var res2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    if (num1 % 2 == 0){
        res1 = "O primeiro número é par"
    }else{
        res1 = "O primeiro número é ímpar"
    }

    if (num2 % 2 == 1){
        res2 = "O segundo número é ímpar"
    }else{
        res2 = "O segundo número é par"
    }

    document.getElementById("resultado").innerHTML = res1 + "\n" + res2;
}

//faça um programa que peça ao usuario um numero e 
//imprima se é positivo, negativo ou zero

function verificar(){
    var num1;
    var num2;
    var res;
    var res2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    if (num1 < 0){
        res = "Negativo";
    } else if (num1 < 1) {
        res = "Zero";
    } else{
        res = "Positivo";
    }

    if (num2 < 0){
        res2 = "Negativo";
    } else if (num2 < 1) {
        res2 = "Zero";
    } else{
        res2 = "Positivo";
    }
        
    document.getElementById("resultado").innerHTML = "O primeiro número é: " + res + "\nO segundo número é: " + res2;
}

//Faça um programa que imprima os números de 1 a 10. 

function contarDez(){
    var res = "Números de 1 a 10:";

    for(i = 1; i <= 10; i++){
        res += "\n" + i; 
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}

//Faça um programa que imprima os números pares de 1 a 20
function contarPares(){
var res = "Pares de 1 a 20:";

    for(i = 1; i <= 20; i++){
        if(i % 2 == 0 ){
            res += "\n" + i; 
        }
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}

//Faça um programa que calcule a soma dos números de 1 a 100
function somarCem(){
    var soma = 0;

    for(i = 1; i <= 100; i++){
            soma += i;   
    }

    document.getElementById("resultado").innerHTML = soma;
}


