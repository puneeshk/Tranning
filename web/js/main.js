$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Continue",
            previous: "Back",
            //finish: 'Proceed to checkout'
        },
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Create Steps Image
    $('.steps ul li:first-child').find('a').append('<span class="step-order"><i class="fa fa-map-marker"></i> <b>Address</b></span>');
    $('.steps ul li:nth-child(2)').find('a').append('<span class="step-order"><i class="fas fa-file-alt"></i> <b>Summary</b></span>');
    $('.steps ul li:last-child a').append('<span class="step-order"><i class="fas fa-credit-card"></i> <b>Payment</b></span>');
    // Count input 
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
})
