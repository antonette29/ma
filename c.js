function myFunction() {
    var menu = document.getElementById('mytopnav');
    if (menu.className === "topnav") {
      menu.className += ' responsive';
    }else {
      menu.className = 'topnav';
    }
  }
  
  
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  // Get the nav
  function myFunction() {
    var menu = document.getElementById('mytopnav');
    if (menu.className === "topnav") {
      menu.className += ' responsive';
    }else {
      menu.className = 'topnav';
    }
  }
  
  
  //booking
  let sliderImages = document.querySelectorAll('.slide'),
      arrowRight = document.querySelector('#arrow-right'),
      arrowLeft = document.querySelector('#arrow-left'),
      i = 0
  
  
  
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = 'none'
    }
  }
  function startSlider() {
    reset()
    sliderImages[i].style.display = 'block'
  }
  arrowRight.addEventListener('click', function() {
    if(i > sliderImages.length - 2 ) {i = -1}
    i++
    startSlider()
  })
  arrowLeft.addEventListener('click', function() {
    if (i === 0) {i = sliderImages.length}
    i--
    startSlider()
  })
  
  function alert1() {
    let y = 1
    alert(y)
    y++
    setTimeout(alert1, 6000)
  }
  // alert1()
  
  startSlider()
  
  
  //log in
function create_account(){  
var n=document.getElementById("n1").value;  
var e=document.getElementById("e1").value;  
var p=document.getElementById("p1").value;  
var cp=document.getElementById("p2").value;  
//Code for password validation  
        var letters = /^[A-Za-z]+$/;  
        var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
//other validations required code  
if(n==''||e==''||p==''||cp==''){  
alert("Enter each details correctly");  
}  
else if(!letters.test(n))  
        {  
            alert('Name is incorrect must contain alphabets only');  
        }  
else if (!email_val.test(e))  
        {  
            alert('Invalid email format please enter valid email id');  
        }  
else if(p!=cp)  
{  
alert("Passwords not matching");  
}  
else if(document.getElementById("p1").value.length > 12)  
{  
alert("Password maximum length is 12");  
}  
else if(document.getElementById("p1").value.length < 6)  
{  
alert("Password minimum length is 6");  
}  
else{  
alert("Your account has been created successfully... Redirecting to JavaTpoint.com");  
window.location="https://www.javatpoint.com/";  
}  
}  