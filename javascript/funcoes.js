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
}//fim do metodo

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
}//fim do metodo

//1. Faça um programa que imprima os números de 1 a 10. 

function contarDez(){
    var res = "Números de 1 a 10:";

    for(i = 1; i <= 10; i++){
        res += "\n" + i; 
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}//fim do metodo

//2. Faça um programa que imprima os números pares de 1 a 20
function contarPares(){
var res = "Pares de 1 a 20:";

    for(i = 1; i <= 20; i++){
        if(i % 2 == 0 ){
            res += "\n" + i; 
        }
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}//fim do metodo

//3. Faça um programa que calcule a soma dos números de 1 a 100
function somarCem(){
    var soma = 0;

    for(i = 1; i <= 100; i++){
            soma += i;   
    }

    document.getElementById("resultado").innerHTML = soma;
}//fim do metodo

//4. Faça um programa que imprima os múltiplos de 5 de 1 a 50
function multiCinco(){
    var res = "Multiplos de 5";

    for(i = 1; i <= 50; i++){
        if(i % 5 == 0){
            res += "\n" + i;
        }
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}//fim do metodo

//5. Faça um programa que peça ao usuário um número e imprima os números 
//de 1 até esse número. 
function contar(){
    var x;

    x = parseInt(document.getElementById("textNum").value);

    var res = "Contando de 1 até: " + x;

    for(i = 1; i <= x; i++){
        res += "\n" + i;
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}//fim do metodo

//6. Faça um programa que peça ao usuário um número e imprima a soma dos 
//números de 1 até esse número. 

function somar(){
    var x;

    x = parseInt(document.getElementById("textNum").value);

    var soma = 0;

    for(i = 1; i <= x; i++){
        soma += i;
    }

    document.getElementById("resultado").innerHTML = "A soma de 1 até " + x + " é igual a: " + soma;

}//fim do metodo

//7. Faça um programa que imprima os números primos de 1 a 20

function primos(){
    var res = "0\n1\n2\n3\n5" ;

    for(i = 2; i <= 20; i++){
        if((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0)){
            res += "\n" + i;
        }
    }

    document.getElementById("resultado").innerHTML = "\n" + res;
}//fim do metodo

//8. Faça um programa que peça ao usuário um número e verifique se é primo// ERRO

function verifPrimo(){
    var numero = parseInt(document.getElementById("textNum").value);
    var divisores = 0;
   
    for(var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }    
   
    if (divisores == 2) {
        document.getElementById('resultado').innerHTML = 'É primo';
    } else {
        document.getElementById('resultado').innerHTML = 'Não é primo';
    }
}//fim do metodo

//9. Faça um programa que calcule o fatorial de um número. 

function fatorial(){
    var fatorial = parseInt(document.getElementById('textNum').value);
    var resultado = fatorial;
    var primeiroMultipicador = fatorial - 1;
 
    //Validação
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
    
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
    
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
    
    //Cálculo
    for(var i = primeiroMultipicador; i > 1; i--){
        resultado *= i;
    }
    document.getElementById("resultado").innerHTML = "O fatorial resultado fatorial de " + fatorial + " é: " + resultado;
}//fim do método


//10. Faça um programa que imprima a sequência de Fibonacci até o décimo 
//termo. 

function fibonacci(){
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
 
    for(i = 2; i < 10; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
 
    document.getElementById("resultado").innerHTML = fibonacci;
}//fim do metodo

//11. Faça um programa que peça ao usuário um número e imprima os números 
//pares e ímpares de 1 até esse número.
function parImpar(){
    var num;
    var numPar = [];
    var numImpar = [];
    var posicaoPar = 0;
    var posicaoImpar = 0;
 
    num = parseInt(document.getElementById("textNum").value)

   
    for(i = 1; i < num + 1; i++){
        if(i == 1){
            numImpar[0] = i;
            posicaoImpar = 1;
        }
        else if(i % 2 == 0){
            numPar[posicaoPar] = i;
            posicaoPar += 1;
        }
        else{
            numImpar[posicaoImpar] = i;
            posicaoImpar += 1;
        }
    }
 
    if(num < 1){
        res = "Informe um número maior que 1"
        document.getElementById("resultado").innerHTML = res
    }
    else{
        document.getElementById("resultado").innerHTML = "Número Pares: \n" + numPar + "\nNúmero Ímpares: \n" + numImpar;
    }
    
}//Fim do método

//12. Faça um programa que peça ao usuário um número e imprima os números 
//primos de 1 até esse número. 

function mostrarPrimos(){
    var num;
    var primo = [];
    var posicao = 0;
     
    num = parseInt(document.getElementById("textNum").value)
     
    for(i = 1; i < num + 1; i++){
        if(i == 2 || i == 3 || i == 5 || i == 7){
            primo[posicao] = i;
        }
        else if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
            continue
        }
        else{
            primo[posicao] = i;
        }
            posicao++
    }
     
        if(num < 2){
            document.getElementById("resultado").innerHTML = "Informe um número maior que 1";
        }
        else{
            document.getElementById("resultado").innerHTML = primo;
        }
}//Fim do método
     
//13. Faça um programa que peça ao usuário um número e imprima se é um número perfeito 
//(a soma de seus divisores, excluindo ele mesmo, é igual ao próprio número)

function numPerfeito(){
    var num;
     var divisores = 0;
     
    num = parseInt(document.getElementById("textNum").value)
     
    for(i = 0; i < num; i++){
        if(num % i == 0){
        divisores += i;
        }
    }
     
     if(divisores == num){
        document.getElementById("resultado").innerHTML = "Número Perfeito"
    }
    else{
        document.getElementById("resultado").innerHTML = "Não é um número perfeito"
    }
    
}//fim do metodo

