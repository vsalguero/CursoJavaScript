function CrearTabla() {
  const body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "100px";
  tbl.style.border = "1px solid black";
  const header = ["Id", "Nombre", "Apellido"];

  const tr = tbl.insertRow();
  var ctrl = document.createElement("input");
  ctrl.type = "checkbox";
  tbl.id = "tbl";
  for (let j = 0; j < 3; j++) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(header[j]));
    td.style.border = "1px solid black";
  }
  tbl.rows[0].insertCell(3);
  tbl.rows[0].cells[3].appendChild(ctrl);

  body.appendChild(tbl);
}

function Agregar() {
  var divForm = document.getElementById("captura");
  divForm.hidden = false;
  divForm.style.filter = "alpha(opacity=99);";

  var divPrincipal = document.getElementById("principal");
  divPrincipal.style.opacity = "0.1";
}
function Aceptar() {
  //Recuperando datos capturados
  var v1 = document.frmCaptura.id.value;
  var v2 = document.frmCaptura.nom.value;
  var v3 = document.frmCaptura.ape.value;

  var tbl = document.getElementById("tbl");
  var numFilas = tbl.rows.length;
  tbl.insertRow(numFilas);
  var ctrl = document.createElement("input");
  ctrl.type = "checkbox";

  tbl.rows[numFilas].insertCell(0);
  tbl.rows[numFilas].cells[0].textContent = v1;
  tbl.rows[numFilas].insertCell(1);
  tbl.rows[numFilas].cells[1].textContent = v2;
  tbl.rows[numFilas].insertCell(2);
  tbl.rows[numFilas].cells[2].textContent = v3;
  tbl.rows[numFilas].insertCell(3);
  tbl.rows[numFilas].cells[3].appendChild(ctrl);

  Cancelar();
}

function Cancelar() {
  var divForm = document.getElementById("captura");
  divForm.hidden = true;
  var principal = document.getElementById("principal");
  principal.style.opacity = "1";

  document.frmCaptura.id.value = "";
  document.frmCaptura.nom.value = "";
  document.frmCaptura.ape.value = "";
}

function Eliminar() {
  /*var tbl = document.getElementById("tbl");
  var numFilas = tbl.rows.length;
  var lstEliminar = new Array();
  for (var x = 1; x < numFilas; x++) {
    if (tbl.rows[x].cells[3].childNodes[0].checked);
    lstEliminar.push(x);
  }
  if (lstEliminar.length == 0) {
    alert("No hay filas seleccionadas");
  } else {
    for (var i = lstEliminar.length - 1; i >= 0; i--) {
      tbl.deleteRow(lstEliminar[i]);
    }
    tbl.rows[0].cells[3].childNodes[0].checked = false;
  }*/
  var tbl = document.getElementById("tbl");
  var numFilas = tbl.rows.length;
  for (var x = 1; x <= numFilas; x++) {
    if(tbl.rows[x].cells[3].childNodes[0].checked) tbl.deleteRow(x);
  }
}
