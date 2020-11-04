document.addEventListener(`DOMContentLoaded`, function() {
	const header = document.querySelector(`header.header`);
	const menu = header.querySelector(`.menu`);
	const menuToggle = header.querySelector(`.toggle button`);

	let height = $(window).innerHeight(),
		width = $(window).innerWidth();
	let _dropdown;
	let settings = {autoReinitialise: true};

	menuToggle.addEventListener(`click`, () => {
		menuToggle.classList.toggle(`button--close`);
		menu.classList.toggle(`menu--opened`);
		header.classList.toggle(`header--transparent`);
	});

	// if (height >= 700 && width >= 1200) {
	// 	$.scrollify({
	// 		section : `.section`,
	// 		easing: `swing`,
	// 		scrollSpeed: 700
	// 	});
	// }

	$('.mtabs a').on('click', function(e){
		e.preventDefault();
		var 
		$self = $(this),
		$href = $self.attr('href'),
		$cont = $self.closest('.mtabs');

		if(!$self.hasClass('active')) {
			$cont.find('.active').removeClass('active');
			$cont.siblings('.mtabs__cont').find('.mtabs__pane.active').removeClass('active');

			$self.addClass('active');
			$cont.siblings('.mtabs__cont').find($href).addClass('active');
		}
	})

	$('.ex__tab').on('click', function(e){
		e.preventDefault();
		var 
		$self = $(this),
		$href = $self.attr('href');

		if(!$self.hasClass('active')) {
			$('.ex__pane.active').removeClass('active');
			$('.ex__tab.active').removeClass('active');

			$self.addClass('active');
			$($href).addClass('active');
		}
	})
	
	$('.mform__select').styler({
		selectSearch: true,
		selectSearchPlaceholder: 'search',
		selectSearchNotFound: 'Not Found...'
	});

	// $('.modalshow').on('click', function(e){
	// 	e.preventDefault();
	// 	var 
	// 	$href = $(this).attr('href');

	// 	$instance = $.fancybox.getInstance();
	// 	if($instance){$instance.close();}

	// 	$.fancybox.open({
	// 		src  : $href,
	// 		type : 'inline',
	// 		beforeShow: function(){
	// 			$.scrollify.disable();
	// 		},
	// 		afterClose: function(){
	// 			$.scrollify.enable();
	// 		}
	// 	});
	// })

	$('.nsl__form').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize(),
		$email = $form.find('input[name="email"]'),
		$agree = $form.find('input[name="agree"]:checked'),
		$rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
		$error = false;


		if($form.find('input[name="agree"]').length && !$agree.length){
			$form.find('.nsl__agree').addClass('invalid');
			$error = true;
		}else{
			$form.find('.nsl__agree').removeClass('invalid');
		}

		if($email.length){
			if($email.val().length < 1 || !$rv_email.test($email.val())){
				$email.addClass('invalid');
				$error = true;		
			}else{
				$email.removeClass('invalid');
			}
		}

		if($error){
			return false;
		}else{
			$.ajax({
				type: "POST", 
				url: "./send.php", 
				dataType: "json", 
				data: $data,
				beforeSend: function($json) {

				},
				success: function($json){
					if($json['success']){

						$instance = $.fancybox.getInstance();
						if($instance){$instance.close();}
						$.fancybox.open({
							src  : $('#modal_success'),
							type : 'inline',
							beforeShow: function(){
								$.scrollify.disable();
							},
							afterClose: function(){
								$.scrollify.enable();
							}
						});
					}
				},
				error: function(){

				}
			});
		}
		return false;
	})

	$('.form_login').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize(),
		$email = $form.find('input[name="email"]'),
		$password = $form.find('input[name="password"]'),
		$agree = $form.find('input[name="agree"]:checked'),
		$rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
		$error = false;


		if($form.find('input[name="agree"]').length && !$agree.length){
			$form.find('.nsl__agree').addClass('invalid');
			$error = true;
		}else{
			$form.find('.nsl__agree').removeClass('invalid');
		}

		if($password.length){
			if($password.val().length < 3){
				$password.addClass('invalid'); 
				$error = true;
			}else{
				$password.removeClass('invalid');
			}
		}
		if($email.length){
			if($email.val().length < 1 || !$rv_email.test($email.val())){
				$email.addClass('invalid');
				$error = true;		
			}else{
				$email.removeClass('invalid');
			}
		}

		if($error){
			return false;
		}else{
			$.ajax({
				type: "POST", 
				url: "./send.php", 
				dataType: "json", 
				data: $data,
				beforeSend: function($json) {

				},
				success: function($json){
					if($json['success']){

						$instance = $.fancybox.getInstance();
						if($instance){$instance.close();}
						$.fancybox.open({
							src  : $('#modal_success'),
							type : 'inline',
							beforeShow: function(){
								$.scrollify.disable();
							},
							afterClose: function(){
								$.scrollify.enable();
							}
						});
					}
				},
				error: function(){

				}
			});
		}
		return false;
	});

	$('.form_sign').on('submit', function(){
		var
		$form = $(this),
		$data = $form.serialize(),
		$email = $form.find('input[name="email"]'),
		$phone = $form.find('input[name="phone"]'),
		$password = $form.find('input[name="password"]'),
		$confirm = $form.find('input[name="confirm"]'),
		$agree = $form.find('input[name="agree"]:checked'),
		$rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
		$error = false;


		if($form.find('input[name="agree"]').length && !$agree.length){
			$form.find('.mform__agree').addClass('invalid');
			$error = true;
		}else{
			$form.find('.mform__agree').removeClass('invalid');
		}

		if($phone.length){
			if($phone.val().length < 7){
				$phone.addClass('invalid'); 
				$error = true;
			}else{
				$phone.removeClass('invalid');
			}
		}

		if($password.length){
			if($password.val().length < 3){
				$password.addClass('invalid'); 
				$error = true;
			}else{
				$password.removeClass('invalid');
			}
		}

		if($confirm.length){
			if($confirm.val() !== $password.val()){
				$confirm.addClass('invalid'); 
				$error = true;
			}else{
				$confirm.removeClass('invalid');
			}
		}
		if($email.length){
			if($email.val().length < 1 || !$rv_email.test($email.val())){
				$email.addClass('invalid');
				$error = true;		
			}else{
				$email.removeClass('invalid');
			}
		}

		if($error){
			return false;
		}else{
			$.ajax({
				type: "POST", 
				url: "./send.php", 
				dataType: "json", 
				data: $data,
				beforeSend: function($json) {

				},
				success: function($json){
					if($json['success']){

						$instance = $.fancybox.getInstance();
						if($instance){$instance.close();}
						$.fancybox.open({
							src  : $('#modal_success'),
							type : 'inline',
							beforeShow: function(){
								$.scrollify.disable();
							},
							afterClose: function(){
								$.scrollify.enable();
							}
						});
					}
				},
				error: function(){

				}
			});
		}
		return false;
	});






// -------------------------------------------------------


var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("wp_wrapper");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
	/* For each option in the original select element,
	create a new DIV that will act as an option item: */
	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {
		/* When an item is clicked, update the original select box,
		and the selected item: */
		var y, i, k, s, h, sl, yl;
		s = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
		sl = s.length;
		h = this.parentNode.parentNode.parentNode.previousSibling;
		for (i = 0; i < sl; i++) {
		  if (s.options[i].innerHTML == this.innerHTML) {



			  console.log(this.innerHTML);
			  var filename = 'WP-pre-final('+this.innerHTML.toLowerCase()+')-11102020.pdf';
			  var filename_full = document.location.origin + '/whitepaper/' + filename;
			link = document.createElement("a"); //create 'a' element
			link.setAttribute("href", filename_full); //replace "file" with link to file you want to download
			link.setAttribute("download", filename);// replace "file" here too
			link.click(); //virtually click <a> element to initiate download



			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			yl = y.length;
			for (k = 0; k < yl; k++) {
			  y[k].removeAttribute("class");
			}
			this.setAttribute("class", "same-as-selected");
			break;
		  }
		}
		h.click();
	});
	b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
	/* When the select box is clicked, close any other select boxes,
	and open/close the current select box: */
	e.stopPropagation();
	closeAllSelect(this);
	this.nextSibling.classList.toggle("select-hide");
	this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
	if (elmnt == y[i]) {
	  arrNo.push(i)
	} else {
	  y[i].classList.remove("select-arrow-active");
	}
  }
  for (i = 0; i < xl; i++) {
	if (arrNo.indexOf(i)) {
	  x[i].classList.add("select-hide");
	}
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

document.querySelector('.select-items').fakeScroll();



// ------------------------------------



$("#toTeam").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".section--foundation").offset().top
    }, 2000);
});





});
