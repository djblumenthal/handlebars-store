var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
}

$(document).on('ready', function() {
  var storeTemplateSource = $('#store-template').html();
  var template = Handlebars.compile(storeTemplateSource);
  var wishlistTemplateSource = $('#wishlist-item-template').html();
  var wishlistTemplate = Handlebars.compile(wishlistTemplateSource);
  $('body').on('click', '.add-wishlist', function(){
  	
	for (var i = 0; i < productsData.productsList.length; i++) {
		if ($(this).closest('.product').attr('id') ===  productsData.productsList[i].title) {
			$('#wishlist').append(wishlistTemplate(productsData.productsList[i]));
		}
	}
  	
  });


  for (var i = 0; i < productsData.productsList.length; i++) {
  	$('#product-container').append(template(productsData.productsList[i]));

  };

  $('body').on('click', '.remove-button', function(){
  	$(this).closest('li').remove();
  })
});