$(document).ready(function () {
      $(document).bind("contextmenu", function (e) {
          return false;
      });
      // Show More button
      $("#btn").click(function(){
        $("#more").toggle(500);
        $("#s").toggle();
        $("#h").toggle();
      });
});

// Sidebar Open and Close function for mobile view
 function w3_open() {
   document.getElementById("mySidebar").style.display = "block";
   document.getElementById("myOverlay").style.display = "block";
 }
 function w3_close() {
   document.getElementById("mySidebar").style.display = "none";
   document.getElementById("myOverlay").style.display = "none";
 }


 // Smooth Scrolling to a height
 $(document).on('click', 'a[href^="#"]', function(e) {
     // target element id
     var id = $(this).attr('href');

     // target element
     var $id = $(id);
     if ($id.length === 0) {
         return;
     }

     // prevent standard hash navigation (avoid blinking in IE)
     e.preventDefault();

     // top position relative to the document
     var pos = $id.offset().top - 100;

     // animated top scrolling
     $('body, html').animate({scrollTop: pos});
 });


 // Function for Skills tabs
 function run(name) {
   var i;
   var x = document.getElementsByClassName("magic");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   document.getElementById(name).style.display = "block";
 }


 // Gfg contribution button
 function contribution(){
   window.open("https://auth.geeksforgeeks.org/user/aditya_taparia/articles");
 }

 // Project-1 button
 function github_project_1(){
   window.open("https://github.com/aditya-taparia/Realtime-facerecognition-");
 }

 // Project-2 button
 function github_project_2(){
   window.open("https://github.com/aditya-taparia/ImageEditor-Tkinter-Application");
 }

 // Project-3 button
 function github_project_3(){
   window.open("https://github.com/aditya-taparia/HTMLPad");
 }

 // Project-3 website
 function github_project_3_website(){
   window.open("https://aditya-taparia.github.io/HTMLPad/");
 }

 // Contact Buttons
 function linked_in_open(){
   window.open("https://www.linkedin.com/in/aditya-taparia/");
 }
 function email_open(){
   window.open("mailto:aditya2019@iiitkottayam.ac.in");
 }
 function whatsapp_open(){
   window.open("https://api.whatsapp.com/send?phone=916353757151");
 }
 function github_open(){
   window.open("https://github.com/aditya-taparia");
 }

 function logo_reload(){
   location.reload();
 }
