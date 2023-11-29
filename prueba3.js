/*console.log (peso + 1);
let peso = 9;

let mivariable = "1"; 
console.log (peso)

const MI_CONSTANTE = 10;

console.log[peso = mivariable];

let n1 = 5;
let n2 = 50;
let n3 = 30;
if (n1>n2)
{console.log (n1)
}
if (n1>n3)
{console.log (n1)} 


*/


let n1 = 10; 
let n2 = 0;
let n3 = 100

if (n1 > n2 && n1 > n3) {
    console.log(n1);
}

else if(n2 > n1 && n2 > n3) {
    console.log (n2);
}
if (n3 >= n1 && n3 >= n2){
    
}


else{
    console.log (n3);
}


function mensaje() {
    console.log("hola desde la funcion");
}
mensaje();
mensaje();

function saludo(nombre) {
    console.log("Hola" , nombre);
}

saludo("")




function mayor(n1,n2,n3){
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    }
    
    else if(n2 > n1 && n2 > n3) {
        console.log (n2);
    }
    if (n3 >= n1 && n3 >= n2){
        console.log(n3)
    }
    else{
        console.log (n3);
    }

}
mayor(10,0,100);
console.log(n3);

function suma(n1, n2){
 let resultado = (n1 + n2);   
 return resultado

}
console.log(10*5);

let variable
variable = suma(15,10);
console.log(variable);


/*descripcion de algoritmo en codigos   

recibe peso

si peso <= 30 entonces:
 aplico holliday
si no: 
aplico superficie

funcion holliday(peso);
si el peso > 20:
aux = (peso - 20) * 20;
    resultado = 1500 + aux
si no  si peso < 20 y peso > 10:
    resultado = ((peso - 10) * 50)*1000;
    sino:
    resultado = peso * 100*/



function seaplicaholliday(peso){
    if(peso > 20){
        aux = (peso - 20) * 20; 
        resultado = (1500 + peso);
    }
    else if(peso < 20 && peso > 10){
    resultado = ((peso - 10) * 50)*1000;
}

    else{
        resultado = peso*100;
    }
}

let peso=20;
if (peso <= 30){
   
    console.log(holliday(peso))
}else{
    //superficie(peso)
}

function holliday(valor){
    let resultado;
    if(valor >= 20){
        resultado = ((valor-20)*20)+1500
    }else if(valor <20 && valor > 10){
        resultado = ((valor-10)*50)+1000
    }else{
        resultado = valor * 100
    }
    return resultado
}

if (peso <= 30){
    holliday(peso)

}

/*let peso = 50;*/
if (peso >= 30){
    
}


function superficie(valor){
    let resultado
    let recibe = ((valor*4)+7) / (valor + 90)
}




let calculadora