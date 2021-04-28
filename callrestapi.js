var url = "http://35.223.20.167:8091/teamproductoapi/productos";

function postProduct() {

  var myName = $('#name').val();
  var myPrice = $('#price').val();
  var mySeller = $('#seller').val();
  var myCategory = $('#category').val();
  var myStock = $('#stock').val();

  var myProduct = {
    nombre: myName,
    precio: myPrice,
    vendedor: mySeller,
    categoria: myCategory,
    stock: myStock
  };
  console.log(myProduct);

  $.ajax({
     url: url,
     type: 'post',
     dataType: 'json',
     contentType: 'application/json',
     success: function (data) {
       console.log(data);
       $('#res').html(JSON.stringify(data.producto));
     },
     data: JSON.stringify(myProduct)
  });
}

function getProducts() {

    $.getJSON(url,
      function(json) {
         console.log(json);
  
          var arrProducts = json.products;
  
          var htmlTableProducts = '<table border=1>';
          htmlTableProducts += 
            '<tr><th>ID</th><th>Nombre</th><th>Categoría</th>' +
            '<th>Vendedor</th><th>Precio</th><th>Inventario</th></tr>';
  
          arrProducts.forEach(function(item) {
             console.log(item);
             htmlTableProducts += '<tr>' +
                                      '<td>' + item.id + '</td>' +
                                      '<td>' + item.nombre + '</td>' +
                                      '<td>' + item.categoria + '</td>' +
                                      '<td>' + item.vendedor + '</td>' +
                                      '<td>' + item.precio + '</td>' +
                                      '<td>' + item.stock + '</td>' +
                                '</tr>';
          });
  
          htmlTableProducts += '</table>';
  
         $('#res').html(htmlTableProducts);
      }
    );
  }
  