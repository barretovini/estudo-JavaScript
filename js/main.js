
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    
}

function redirecionar(){
    //window.open("https://google.com/");
    window.location.href = "https://google.com/";
}


function clicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function load(){
    alert("Welcome :)"); 
}

function funcaochange(elemento){
    console.log(elemento.value)
}

    //console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");



/*function soma(n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}    

    var idade = prompt("Qual sua idade");
    console.log(validaIdade(idade));


function setReplace(frase,nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5,10));

alert(setReplace("Vai Japao", "Japao", "Brasil"));



var d = new Date();
alert (d.getMonth()+1);
alert (d.getDate());
alert (d.getHours());
alert(d);



var count;
for(count=0; count <= 5; count++){
    console.log(count);
    alert(count);
};



var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}



var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("menor de idade");
};



var frutas = [{nome: "maca", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);



var fruta = {nome: "maca", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);



var lista = ["maca", "pera", "laranja"];
lista.push("uva");
lista.pop();



console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "))



console.log(lista.reverse());
console.log (lista);



alert(lista[1]);

var nome ="Vinícius Barreto";
var idade = 20;
var idade2 = 10;
var frase = "Japão bom demais"
alert(nome + " tem " + idade + " anos ");
alert (idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/