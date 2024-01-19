let username = document.getElementById('username');
let password = document.getElementById('password');
let flag = 1;
let flag2=1;

function validateFrom()
{
    if(username.value == "")
    {
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag=0;
        
    }
    else if(username.value.length < 3)
    {
        document.getElementById("userError").innerHTML="User Name required min 3 character";
        flag=0;

    }
    else{
        document.getElementById("userError").innerHTML="";
        flag=1;

    }
    if(password.value == "")
    {
        document.getElementById("passError").innerHTML="Password is Empty";
        flag2=0;
    }
    else{
        document.getElementById("passError").innerHTML="";
        flag2=1;


    }

    if(flag==1 && flag2==1)
    {
        return true;
    }
    else{

        return false;
    }
}