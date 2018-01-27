require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min",
    "underscore": "lib/underscore",
  }
});

require(['lib/modules/template' ,'lib/modules/quotes'], function(template) {
    var idx = 0;
    var lastQuote;

    var getQuote = function() {
        var getNewIdx = function() { return Math.floor(Math.random() * quotes.length); }

        var idx = getNewIdx();
        if (idx === lastQuote) getQuote();
        lastQuote = idx;

        var quote = quotes[idx];
        var currentQuote = {};

        currentQuote.name = quote.name;
        currentQuote.url = quote.url;
        currentQuote.text = quote.text;

        var qs = currentQuote.text + " - " + currentQuote.name;

        if ((currentQuote.text.length + currentQuote.name.length) > 140) {
          var namelen = currentQuote.name.length;
          var qslen = 134 - namelen;
          qs = currentQuote.text.substring(0, qslen) + "... - " + currentQuote.name;
        }

        currentQuote.link = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(qs);
        currentQuote.bg = "url(assets/img/" + quote.src + ")";

        return currentQuote;
    }

    var PopupCenter = function(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }

    $(document).ready(function() {
        template.showQuote(getQuote());
    });
    $("#new-quote").click(function() {
        template.showQuote(getQuote());
    });
    $("#tweet-link").click(function() {
        PopupCenter(this.getAttribute('data-href'), "Share", 600, 250);
    });
});