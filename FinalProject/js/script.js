$(document).ready(function() {
	
	$('#hamburger').click(function(){
		$('#accordion').toggle();
	});
	
	$('#accordion li').click(function(){
		if($(this).hasClass('home')) {
			$(location).attr('href', 'index.html');
		}
		if($(this).hasClass('about')) {
			$(location).attr('href', 'about.html');
		}
		if($(this).hasClass('portfolio')) {
			$(location).attr('href', 'portfolio.html');
		}
		if($(this).hasClass('blog')) {
			$(location).attr('href', 'blog.html');
		}
		if($(this).hasClass('contact')) {
			$(location).attr('href', 'contact.html');
		}
	});
	
	$('.header_background').mouseleave(function(){
		$('#accordion').hide();
	});
	
	//responsive grid for portfolio & blog posts
	var getColWidth = function() {
		var num = 4;
		var margin = 20;
		
		//calculate number of columns based on screen size
		if($(window).width() >= 800 && $(window).width() < 1024) {
			num = 3;
		}
		else if($(window).width() >= 640 && $(window).width() < 800) {
			num = 2;
		}
		else if($(window).width() < 640) {
			num = 1;
		}
		else {
			num = 4;
		}
		
		//see if a project or post is selected and expand view for a single item
		if($('.project').hasClass('active')) {
			$('.project').css({
				"width": $('.project_container').width(),
				"margin-right": margin
			});
		}

		else {	
			$('.project').css({
				"width": Math.floor($('.project_container').width()/num-(margin+num)),
				"margin-right": margin
			});
			$('.post').css({
				"width": $('.post_container').width(),
				"margin-right": margin
			});
		}
		
		//set thumbnail width
		
		if($('.square').parent().hasClass('project')) {
			var width = Math.floor($('.body_container > .wrapper').width()/num-(margin+num));
			$('.square').css({"width": width , "height": width*.7});
			$('.nailthumb-container').nailthumb({replaceAnimation:null});
		}
		else {
			var width = Math.floor($('.body_container > .wrapper').width()/2-(margin+2));
			$('.square').css({"width": width , "height": width*.7});
			$('.nailthumb-container').nailthumb({replaceAnimation:null});
		}

	}
	
	getColWidth();
	$('.back').toggle();
	$(window).resize(function(){
		getColWidth();
	});
	
	var toggleContent = function(item) {
		var className = item.attr('class');
		item.toggleClass('active');
		item.siblings().toggle();
		if(item.hasClass('project')) {
			//~ proj.children('.snippet').toggle();
			//~ proj.children('.square').toggle();
			if(item.hasClass('active')) {
				getColWidth();
				item.children('.project_detail').toggle('blind',300);
			}
			else {
				item.children('.project_detail').toggle();
				getColWidth();
			}
		}
		else if(item.hasClass('post')) {
			item.children('.snippet').toggle();
			
			if(item.hasClass('active')) {
				getColWidth();
				item.children('.post_content').toggle('blind',300);
			}
			else {
				item.children('.post_content').toggle();
				getColWidth();
			}
		}
		else {
			return;
		}
		
		
		
	}

	
	$('.square').click(function(){
		toggleContent($(this).parent());
	});
	
	$('.post h1').click(function(){
		toggleContent($(this).parent());
	});
	
	$('.back').click(function(){
		toggleContent($('.active'));
	});

	
	
})
