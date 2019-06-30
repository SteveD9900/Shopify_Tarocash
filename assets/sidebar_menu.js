$.sidebarMenu = function(menu) {
  var animationSpeed = 300,
    subMenuSelector = '.sidebar-submenu';

  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();
	
    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
      $(this).find($(".fa-minus")).removeClass('fa-minus').addClass('fa-plus');
      
    }

    //If the menu is not visible
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
      //Get the parent menu
      var parent = $this.parents('ul').first();
      //Close all open menus within the parent
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      //Remove the menu-open class from the parent
      ul.removeClass('menu-open');
      parent.find($(".fa-minus")).removeClass('fa-minus').addClass('fa-plus');
      //Get the parent li
      var parent_li = $this.parent("li");

      //Open the target menu and add the menu-open class
      checkElement.slideDown(animationSpeed, function() {
        //Add the class active to the parent li
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
	  $(this).find($(".fa-plus")).removeClass('fa-plus').addClass('fa-minus');
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(subMenuSelector)) {
      e.preventDefault();
    }
  });
}


// $(document).ready(function() {
//     $("li").click(function(event) {
//         alert($(this).attr('id'));
//     });
// });

$(document).mouseup(function(e) 
{
      	var container = $(".div_area");
  		var minicart = $("#mini_cart");
      	if (!container.is(e.target) && container.has(e.target).length === 0 ) 
        {
            minicart.hide();
        }
});

$(document).ready(function () {
  $("#show_search").click(function () {
    $("#original_bar").hide();
    $("#search_section").slideToggle();
  });

  $("#searchclear").click(function (){
    $("#original_bar").show();
    $("#search_section").hide();
  });
  
  
  
  $("#show_mini_cart").click(function(){
    $("#mini_cart").toggle();
//     if($("#mini_cart").is(":hidden")){
//     	$("#mini_cart").show();
//     }else{
//     	$("#mini_cart").hide();
//     }
  	
  });
  
  
  $("#close_mini_cart").click(function(){
  	$("#mini_cart").hide();
  });
});


// $("button").click(function(){
//     $(this).find("i").toggleClass("fa-truck");
// });<i class="fas fa-minus"></i>