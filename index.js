var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_container").style.top = "0";
    //document.getElementById("fixscroll").style.marginTop = "150px";
  } else {
    document.getElementById("nav_container").style.top = "-110px";
    //document.getElementById("fixscroll").style.marginTop = "140px";
  }
  prevScrollpos = currentScrollPos;
}