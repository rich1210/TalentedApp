$(document).ready(function() {
	
	
   $('.testJQ').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('.testJQ').mouseleave(function() {
       $(this).animate({
           height: '-=20px'
       }); 
   });
   $('.testJQ').click(function() {
       $(this).toggle(3000);
   });
   
	
});

 function validate(checkBoxName, className) {
        if (document.getElementById(checkBoxName).checked) {
           $(className).show();
           document.getElementById("switch4").checked = true;
        } else {
           $(className).hide(); 
           document.getElementById("switch4").checked = false;
        }
    }