/*Script.JS*/

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

// Highlight the top nav as scrolling occurs
 $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
});

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function (){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $('.coachImg').hover(function() {
    $(this).fadeTo("fast" , 0.7);
		}, function() {
    $(this).fadeTo("fast" , 1);
  });   
    
    
    $( "#formSubmit" ).click(function() {
        //Test click function was working
        //alert( "Handler for .click() called." );

              var name = $('#name').val();
              var age = $('#age').val();
              var phone = $('#phone').val();
              var email = $('#email').val();               
              var primPos = $('#primaryPos').val();
              var secPos = $('#secPos').val();
              var prevTravel = $('#prevTravel').val();
              var message = $('#message').val();
          
          var playerInfo = "<br> Name: "+ name+"<br>"           
          + "<br> Age: "+ age+"<br>"
          + "<br> Phone: "+ phone+"<br>"
          + "<br> Email: "+ email+"<br>"
          + "<br> Primary Position: "+ primPos+"<br>"
          + "<br> Secondary Position: "+ secPos+"<br>"
          + "<br> Previous Travel Team: "+ prevTravel+"<br>"
          + "<br> Message: "+ message+"<br>";
          
        // For Testing
       // console.log(playerInfo);
  if ((name!=="") && (age!=="") && (phone!=="") && (email!=="") && (primPos!=="") && (secPos!=="") && (prevTravel!=="") && (message!=="")) {   
  emailjs.send("default_service","akadema",{name: "Test", playerInfo: playerInfo})
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                swal("Success!", "You will hear from our coaches shortly", "success")
            }, function(err) {
                console.log("FAILED. error=", err);
            swal("Something Went Wrong...", "Please Try Again!", "error")
            });
        } else {
            swal("Please fill out all fields", "Please Try Again!", "error")
        }
    }); 



    $('#prospectsBtn').click(function() {
        $(this).css('background-color', '#d9534f');
        $(this).css('color', '#fff');
        $('#bullsBtn').css('background-color', '#fff');
        $('#bullsBtn').css('color', '#000');
        $('input[name="os0"]').val('14U Prospects')
        $('input[name="submit"]').prop("disabled", false);
    });

    $('#bullsBtn').click(function() {
        $(this).css('background-color', '#d9534f');
        $(this).css('color', '#fff');
        $('#prospectsBtn').css('background-color', '#fff');
        $('#prospectsBtn').css('color', '#000');
        $('input[name="os0"]').val('13U Bulls');
        $('input[name="submit"]').prop("disabled", false);
    });



    
//     swal({    
//                confirmButtonColor: "#d9534f",   
//        }); 
  
  })(jQuery); // End of use strict