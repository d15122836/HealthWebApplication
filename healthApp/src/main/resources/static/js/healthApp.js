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
    console.log(productItems);
    for (var i = 0; i < productItems.length; i++)
    {
        if (productItems[i].id == product)
        {

            console.log(productItems[i]);
            item.name = productItems[i].product_name;
            item.price= productItems[i].price *quantity;
        }
    }

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
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == product) {
            console.log("inside if");

            console.log(shoppingCart[i]);
            console.log(shoppingCart[i].id);
            console.log(shoppingCart);
            shoppingCart.splice(i, 1);
            document.getElementById("quantity_" + product).value = 0;

            console.log(shoppingCart);
        }
    }
    console.log(shoppingCart);

}

var viewCart = function ()
{
    $("#shoppingCartID").empty();
    var cartRow = '<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">' +
        '    <div class="card-header text-center">Shopping Cart</div>' +
        '    <div class="card-body">' +
        '        <hr>' +
        '        <h6 class="card-title">Items bought:</h6>' ;

    var itemRowStart = '        <ul>';
    var itemRowEnd = '        </ul>';
    var totalPrice = 0;
    console.log(shoppingCart);
    var itemRow = '';
    for (var i = 0; i < shoppingCart.length; i++)
    {
        var itemValue = createCartRow(shoppingCart[i]);
        totalPrice+=shoppingCart[i].price;
        itemRow+= itemValue;
    }
    var checkoutDiv = '<div class="text-black" ' +
        '                >Total: ' + totalPrice+
        '        </div>'+

        '        <a class="btn btn-light btn-block"  onclick=" return updateProduct();"' +
        '                >Checkout' +
        '        </a>' +
        '    </div>' +
        '</div>' ;
    var shoppingCartDiv = cartRow + itemRowStart +itemRow +itemRowEnd + checkoutDiv;
    $(shoppingCartDiv).appendTo("#shoppingCartID");

    $("#shoppingCartID").show();
}
var createCartRow = function (item) {
    var row =

        '            <li>' +
                        item.name+ '-' +item.quantity+
        '            </li>';

    return row;

}

var updateProduct = function () {
    console.log("updateProduct()");
    for(var i=0;i< shoppingCart.length;i++)
    {
        var product = {"id":shoppingCart[i].id, "availableStock":shoppingCart[i].quantity};
        console.log(product);
        $.ajax({
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            data:JSON.stringify(product),
            url:"http://localhost:8080/api/products/updateProduct"
        }).then(function (data) {
            console.log(data);

            });

    }
    setTimeout(function () {

        window.location.href= "/checkOut";
    }, 3000);

// return true;
}