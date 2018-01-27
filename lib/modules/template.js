define(['underscore', 'jquery', 'lib/modules/quotes'], function() {
  var showQuote = function(quote) {
    $(".quote").text(quote.text);
    $(".recipe").text(quote.name);
    $("#recipe").attr("href", quote.url);
    $("#tweet-link").attr("data-href", quote.link);
    $("body").css("background-image", quote.bg);
  };
  return {
    showQuote: showQuote
  };
});