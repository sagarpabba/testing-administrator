$(document).ready(function(){
	
	
	 //give a notification
    // generate("success","Welcome to join the Testing Administration System !...");
	//Sidebar Accordion Menu:
		
		$("#main-nav li ul").hide(); // Hide all sub menus,all sub menus
		$("#main-nav li a.current").parent().find("ul").slideToggle("slow"); // Slide down the current menu item's sub menu
		
		$("#main-nav li a.nav-top-item").click( // When a top menu item is clicked...		   
			function () {				
			     // this is the same node item
			    $("#main-nav li a.nav-top-item").removeClass('current');
                $(this).addClass('current');
			     
			     
				$(this).siblings().find("ul").slideUp("normal"); // Slide up all sub menus except the one clicked
				$(this).parent().siblings().find("ul").slideUp("fast"); 
				$(this).next().slideToggle("normal"); // Slide down the clicked sub menu
			
				return false;
			}
		);
		
		$("#main-nav li ul li a").click(function(){
			       
        		    $("#main-nav li ul li a").removeClass('current');
        		    $(this).addClass("current");	
        		    var effortid=$(this).attr("id");
        		    if(effortid="effort"){
        		    	//console.log("this is the effort tab clicked");
        		    	//get the registry value
						 
						
        		    }   
        		    var url=$(this).attr("rel");
        		   // pageIsloading();
        		  //  console.log("the current menu is clicked");
        		   // $('body').addClass("loading"); 
        		    $.fancybox.showLoading();
                    $("#maincontent").load(url,function( response, status, xhr ) {
                       //  console.log("loading status is:"+status);
                          if(status=="success"){
                                                 	      
                    	   }else{
                    	       $("#maincontent").html("Loading Server data Error "+response);
                    	   }
                    	   $.fancybox.hideLoading();
                        });
                 //   $.fancybox.hideLoading();
                  //  console.log("page loading done!");
                 //    $('body').removeClass("loading"); 
                   // $.fancybox.close();
		});
		
		
		$("#main-nav li a.no-submenu").click( // When a menu item with no sub menu is clicked...
			function () {
			    $("#main-nav li a.no-submenu").removeClass('current');
			    $(this).addClass('current');
			    var url=$(this).attr("rel");
			   // $.fancybox.showLoading();
			    if(url!="undefined"){
			    	//pageIsloading();
                    $("#maincontent").load(url,function( response, status, xhr ) {
                        //$.fancybox.hideLoading();
                    });
                  //  $.fancybox.close();
                }
				//'window.location.href=(this.href); // Just open the link instead of a sub menu
				return false;
			}
		); 

    // Sidebar Accordion Menu Hover Effect:
		
		$("#main-nav li .nav-top-item").hover(
			function () {
				$(this).stop().animate({ paddingRight: "25px" }, 200);
			}, 
			function () {
				$(this).stop().animate({ paddingRight: "15px" });
			}
		);

    //Minimize Content Box
		
		$(".content-box-header h3").css({ "cursor":"s-resize" }); // Give the h3 in Content Box Header a different cursor
		$(".closed-box .content-box-content").hide(); // Hide the content of the header if it has the class "closed"
		$(".closed-box .content-box-tabs").hide(); // Hide the tabs in the header if it has the class "closed"
		
		$(".content-box-header h3").click( // When the h3 is clicked...
			function () {
			  $(this).parent().next().toggle(); // Toggle the Content Box
			  $(this).parent().parent().toggleClass("closed-box"); // Toggle the class "closed-box" on the content box
			  $(this).parent().find(".content-box-tabs").toggle(); // Toggle the tabs
			}
		);

    // Content box tabs:
		
		$('.content-box .content-box-content div.tab-content').hide(); // Hide the content divs
		$('ul.content-box-tabs li a.default-tab').addClass('current'); // Add the class "current" to the default tab
		$('.content-box-content div.default-tab').show(); // Show the div with class "default-tab"
		
		$('.content-box ul.content-box-tabs li a').click( // When a tab is clicked...
			function() { 
				$(this).parent().siblings().find("a").removeClass('current'); // Remove "current" class from all tabs
				$(this).addClass('current'); // Add class "current" to clicked tab
				var currentTab = $(this).attr('href'); // Set variable "currentTab" to the value of href of clicked tab
				$(currentTab).siblings().hide(); // Hide all content divs
				$(currentTab).show(); // Show the content div with the id equal to the id of clicked tab
				return false; 
			}
		);

       // generateMsg("success","Welcome to the Testing Administration System!");
});
  
  
  