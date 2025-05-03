
// its work ---
let lists = document.querySelectorAll('nav ul li');

lists.forEach( function(item){
  
  	item.addEventListener('click', function(){

    lists.forEach( function(x){
        x.classList.remove('active')
      } )


      item.classList.add('active');
      console.log(lists)
      


  })

})

// its work---

$('.add-order-block').slick({
	infinite: true,
	autoplay: true,
	slidesToShow: 2,
	draggable:true,
	arrows: false
  });



//   its work---

// $('.add-order-block').slick({
// 	dots: false,
// 	infinite: true,
// 	speed: 300,
// 	slidesToShow: 2,
// 	slidesToScroll: 2,
// 	arrows: false,
// 	responsive: [

// 		{
// 			brakpoint: 1920,
// 			settings:{
// 				slidesToShow:1
// 			}
// 		}

// 	]


// });




jQuery(document).ready(function($){
// its works ---
	function imageChanger(n){

		$(`.order-btn${n}`).click(function(){

			let price = $(this).data("price")
			$("#price-holder").text(price)

			let smallImageLink = $(`#small-image${n}`).attr("src")
			$("#large-image").attr("src", smallImageLink)
	
		});

	}
	// imageChanger(1);
	// imageChanger(2);
	// imageChanger(3);

	let i = 1;
	while(i <= 3){
		imageChanger(i);
		i++
	}


	// its work---

	// for(let i = 1; i < 4; i++){
	// 	imageChanger(i);
	// }


});


// its work ---

let confirmorder = $(".content-section .main-content .photo-block .big-img .confirm-order");

let order_btn = $(".button");


	$(order_btn).click( function(){

		$( confirmorder ).fadeIn(900).delay(2000).fadeOut(900);

	} );








