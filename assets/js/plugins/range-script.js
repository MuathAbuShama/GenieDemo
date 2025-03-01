$(document).ready(function(){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "SAR" + ui.values[ 0 ] + " - SAR" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "SAR" + $( "#slider-range" ).slider( "values", 0 ) +
      " - SAR" + $( "#slider-range" ).slider( "values", 1 ) );

});