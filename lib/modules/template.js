define(['underscore', 'jquery', 'lib/modules/recipes'], function() {
  var showQuote = function(recipe) {
    $(".recipe").text(recipe.text);
    $(".recipesite").text(recipe.name);
    $(".language").text(recipe.lang);
    $("#linkout").attr("href", recipe.url);
    $("#tweet-link").attr("data-href", recipe.link);
    $("body").css("background-image", recipe.bg);
  };
  return {
    showQuote: showQuote
  };
});
