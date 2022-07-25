document.querySelector("form").addEventListener("submit",signup);

var user_data=JSON.parse(localStorage.getItem("usercred"))||[];
function signup(event){
    event.preventDefault();
    
    var name=document.querySelector("#name").value;
    var mobile=document.querySelector("#mobile").value;
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#password").value;

var obj={
    Name:name,
    Mobile:mobile,
    Email:email,
    Password:pass,
}

if(name==""||mobile==""||email==""||pass==""){
alert("fill required input")
}
else{
    user_data.push(obj);
}
   
   localStorage.setItem("usercred",JSON.stringify(user_data));

}