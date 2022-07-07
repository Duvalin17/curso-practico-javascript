console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden" + ladoCuadrado);
 
function perimetroCuadrado(lado){
    //console.log("El perimeto del cuadrado es :" + perimetroCuadrado);
    return lado * 4;
   
} 
function areaCuadrado(lado){
    //console.log("El area al cuadrado es de  :" + areaCuadrado);
    return lado * lado;
}
console.groupEnd();


/// codigo de triangulo
console.group("triaungulo");
//const ladoTriangulo1=6;
//const ladoTriangulo2=6;
//const ladoTriangulo3=4;
//const alturaTriangulo3=5.5;

 function permetroTriaungulo(lado1,lado2,base){
    return lado1 + lado2 +base;
 }
function areaTriaungulo(base,altura){
    return base*altura;
}
console.groupEnd();    

function diametroCirculo(radio){
    return radio * 2;
}

function perimetoCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * 3.1416;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =input.value;
    const perimeto = perimetroCuadrado(value);
    alert("El pereimetro es de " +perimeto);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =input.value;
    const area = areaCuadrado(value);
    alert(area);
}
// triaungulo
function calcularPerimetroTriaungulo(){
    const lado1 = document.getElementById("Inputtriaungulo1");
    const lado2 = document.getElementById("Inputtriaungulo2");
    const base = document.getElementById("BaseTriangulo");
    const value1 =lado1.value;
    const value2 =lado2.value;
    const value3 =base.value;

    const perimetroTr = value1+value2+value3;
    //const perimeto = permetroTriaungulo(value1,value2,value3);
    alert("El pereimetro es de " +perimetroTr);
}
function calcularAreaTriaungulo(){
    const input = document.getElementById("Inputtriaungulo");
    const value =input.value;
    const area = areaTriaungulo(value);
    alert(area);
}
// circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value =input.value;
    const perimeto = diametroCirculo(value);
    alert("El pereimetro es de " +perimeto);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value =input.value;
    const area = perimetoCirculo(value);
    alert("El radio del circulo es de "+area);
}
