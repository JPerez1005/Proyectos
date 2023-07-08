let promactual=0;
let promg,suma=0;
let cont=0;

function agregarNotas() {

    let nom = document.getElementById('nombre').value;
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;
    

    //Variable observacion
    var obs = 0;
    
    //Validar el campo nombre
    if (nom === "") {

        swal("Ingrese el nombre del Estudiante", "El campo de nombre no puede ser vacio", "warning");
        return false;
    }
    // Validar las notas si estan vacias
    if (not1 === "" || not2 === "" || not3 === "") {

        swal("Ingese las notas por favor", "La notas no pueden ser vacios", "warning");
        return false;

    }
    //Validar las notas, no mayor de 6 puntos, solo hasta 5
    if (not1 >= 6 || not2 >= 6 || not3 >= 6) {
        alert("la nota no puede ser mas de 5")
        return false;
    }

    //Promediar la suma de las notas entre 3
    var prom;
    
    prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;
    
    cont++;
    suma=prom+suma;
    promg=suma/cont;

    if (prom>promactual){
        promactual=prom;
    }
    
    //Promedio menor o igual a 3 entonces aprobado, caso ocntrario aprobado
    if (prom >= 3) {
        obs = value = "!Aprobado¡ &#x2714";
        cont++;
        suma=suma+prom;

    } else {
        obs = value = "!Desaprobado¡ &#x274c";
        cont++;
        suma=suma+prom;
    }
    

    const tabla = document.getElementById('addtabla');

    const fila = document.createElement('tr');


    fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td><td>${promg}</td> <td>${promactual}</td>` ;





    tabla.appendChild(fila);

    if (prom > 2.9) {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#B3DEBA";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#FFCABA";
    }
    if (not1 > 2.9) {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if (not2 > 2.9) {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if (not3 > 2.9) {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }



    document.getElementById('nombre').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    

}

