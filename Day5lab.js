function display(anotherfn){
    document.getElementById("demo").innerHTML = anotherfn.name + " " + anotherfn.email + " " +anotherfn.password;

}
const userDetails ={
    name : '',
    email : '',
    password : '',

};
function readName(){
    let vname = document.getElementById("name").value;
    let vemail = document.getElementById("email").value;
    let vpassword = document.getElementById("password").value;
    userDetails.name = vname;
    userDetails.email = vemail;
    userDetails.password = vpassword;
    display(userDetails);

}