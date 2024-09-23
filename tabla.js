var datos = {};

var productos = info => {
    console.log(info);
    datos.productos= info;
    var html = "";
    html += "<h2 style='text-align:center;'>Productos de Zapatería</h2>";
    html += "<table border='2' style='margin: 0 auto; border-collapse: collapse; width: 100%;'>";
    html += "<tr style='background-color: #FFC0CB; text-align: center;'>";
    html += "<th>Folio</th><th>Descripción</th><th>Talla</th><th>Precio</th></tr>";
    datos.productos.map(producto => {
        html += "<tr style='text-align: center;'>";
        html += "<td>" + producto.folio + "</td>";
        html += "<td>" + producto.descripcion + "</td>";
        html += "<td>" + producto.talla + "</td>";
        html += "<td>" + producto.precio + "</td>";
        html += "</tr>";
    });
    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
}
