var users;
$(document).ready(function(){

    $.ajax({

        url:"http://localhost:8080/api/users"
    }).then(function (data) {
        console.log(data);
        users = data;


    });
});



function register() {
    console.log("submit()");
    $("#errordiv").hide();
    console.log(users);
    var userID = $("#username").val();
    console.log(userID);
    var password = $("#password").val();
    console.log(password);
    var fullname = $("#fullname").val();
    var address = $("#address").val();

    var modeofpayment = $("input[name='modeofpayment']:checked").val();
    console.log(modeofpayment);

    var duplicateusername = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userID) {
            console.log("Duplicate Username");
            $("#errordiv").show();
            duplicateusername = true;
            return null;

        }
    }
    if (!duplicateusername)
    {
        if (fullname==""||address==""||password==""||modeofpayment==""||modeofpayment==null||userID=="")
        {
            alert("Please enter all the fields");
            return false;
        }
        var userDetails = {"fullname":fullname, "address":address, "password": password, "modeofpayment": modeofpayment, "username": userID,"usertype":"customer"};

        console.log(userDetails);
        $.ajax({
            type:"POST",
            dataType:"json",
            contentType:"application/json",
            data:JSON.stringify(userDetails),
            url:"http://localhost:8080/api/users/save"
        }).then(function (data) {
            console.log(data);

        });


        alert("Registeration Successful!!! Redirecting to Login page");
        window.location.href="/login";
    }

}