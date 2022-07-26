function validate(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    if (username == "admin"  && password == "123456"){
        alert("Welcome To R&J Online Shop");
        window.open ("index.html");
        return false;
    }
    else{
        alert("Wrong Username or Password Please Try Again");
    }
}