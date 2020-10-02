var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$("#currentDay").text(today);


var d = new Date(); 
var hour = d.getHours();
var minute = d.getMinutes(); 


function colorTaskBars() {
   $(".textarea").attr("style", "background-color: gray")
   if (hour < 9){
    $(".textarea").attr("style", "background-color: green")
   }
   if (hour === 17) {
    $("#fivePM").attr("style", "background-color: red")
   }
   if (hour === 16) {
    $("#fourPM").attr("style", "background-color: red")
    $("#fivePM").attr("style", "background-color: green")

   }
   if (hour === 15) {
    $("#threePM").attr("style", "background-color: red")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")

   }
   if (hour === 14) {
    $("#twoPM").attr("style", "background-color: red")
    $("#threePM").attr("style", "background-color: green")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")
   }
   if (hour === 13) {
    $("#onePM").attr("style", "background-color: red")
    $("#twoPM").attr("style", "background-color: green")
    $("#threePM").attr("style", "background-color: green")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")
   }
   if (hour === 12) {
    $("#twelvePM").attr("style", "background-color: red")
    $("#onePM").attr("style", "background-color: green")
    $("#twoPM").attr("style", "background-color: green")
    $("#threePM").attr("style", "background-color: green")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")
   }
   if (hour === 11) {
    $("#elevenAM").attr("style", "background-color: red")
    $("#twelvePM").attr("style", "background-color: green")
    $("#onePM").attr("style", "background-color: green")
    $("#twoPM").attr("style", "background-color: green")
    $("#threePM").attr("style", "background-color: green")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")
   }
   if (hour === 10) {
    $("#tenAM").attr("style", "background-color: red")
    $("#elevenAM").attr("style", "background-color: green")
    $("#twelvePM").attr("style", "background-color: green")
    $("#onePM").attr("style", "background-color: green")
    $("#twoPM").attr("style", "background-color: green")
    $("#threePM").attr("style", "background-color: green")
    $("#fourPM").attr("style", "background-color: green")
    $("#fivePM").attr("style", "background-color: green")
   }
   if (hour === 9) {
    $(".textarea").attr("style", "background-color: green")
    $("#nineAM").attr("style", "background-color: red")
    
}
else return;
}

colorTaskBars();

var userTasks = {
    nineAM: "",
    tenAM: "",
    elevenAM: "",
    twelvePM: "",
    onePM: "",
    twoPM: "",
    threePM: "",
    fourPM: "",
    fivePM: ""
}






