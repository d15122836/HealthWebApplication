var users;
$(document).ready(function(){

    $.ajax({

        url:"http://localhost:8080/api/users"
    }).then(function (data) {
        console.log(data);
        users = data;


    });
});
// $("#submit").click(function () {
//
// });

function login() {
    console.log("submit()");
    $("#errordiv").hide();
    console.log(users);
    var userID = $("#username").val();
    console.log(userID);
    var password = $("#password").val();
    console.log(password);
    for(var i=0;i<users.length;i++)
    {
        if (users[i].username === userID && users[i].password === password)
        {
            console.log("login successfull");
            if (users[i].usertype === "admin")
            {
                window.location.href = "/admin";
            }
            else
            {
                window.location.href = "/homepage";
            }

        }


    }

    // alert("Incorrect Username and Password");
    $("#errordiv").show();
    return true;
}