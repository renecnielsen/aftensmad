define(['underscore', 'jquery', 'lib/modules/quotes'], function() {
  var showQuote = function(quote) {
    $(".quote").text(quote.text);
    $(".speaker").text(quote.name);
    $("#tweet-link").attr("data-href", quote.link);
    $("body").css("background-image", quote.bg);
  };
  return {
    showQuote: showQuote
  };
});