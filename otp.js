const loginForm = document.getElementById("Signin-form");
const loginButton = document.getElementById("login-form-submit");
var otp=Math.random();
otp=Math.floor(otp*(10000-1000)+1000);
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+.$/;
loginButton.addEventListener("click",(e) => {
    e.preventDefault();
    const email=loginForm.email.value;
    
    if(email==='')
    {
        alert('field cannot be empty!');
    }
  else
  {
    if(filter.test(email))
    {
       
            alert(" Your otp is ==>>  "+otp);
            location.reload();
           
        }
       
     else
     {
        alert("Please enter a valid email address");
       
        location.reload();
     }
    }  
    })
				
    