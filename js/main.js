
// its work ---
let lists = document.querySelectorAll('nav ul li');

lists.forEach(function(item){
  
  	item.addEventListener('click', function(){

    lists.forEach( function(x){
        x.classList.remove('active')
      } )


      item.classList.add('active');
      console.log(lists)
      


  })

})



// $('.add-order-block').slick({
// 	infinite: true,
// 	slidesToShow: 1,
// 	// slidesToScroll: 1,
// 	draggable:true,
//   });



  
$('.add-order-block').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: false,
	responsive: [

		{
			brakpoint: 1920,
			settings:{
				slidesToShow:1
			}
		}

	]


});

// ________________________________________________

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

// its works ---
	// let i = 1;
	// while(i <= 3){
	// 	imageChanger(i);
	// 	i++
	// }

	for(let i = 1; i < 4; i++){
		imageChanger(i);
	}






});
	// let card = $(".card");

	// let cardimage = $(".card-image > img");

	// let bigphoto = $(".big-img > img");



	
// 		let link = $(".imggg").$(this).src;

// 	$( ".imggg" ).click( function(){
	

// 		$(bigphoto).attr("src", "link")


// 	} )



// let link = $(cardimage)+$(this).src

// 	$( cardimage ).click( function(){


// 		$(bigphoto).attr("src", "link")


// 	} )


// $( card ).click( function(){

// 		$(bigphoto).attr("src", $(this)+$(".cardimage .imggg").src)

// 	} )



// // $( cardimage ).each(function(plate){
//  	plate.click(function(){
//  		let link = $(cardimage).attr( src );
//  		console.log(link)
//  		$(bigphoto).attr("attr", link);
//  	})
// })




// let price = $(".card .detail p span");
// let priceshowblock = $(".photo-block .price-block .price-and-badge p");

// // normal work --
// $(price).click(function(){
// 	let clickedprice = $(this).text()
// 	$(priceshowblock).text(clickedprice)

// });


// $(card).click(function(){

// 	// let clickedprice = $(this).text();
// 	$(priceshowblock).text(taka);

// })




// price.each(function(e, x){
// 	$(x).click(function(){
// 		let clickedprice = $(this).text();
// 		console.log(clickedprice);
// 	})
// })




// $(price).click(function(){

// 	$(priceshowblock).text(price);

// })
// _____________________________




// its work ---

// let tr = $(".imgg").hover();

// $( ".imggg" ).hover( function(){

// 		if(tr = true){
// 			$(bigphoto).attr("src", this.src);
// 		}
// 		else{
// 			$(bigphoto).attr("src", "./images/roasted-chicken.png");
// 		}

// 	} );

	
	

// its work ---

// conform oredr div store
// let conformorder = $(".content-section .main-content .photo-block .big-img .conform-order");

// // order btn a store
// let order_btn = $(".order-btn");


// 	$(order_btn).click( function(){

// 		$( conformorder ).fadeIn(900).delay(2000).fadeOut(900);

// 	} );








