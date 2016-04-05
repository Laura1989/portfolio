$(document).ready( function() {

  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    transitionDuration : 0
  });

// layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
 });

  //var $grid = $('.grid').imagesLoaded( function() {
  //  // init Masonry after all images have loaded
  //  $grid.masonry({
  //    itemSelector: '.grid-item',
  //    columnWidth: '.grid-sizer',
  //    percentPosition: true,
  //    transitionDuration : 0
  //  });
  //});

});



