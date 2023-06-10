const loginForm = document.getElementById("Signin-form");
const loginButton = document.getElementById("login-form-submit");
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+.$/;
loginButton.addEventListener("click",(e) => {
    e.preventDefault();
    const email=loginForm.email.value;
    const password=loginForm.password.value;
    if(email==='' || password==='')
    {
        alert('field cannot be empty!');
    }
    else
    {
    if(filter.test(email))
    {
        if(email==="ali@gmail.com" && password==="akbar")
        {
            alert("You have successfully logged in");
            window.location.href="product.html";
        }
        else
        {
            alert("Wrong Credentials");
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