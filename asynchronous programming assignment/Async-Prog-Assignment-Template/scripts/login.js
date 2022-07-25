var login_details=JSON.parse(localStorage.getItem("usercred"));
document.querySelector("form").addEventListener("submit",login);

function login(event){
    event.preventDefault();

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
      var flag=false;
    for(var i=0;i<login_details.length;i++){
     if(email===login_details[i].Email &&  password===login_details[i].Password){
         flag=true;
     }
    }
    if(flag===true){
        window.location.href="index.html"
    }
    else{
        alert("invalid credentials");
    }
}