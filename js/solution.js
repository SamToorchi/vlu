 document.getElementById("solution").onclick = function () {
     console.log("clicked!");
     
     console.log(document.getElementById("solution_html").style.display);
     
     if (document.getElementById("solution_html").style.display == "none") {
         document.getElementById("solution_html").style.display = "block";
         console.log("visible");
     }
     if (document.getElementById("solution_css").style.display == "none") {
         document.getElementById("solution_css").style.display = "block";
         console.log("visible");
     }
     if (document.getElementById("solution_html").style.display == "block") {
         document.getElementById("solution_html").style.display = "none";
         console.log("invisible");
     }
     if (document.getElementById("solution_css").style.display == "block") {
         document.getElementById("solution_css").style.display = "none";
         console.log("inbvisible");
     }
 }
