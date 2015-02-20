
$(document).ready(function() {

var price = 799;

$('#totalprice').html(price);

$('#travellers').on('change', function() {
    var ticketCount = $(this).val();
    var totalcost = ticketCount * price;
    $('#totalprice').html(totalcost);
    dataLayer.push({'event': 'selectTraveller', 'ticketCount':ticketCount});

});



    console.log( "ready!" );


    var array = [];

    $(".button").click(function() {
        array.push($(this).siblings("p").text()); //Replace with this and it will get the text from clicked li only.
        console.log(array);
    });
    $("#myCartButton").click(function() {
    	alert(array);
    });


var mailtolink = $(".mailtolink").attr("href");
console.log(mailtolink);
    
});
    
function myFunction() {
    var x = document.getElementById(".srchboxinput").value;
    
}





