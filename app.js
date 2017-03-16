require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min",
    "underscore": "lib/underscore",
  }
});

require(['lib/modules/template' ,'lib/modules/quotes'], function(template) {
    var getQuote = function() {
        var idx = Math.floor(Math.random() * quotes.length);
        return quotes[idx];
    }

    $(document).ready(function() {
        template.showQuote(getQuote());
    });
    $("#new-quote").click(function() {
        template.showQuote(getQuote());
    });
});