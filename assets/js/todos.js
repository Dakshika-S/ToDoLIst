//check off specific todos by clicking
// $("li").click(function(){
// 	//$-->("li")<--.css("color","red");will change all the li in to red
// 	$(this).css("color","gray");//only clicked li will be changed
// 	$(this).css("text-decoration","line-through");
// });

// $("li").click(function(){
// 	// if li is gray
// 	//console.log($(this).css("color"));
// 	if($(this).css("color")==="rgb(128, 128, 128)") {//should compare in rgb 
// 		// 	turn it black
// 		$(this).css("color", "black");//shoould add else statement otherwise wont change the color
// 	}
// 	// else
// 	else{
// 		// 	turn it gray	
// 	$(this).css({// js obj so should use camelCase
// 		color: "gray",//dont use semicolon
// 		textDecoration: "line-through"//use camelCase instead of hyphen
// 	});
// 	}
// });

		// $("li").click(function(){
		// 	// if li is gray
		// 	//console.log($(this).css("color"));
		// 	if($(this).css("color")==="rgb(128, 128, 128)") {//should compare in rgb 
		// 		// 	turn it black
		// 	$(this).css	({
		// 		color: "black",
		// 		textDecoration:"none"
		// 	})
		// 	}
		// 	// else
		// 	else{
		// 		// 	turn it gray	
		// 	$(this).css({// js obj so should use camelCase
		// 		color: "gray",//dont use semicolon
		// 		textDecoration: "line-through"//use camelCase instead of hyphen
		// 	});
		// 	}
		// });

		// -------------------OR--------------------------//
		$("ul").on("click","li",function(){
			$(this).toggleClass("completed");
		});

		//click on x to delete todo
		$("ul").on("click","span",function(event){//event-->evt OR e
			// alert("clicked on a span");
			// event.stopPropagation();//stop the event
			$(this).parent().fadeOut(500,function(){
				$(this).remove();//this here points li(parent) element
			})//remove();//parent element also get removed
			event.stopPropagation();//stop the event

		});

$("input[type ='text']").keypress(function(event){
	if(event.which === 13){//when pressing enter(13) key
		//console.log($(this).val());//will copy the text on the input
		//grabbing new todo text from input
		var todoText = $(this).val();
		//to clear the text in the text input
		$(this).val("");
		//create a new li and add to ul
		//$("ul").append("<li>THIS IS A NEW LI THAT WE APPENDED TO THIS UL</li>")
		$("ul").append("<li><span> <i class='fa fa-trash'></i></span>" + todoText + "</li>")//<i class="fa fa-trash"></i>for this should use single qout

	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});
		