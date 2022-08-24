$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
          $(".stream1").fadeOut();
          $(".stream1").toggle("slow");
          $(".stream2").toggle("medium");
          $(".stream3").toggle("fast");
          $(".stream3").toggle(1000);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("#myButton").removeClass("blueBox").addClass("border");
   $("p").css("color", "blue").slideUp(2000).slideDown(2000);
   $("a").attr("href", "http://www.example.com")
}); 