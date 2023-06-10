const loginForm = document.getElementById("Signup-form");
const loginButton = document.getElementById("login-form-submit");
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+.$/;
loginButton.addEventListener("click",(e) => {
    e.preventDefault();
    const email=loginForm.email.value;
    const password=loginForm.password.value;
    const password1=loginForm.password1.value;
    if(email==='' || password==='' || password1==='')
    {
        alert('field cannot be empty!');
    }
    else
    {
    if(filter.test(email))
    {
    if(password===password1)
    {
        
        alert("SignUp successfully !!  Welcome to Apna Kirana");
        window.location.href="aboutus.html";
    }
     
    else
      {    
        alert("Password is not same");
        location.reload();
    }
}
else
     {
        alert("Please enter a valid email address");
       
        location.reload();
     }
     }
    })