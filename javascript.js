let del= document.querySelector(".form");
let show= document.querySelector(".complete");
function confirm(){
  document.querySelector(".card-front");
  document.querySelector(".card-back");
  let name= document.querySelector(".cardholder-name");
  let number = document.querySelector(".card-no1");
  let m = document.querySelector("#mm");
  let y = document.querySelector("#yy");
  let cvc = document.querySelector("#CVC");
  if (
    number.length == 16 &&
    /^[a-zA-Z]+$/.test(name) &&
    m.length != 0 &&
    y.lenth != 0 &&
    cvc.length == 3 &&
    /^[0-9]+$/.test(number) &&
    /^[0-9]+$/.test(cvc)
  ) {
    document.querySelectorAll(".form").style.display = "none";
    document.querySelectorAll(".complete").style.display = "flex";
    
  }
  else{
  if (/^[a-zA-Z ]+$/.test(name)) {
    document.querySelector("#name-error").style.display = "none";
    document.querySelector(".cardholder-name").style.border = "1px solid #000";
  } else{
    if (name.length == 0) {
      document.querySelector("#name-error").innerHTML = "please entre your name";
      document.querySelector(".cardholder-name").style.border =
        "1px solid hsl(0, 100%, 66%)";
      document.querySelector("#name-error").style.display = "inline";
    } else {
      document.querySelector("#name-error").innerHTML =
        "please entre a valid name";
      document.querySelector("#name-error").style.display = "inline";
      document.querySelector(".cardholder-name").style.border =
        "1px solid hsl(0, 100%, 66%)";
    } 
  }
  if (number.length != 16){
    document.querySelector("#num-error").innerHTML ="Please enter vaild number";
    document.querySelector("#num-error").style.display = "inline";
    document.querySelector(".card-no1").style.border = "1px solid hsl(0, 100%, 66%)";
  } else{
    document.queryselector("#num-error").style.display = "none";
    document.querySelector(".card-no1").style.border = "1px solid #000";
  }
  if (m.length == 0 || y.length == 0) {
    document.getElementById("date-error").innerHTML = "can't be blank";
    document.getElementById("yy").style.border = "1px solid hsl(0, 100%, 66%)";
    document.getElementById("mm").style.border = "1px solid hsl(0, 100%, 66%)";
    document.getElementById("date-error").style.display = "inline";
  } else {
    if (0 == m.length < 2 && y.length == 2) {
      document.querySelector("#date-error").style.display = "none";
      document.querySelector("#yy").style.border = "1px solid #000";
      document.querySelector("#mm").style.border = "1px solid #000";
    }
  }
  if (cvc.length == 3 && /^[0-9]+$/.test(cvc)) {
    document.querySelector("#cvc-error").innerHTML = "";
    document.querySelector("#CVC").style.border = "1px solid #000";
  } else {
    if (cvc.length == 0) {
      document.querySelector("#cvc-error").innerHTML = "can't be blank";
      document.querySelector("#CVC").style.border =
        "1px solid hsl(0, 100%, 66%)";
    } else {
      document.querySelector("#cvc-error").innerHTML =
        "wrong format or unvalid CVC";
      document.querySelector("#CVC").style.border =
        "1px solid hsl(0, 100%, 66%)";
    }
  }
}
}
function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}
function v() {
  del.style.display = "block";
  show.style.display = "none";
  document.querySelector(".name").value = "";
  document.querySelector(".number").value = "";
  document.querySelector(".m").value = "";
  document.querySelector(".y").value = "";
  document.querySelector(".cvc").value = "";
  document.querySelector(".show-name-fc").innerHTML = "Jane Appleseed";
  document.querySelector(".show-number-fc").innerHTML = "0000 0000 0000 0000";
  document.querySelector(".show-m-fc").innerHTML = "--";
  document.querySelector(".show-y-fc").innerHTML = "--";
  document.querySelector(".show-cvc-bc").innerHTML = "123";
}
function show_num() {
  let num = document.querySelector(".card-no1").value;
  let joy = num.match(/.{1,4}/g);
  document.querySelector(".card-no").innerHTML = joy.join(" ");
}
function show_n() {
  let n = document.querySelector(".cardholder-name").value;
  document.querySelector("#card-user-name").innerHTML = n;
}
function show_m() {
  let m = document.querySelector("#mm").value;
  document.querySelector("#exdate-m").innerHTML = m;
}
function show_y() {
  let y = document.querySelector("#yy").value;
  document.querySelector("#exdate-y").innerHTML = y;
}
function show_cvc() {
  let cvc = document.querySelector("#CVC").value;
  document.querySelector("#cvv").innerHTML = cvc;
}
