let user_info=JSON.parse(localStorage.getItem("user_data"))

function login(e){
    e.preventDefault()

    let enterd_email=document.querySelector("#email").value
    let enterd_pass=document.querySelector("#password").value

    for(let i=0;i<user_info.length;i++){
        if(user_info[i].email==enterd_email && user_info[i].pass==enterd_pass){
            alert("Login Successful")
            window.location.href="index.html"
            break
        }
        else{
            alert("invalid credentials")
            document.querySelector("#email").value=null
            document.querySelector("#password").value=null
            break;
        }

    }
}