$(document).ready(function () {
  $("#return_login").click(function () {
    $("#register_template").hide();
    $("#register_part2").hide();
    $("#login_template").show();
    $("#login_section_2").show();
    $(this).addClass( "click_activated" );
    $("#create_customer").removeClass( "click_activated" );
  });
  
  $("#login_link").click(function () {
    $("#register_template").hide();
    $("#register_part2").hide();
    $("#login_template").show();
    $("#login_section_2").show();
    $("#return_login").addClass( "click_activated" );
    $("#create_customer").removeClass( "click_activated" );
  });
  
  $("#create_customer").click(function () {
    $("#login_template").hide();
    $("#login_section_2").hide()
    $("#register_template").show();
    $("#register_part2").show();
    $(this).addClass( "click_activated" );
    $("#return_login").removeClass( "click_activated" );
    $("#login_section_2").removeClass( "click_activated" );
  });
  
  $("#login_section_2").click(function (){
    $("#login_template").hide();
    $("#login_section_2").hide()
    $("#register_template").show();
    $("#register_part2").show();
    $(this).addClass( "click_activated" );
    $("#create_customer").addClass( "click_activated" );
    $("#return_login").removeClass( "click_activated" );
  });
  
  
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    var content = document.getElementById("CustomerPassword");
    if (content.type === "password") {
      content.type = "text";
      jQuery(".toggle-password").text(" hide");
    } else {
      content.type = "password";
      jQuery(".toggle-password").text(" show");
    }
    
    var content2 = document.getElementsByClassName("register_pwd")[0];
    if (content2.type === "password") {
      content2.type = "text";
      jQuery(".toggle-password").text(" hide");
    } else {
      content2.type = "password";
      jQuery(".toggle-password").text(" show");
    }
  });
  
  
  $(".register_pwd").focus (function(){
    $("#pwd_alarm").show();
  });
  
  $(".register_pwd").keyup(function(){
    var VAL = this.value;
    var symbols = /[!˜@#$%ˆ&*(){}|\/'';:]/g;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    if((!upperCaseLetters.test(VAL)) || (!numbers.test(VAL))||(!lowerCaseLetters.test(VAL)) || (VAL.length < 8) || (!symbols.test(VAL))){
      $("#pwd_alarm").show();
    }else{
      $("#pwd_alarm").hide();
      if ((VAL.length >= 8) &&(VAL.length < 10)){
        $("#pwd_validation").text("Password Strength: Medium");
      }else if((VAL.length >= 10) &&(VAL.length < 12)){
        $("#pwd_validation").text("Password Strength: Strong");
      }else if(VAL.length >= 12){
        $("#pwd_validation").text("Password Strength: Very Strong");
      }else {
      	$("#pwd_validation").text("Password Strength: Weak!!");
      }
      
    }
    
//     if(symbols.test(VAL)){
//       alert("yes");
//     }
    
  });
  
});

function checkPasswordMatch() {
    var password = $(".register_pwd").val();
    var confirmPassword = $(".confirm_pwd").val();

    if (password != confirmPassword)
        $("#pwd_validation").text("Passwords do not match!");
    else
        $("#pwd_validation").text("Passwords match.");
}

$(document).ready(function () {
   $(".confirm_pwd").keyup(checkPasswordMatch);
});


