$(document).ready(function() {
  // Set title preview
  $("#title").on('keyup', function(e) {
    $("#title-preview").text($("#title").val());
    $("#title-preview").attr("href", $("#url").val());
  })
  // Set image preview
  $("#url").on('keyup', function(e) {
    $("#img-preview").attr("src", $(this).val());
  })
  // Replace broken images
  $(".grid-img").error(function() {
    $(this).attr("src", "http://dummyimage.com/800x600&text=Pinternet");
  });
  // Show grid
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    fitWidth: true,
    transitionDuration: '0.8s',
    columnWidth: 10
  });
  // Set layout so no image overlap on image load
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
  // Set gallery
  $("a.gallery").featherlightGallery();
  $(".gallery").featherlightGallery({
		gallery: {
			fadeIn: 300,
			fadeOut: 300
		},
		openSpeed:    300,
		closeSpeed:   300
	});
});
