// menu

var menuShow;
menuShow = false;


$( "#target" ).click(function() {
  
  if ( menuShow === false ) {
  $(".overlay").css("background-color","black");
  $(".overlay").css("opacity","1");
  $(".info").css("background-color","white");
  $(".info").css("box-shadow","0 0 20px 10px rgba(255,255,255,0.4), 0 0 100px 60px rgba(255,255,255,0.2)");
    
  menuShow = true;
    
} else if ( menuShow === true ) {
  $(".overlay").css("opacity","0");
  $(".overlay").css("background-color","white");
  $(".info").css("background-color","black");
  $(".info").css("box-shadow","none");

  menuShow = false;
}
  
  
});