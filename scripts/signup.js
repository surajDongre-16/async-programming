let info= JSON.parse(localStorage.getItem("user_data")) || []

function formsb(e){
    e.preventDefault()

    let form=document.getElementById("form")

    let name=form.name.value
    let number=form.contact.value
    let email=form.email.value
    let pass=form.password.value
    if(name=="" || number=="" || email=="" || pass==""){
        document.querySelector("#error").innerText="*Please fill all the details"
        document.querySelector("#error").style.display="block"
    }   
    else{
        document.querySelector("#error").style.display="none"
        function Data(n,no,e,p){
            this.name=n,
            this.number=no,
            this.email=e,
            this.pass=p
        }
        let user=new Data(name,number,email,pass)
        info.push(user)
    
        localStorage.setItem("user_data",JSON.stringify(info))
        window.location.href="login.html"
    }
   
}