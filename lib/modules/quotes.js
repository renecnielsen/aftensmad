const quotes = [{ name: "Valdemarsro", url: "http://www.valdemarsro.dk/lasagne/", text: "Lasagne", src: "lasagne.jpg" },
{ name: "TV2", url: "http://livsstil.tv2.dk/mad/opskrift/meunier-stegt-roedspaettefilet-med-kartofler-og-persillesauce", text: "Fiskefilet med kartofler og persillesauce", src: "fisk.jpg" },
{ name: "Valdemarsro", url: "http://www.valdemarsro.dk/tarteletter-hoens-asparges/", text: "Tarteletter med høns i asparges", src: "tarteletter.jpg" },
{ name: "Valdemarsro", url: "http://www.valdemarsro.dk/hjemmelavet-pizza-margherita-med-basilikum/", text: "Pizza", src: "pizza.jpg" },
{ name: "Arla", url: "https://www.arla.dk/opskrifter/risengrod-med-kanelsukker-og-smorklat/", text: "Risengrød", src: "risengroed.jpg" },
{ name: "Valdemarsro", url: "http://www.valdemarsro.dk/nem-tortillas-med-krydret-oksekoed/", text: "Tortillas", src: "tortillas.jpg" },
{ name: "Valdemarsro", url: "http://www.valdemarsro.dk/chili-con-carne/", text: "Chili con carne", src: "chiliconcarne.jpg" },
{ name: "Vanløse Blues", url: "http://www.vanloseblues.dk/2014/09/chili-sin-carne/", text: "Chili sin carne", src: "chilisincarne.jpg" },
{ name: "Gastromand", url: "https://gastromand.dk/vintermad-roedvins-braisseret-svinekaeber/", text: "Svinekæber", src: "svinekaeber.jpg" },
{ name: "MENY", url: "https://meny.dk/opskrift/grillet-roedfisk-grov-bulgursalat", text: "Grillet fisk med bulgursalat", src: "grilletfisk.jpg" },
{ name: "Femina", url: "https://www.femina.dk/mad/hovedretter/karbonader-og-spidskaalssalat-med-mormordressing", text: "Karbonader med spidskålssalat", src: "karbonader.jpg" },
{ name: "Gastromand", url: "https://gastromand.dk/opskrift-hjemmelavet-hotdogs-broed-remoulade-ketchup-ristede-loeg-agurksalat/", text: "Hotdogs", src: "hotdogs.jpg" },
{ name: "HurtigMums", url: "https://www.hurtigmums.dk/roedbedeboeffer/", text: "Rødbedebøffer", src: "rodbedeboffer.jpg" },
{ name: "Nemlig", url: "https://www.nemlig.com/opskrifter/empanadas-med-krydret-oksekoed-98001750", text: "Empanadas", src: "empanadas.jpg" },
{ name: "Maden i mit liv", url: "http://www.madenimitliv.dk/2013/11/lette-og-luftige-polsehorn.html", text: "Pølsehorn", src: "poelsehorn.jpg" },
{ name: "Gastromand", url: "https://gastromand.dk/mormormad-perfekte-frikadeller/", text: "Frikadeller", src: "frikadeller.jpg" },
{ name: "Gastromand", url: "https://gastromand.dk/hjemmelavet-burger-burgerboller-bof/", text: "Burger", src: "burger.jpg" },
{ name: "Frk. Kræsen", url: "https://www.frokenkraesen.com/falafel-for-dummies/", text: "Falafel", src: "falafel.jpg" },
{ name: "Meyers", url: "https://www.meyersmad.dk/lav-mad/opskrifter/boller-i-karry/", text: "Boller i karry", src: "bollerikarry.jpg" },
{ name: "Arla", url: "https://www.arla.dk/opskrifter/hakkeboffer-med-blode-log/", text: "Hakkebøffer med bløde løg og brun sovs", src: "hakkeboef.jpg" },
{ name: "Aarstiderne", url: "https://www.aarstiderne.com/opskrifter/opskrift/gullasch-med-rodfrugtmos1", text: "Gullasch med rodfrugtmos", src: "gullasch.jpg" },
{ name: "Gastromand", url: "https://gastromand.dk/opskrift-pasta-spaghetti-carbonara/", text: "Pasta Carbonara (spaghetti med fløde, svampe og bacon)", src: "carbonara.jpg" }];

var images = new Array();
function preload(arr) {
    for (i = 0; i < arr.length; i++) {
        images[i] = new Image();
        images[i].src = "assets/img/" + arr[i];
    }
}
var srcs = quotes.map(function(q) {
    return q.src;
});
preload(srcs);