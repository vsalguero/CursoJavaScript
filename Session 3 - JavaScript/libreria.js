function Calcular(monto) {
    var descuento = monto * 0.1;
    console.log("El total a pagar es de ", (monto - descuento));
}


function ComprobarMayor() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    if (n1 > n2)
        console.log("El mayor numero mayor es el primer valor ", n1, " el número menor es el segundo valor ", n2);
    else
        console.log("El mayor numero mayor es el segundo valor ", n2, " el número menor es el primer valor ", n1);
}

const btnComprobar = document.getElementById('btnComprobar');
btnComprobar?.addEventListener('click', () => {
    ComprobarMayor();
}, false);

function ComprobarBisiesto() {
    var message = "";
    var anio = parseInt(document.getElementById('anio').value);
    var result = document.getElementById('result');

    if ((anio % 4 == 0 && anio % 100 == 0) || (anio % 4 == 0 && anio % 400 == 0))
        message = "El año es bisiesto";
    else
        message = "El año no es bisiesto";

    result.innerText = message;
}

const btnCalcular = document.getElementById('btnCalcularAnio');
btnCalcular?.addEventListener('click', () => {
    ComprobarBisiesto();
}, false);


function Ordenar() {
    var message = "";
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var n3 = parseInt(document.getElementById('n3').value);
    var result = document.getElementById('result');
    var my, cn, mn;

    if (n1 > n2) {
        my = n1;
        mn = n2;
    } else {
        my = n2;
        mn = n1;
    }
    if (my > n3) {
        if (mn > n3) {
            cn = mn;
            mn = n3;
        } else {
            cn = n3;
        }
    } else {
        cn = my;
        my = n3;
    }
    message = "<strong>El Mayor es: " + my + "<br> El central es: " + cn + "<br>El menor es: " + mn + "<br></strong>";

    result.innerHTML = message;
}

const btnOrdenar = document.getElementById('btnOrdenar');
btnOrdenar?.addEventListener('click', () => {
    Ordenar();
}, false);


function ComprobarDia(day) {
    var name = "";
    var result = document.getElementById('result');
    switch (day) {
        case "1":
            name = "Lunes";
            break;
        case "2":
            name = "Martes";
            break;
        case "3":
            name = "Miércoles";
            break;
        case "4":
            name = "Jueves";
            break;
        case "5":
            name = "Viernes";
            break;
        case "6":
            name = "Sábado";
            break;
        case "7":
            name = "Domingo";
            break;

    }
    message = "<strong>El día es " + name + "<br></strong>";

    result.innerHTML = message;
}

const select = document.getElementById('selectDay');
select?.addEventListener('change', (event) => {
    ComprobarDia(event.target.value);
});

function MostrarTabla() {
    var n = parseInt(document.getElementById('number').value);
    var cadena = "";
    for (let i = 1; i <= 10; i++) {
        cadena += n + " x " + i + " = " + (n * i) + "<br>";
    }

    result.innerHTML = cadena;
}

const btnShowTable = document.getElementById('showTable');
btnShowTable?.addEventListener('click', () => {
    MostrarTabla();
}, false);


function Rusa() {
    var n1 = parseInt(document.getElementById('number1').value);
    var n2 = parseInt(document.getElementById('number2').value);
    var result = document.getElementById('result');
    var r = 0;
    while (n1 > 0){
        if(n1 % 2 != 0)
            r +=n2;
        n1 = Math.trunc(n1 / 2);
        n2 = n2 * 2;        
    }
    result.innerHTML = r;
}

const btnCalcularRusa = document.getElementById('btnCalcularRusa');
btnCalcularRusa?.addEventListener('click', () => {
    Rusa();
}, false);