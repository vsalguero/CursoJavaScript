const errormessage = document.getElementById("errormessage");
function CrearTabla() {
  const content = document.getElementById("content"),
    tbl = document.createElement("table");
  tbl.style.width = "50%";
  const header = ["Id", "Nombre", "Apellido", "Fecha de nacimiento"];

  const tr = tbl.insertRow();
  var ctrl = document.createElement("input");
  ctrl.type = "checkbox";
  tbl.id = "tbl";
  tbl.style.cellspacing = 0;
  tbl.style.cellpading = 0;
  for (let j = 0; j < 4; j++) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(header[j]));
  }
  tbl.rows[0].insertCell(4);
  tbl.rows[0].cells[4].appendChild(ctrl);

  content.appendChild(tbl);
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
  var v4 = document.frmCaptura.bdate.value;
  let date = new Date(v4);
  errormessage.innerHTML = "";
  if (v1 !== "" && v2 !== "" && v3 !== "" && v4 !== "") {
    var tbl = document.getElementById("tbl");
    var numFilas = tbl.rows.length;
    tbl.insertRow(numFilas);
    var ctrl = document.createElement("input");
    ctrl.type = "checkbox";
    ctrl.className = "check";

    tbl.rows[numFilas].insertCell(0);
    tbl.rows[numFilas].cells[0].textContent = v1;
    tbl.rows[numFilas].insertCell(1);
    tbl.rows[numFilas].cells[1].textContent = v2;
    tbl.rows[numFilas].insertCell(2);
    tbl.rows[numFilas].cells[2].textContent = v3;
    tbl.rows[numFilas].insertCell(3);
    tbl.rows[numFilas].cells[3].textContent = date.toLocaleDateString();
    tbl.rows[numFilas].insertCell(4);
    tbl.rows[numFilas].cells[4].appendChild(ctrl);

    Cancelar();
  } else {
    errormessage.innerHTML = "Todos los campos son obligatorios";
  }
}

function Cancelar() {
  var divForm = document.getElementById("captura");
  divForm.hidden = true;
  var principal = document.getElementById("principal");
  principal.style.opacity = "1";

  document.frmCaptura.id.value = "";
  document.frmCaptura.nom.value = "";
  document.frmCaptura.ape.value = "";
  document.frmCaptura.bdate.value = "";
  errormessage.innerHTML = "";
}

function Eliminar() {
  var chEliminar = document.querySelectorAll(".check");
  if (chEliminar.length > 0) {
    chEliminar.forEach((box) => {
      if (box.checked) box.closest("tr").remove();
    });
  } else {
    console.log("Debe seleccionar un elemento para eliminar");
  }
}
