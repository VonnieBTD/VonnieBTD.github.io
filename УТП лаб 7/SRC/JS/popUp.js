$(document).ready(function(){
   
    PopUpHide();
});

function PopUpShow(){
    $("#popup").show();
}

function PopUpHide(){
    $("#popup").hide();
}

$( "#popclose").click(function(){
    PopUpHide();
});