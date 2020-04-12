document.getElementById("solution_area").style.display = "none";

function showHtmlCode() {
     console.log(document.getElementById("solution_area").style.display);
     if (document.getElementById("solution_area").style.display == "none") {
         document.getElementById("solution_area").style.display = "block";
     } else {
         document.getElementById("solution_area").style.display = "none";
     }
 }

