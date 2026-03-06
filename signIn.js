document.getElementById("submit").addEventListener("click" ,function(){
  // console.log("im a click")
  // 1 get the Username
  const username = document.getElementById("username");
  const userValue = username.value.toLowerCase();
  //   console.log(userValue)
  // 2 get the password 
  const password = document.getElementById("password");
  const passwordValue = password.value.toLowerCase();


  if(userValue ==="admin" && passwordValue ==="admin123"){
    alert("Loging successFull");
    window.location.assign("./home/home.html")
  }
  else{
    alert("Loging Failed");
    return

  }


})