define(['underscore', 'jquery', 'lib/modules/quotes'], function() {
  var showQuote = function(quote) {
    var name = quote.name;
    var text = quote.text;
    var link = encodeURI("https://twitter.com/intent/tweet?text=" + text + " - " + name);
    var bg = "url(assets/img/bg" + Math.floor(Math.random(1) * 12) + ".jpg)";
    console.log(bg);

    $(".quote").text(quote.text);
    $(".speaker").text("- " + quote.name);
    $("#tweet-link").attr("href", link);
    $("body").css("background-image", bg);
  };
  return {
    showQuote: showQuote
  };
});