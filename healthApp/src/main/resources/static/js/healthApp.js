$(document).ready(function(){

    $.ajax({

        url:"http://localhost:8080/api/products"
    }).then(function (data) {
        console.log(data)
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
+'  <input type="number" min="0" class="form-control" id='+quantityID+' > </div>'
    +'<div class="col-4 padding-0">'
    +'  <button class="btn btn-primary" onclick="addToCart('+f.id+')" >Add To Cart  </button>'
    +'</div>'
    +'<div class="col-12">'
+'  <button class="btn btn-primary btn-block"'
    +'  onclick="removeFromCart('+f.id+')">Remove From Cart'
    +'</button>'
    +'</div>'
    +'</div>'
    +'</div>'
    +'</div>'
    +'</div>'
    ;
return tableRow;
}

var addToCart = function (product) {
    console.log(product)

    var quantity = document.getElementById("quantity_"+product).value;
    console.log(quantity)
    var item = {};
    item.id = product;
    item.quantity = quantity;
    var itemFound = false;
    if (shoppingCart.length>0) {
        for (var i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].id == product) {
               shoppingCart[i] = item;
               itemFound=true;
               break;
            }



        }
    }
    if (!itemFound){
        shoppingCart.push(item);
            }
    console.log(shoppingCart);
}

var removeFromCart = function (product) {

    console.log(product);
    for (var i =0;i<shoppingCart.length;i++){
        if (shoppingCart[i].id == product)
        {
            console.log("inside if");

            console.log(shoppingCart[i]);
            console.log(shoppingCart[i].id);
            console.log(shoppingCart);
            shoppingCart.splice(i,1);
            document.getElementById("quantity_"+product).value = 0;

            console.log(shoppingCart);
        }
    }
    console.log(shoppingCart);


}