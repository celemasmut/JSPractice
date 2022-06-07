 const message = prompt("ingrese el mensaje que desea imprimir");
const count = prompt("Ingrese la cantidad de veces que quiera que se imprima");

for (let i = 0; i < count; i++) {
    alert(message)
} 
 
/*-------------------------------------------------------------------*/

 const number = prompt("Ingrese un numero");

for (let i = 0; i < number; i++) {
    if(i > 4){
        alert("se termina el ciclo");
        break;
    }
    alert("Lado " + (i));
} 

/*-----------------------------------------------------------------------*/

 let studentList = [];

for(var i = 0; i < 10; i++){
    const studentName = prompt("Ingrese nombre de estudiante a la lista");
    studentList.push(studentName);
}

alert(studentList); 

/*-------------------------------------------------------------------------*/

 let studentList2 = [];
let student = '';
while(student !== 'Voldemort'){
    student = prompt("Ingrese nombre de estudiante a la lista");
    if(student !== 'Voldemort') studentList2.push(student);
}

alert(studentList2); 


/*----------------------------------------------------------------------------------------*/

let numberSelected ;

do{

    numberSelected = parseInt(prompt('ingrese un numero del 1 al 4 o ingrese 0 para salir'));
    if(numberSelected !== 0){
        switch(numberSelected){
            case 1:
                alert("1. Tomate");
                break;
            case 2:
                alert("2. Papa");
                break;
            case 3:
                alert("3. Carne");
                break;
            case 4:
                alert("4. Pollo");
                break;
            default:
                alert("Error");
                break;
        };
    }

}while(numberSelected !== 0);