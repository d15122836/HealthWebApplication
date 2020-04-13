var productItems;
$(document).ready(function(){

    $.ajax({

        url:"http://localhost:8080/api/products"
    }).then(function (data) {
        console.log(data);
        productItems = data;
        $.each(data, function (i,f) {
            var tblRow = createTableRow(f);
            $(tblRow).appendTo("#productID");
        });

    });
})

var shoppingCart = [];




var createTableRow = function (f) {
    var imgURL = "../img/"+f.imageURL;
    var quantityID = "quantity_"+f.id;

    var tableRow = '<div class="col-lg-4 col-md-6 mb-4">'
        +'<div class="card text-center">'
        +'<div class="card-header">'
        +'  <h4>'+f.product_name+'</h4>'
        +'  </div>'
        +'  <div class="card-body">'
        +'  <a href="#"><img class="card-img-top" src=' +imgURL+' alt="" width="100px" height="100px"></a>'
        +'<h5 class="card-title"> $ '+f.price +'</h5>'
        +'  <div class="row">'
        +'  <div class="col-4 padding-0" >'
        +'  <p class="" > Quantity: '+f.availableStock +'</p>'
        +'  <div class="col-4 padding-0" >'
        +'  <input type="number" min="0" class="form-control" id='+quantityID+' > </div>'
        +'<div class="col-4 padding-0">'
        +'  <button class="btn btn-primary" onclick="updateProduct('+f.id+')" >Update Stock  </button>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
    ;
    return tableRow;
}
var updateProduct = function (productID) {
    console.log("updateProduct()");
        console.log(productID);
        var quantity = document.getElementById("quantity_"+productID).value;
        console.log(quantity);
        var product = {"id":productID, "availableStock":quantity};
        console.log(product);
        $.ajax({
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            data:JSON.stringify(product),
            url:"http://localhost:8080/api/products/updateStock"
        }).then(function (data) {
            console.log(data);

        });


    setTimeout(function () {

        window.location.reload();
    }, 1000);

// return true;
}
