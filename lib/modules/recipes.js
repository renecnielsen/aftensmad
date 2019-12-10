const recipes = [
  { name: "TV2", url: "http://livsstil.tv2.dk/mad/opskrift/meunier-stegt-roedspaettefilet-med-kartofler-og-persillesauce", text: "Fiskefilet", src: "fisk.jpg", lang: "Danish" },
  { name: "Valdemarsro", url: "https://www.valdemarsro.dk/pizza-margherita/", text: "Pizza Margherita med Basilikum", src: "pizza-margharita.jpg", lang: "Danish" },
  { name: "Vegetarisk Hverdag", url: "https://vegetariskhverdag.dk/2019/01/vegetarisk-burger-med-sorte-boenner-cheddar-chipotlemayo/", text: "Vegetarisk burger med sorte bønner, cheddar & chipotlemayo", src: "burger.jpg", lang: "Danish" },
  { name: "Vegetarisk Hverdag", url: "https://vegetariskhverdag.dk/2019/10/halloumi-stroganoff/", text: "Halloumi Stroganoff", src: "halloumi-stroganoff.jpg", lang: "Danish" },
  { name: "Arla", url: "https://www.arla.dk/opskrifter/risengrod-med-kanelsukker-og-smorklat/", text: "Risengrød", src: "risengroed.jpg", lang: "Danish" },
  { name: "MENY", url: "https://meny.dk/opskrift/grillet-roedfisk-grov-bulgursalat", text: "Grillet fisk med bulgur", src: "grilletfisk.jpg", lang: "Danish" },
  { name: "HurtigMums", url: "https://www.hurtigmums.dk/roedbedeboeffer/", text: "Rødbedebøffer", src: "rodbedeboffer.jpg", lang: "Danish" },
  { name: "Frk. Kræsen", url: "https://www.frokenkraesen.com/falafel-for-dummies/", text: "Falafel", src: "falafel.jpg", lang: "Danish" },
  { name: "Nemlig", url: "https://www.nemlig.com/opskrifter/kartoffelsuppe-med-porrer-98001204", text: "Kartoffelsuppe", src: "kartoffelsuppe.jpg", lang: "Danish" },
  { name: "Madsvin", url: "https://madsvin.com/tomatsuppe-hurtig-nem-velsmagende/", text: "Tomatsuppe", src: "tomatsuppe.jpg", lang: "Danish" },
  { name: "Mia Sommer", url: "https://miasommer.wordpress.com/2011/09/02/dhal/", text: "Dhal", src: "dhal.jpg", lang: "Danish" },
  { name: "Alletiders Kogebog", url: "https://www.dk-kogebogen.dk/opskrifter/30640/maafe-mafe-groundnut-stew", text: "Maafe", src: "maafe.jpg", lang: "Danish" },
  { name: "Alt for Damerne", url: "https://www.alt.dk/mad/opskrift/fiskefrikadeller", text: "Fiskedeller", src: "fiskedeller.jpg", lang: "Danish" },
  { name: "Jamie Oliver", url: "https://www.jamieoliver.com/recipes/pasta-recipes/mushroom-cauliflower-penne/", text: "Mushroom & Cauliflower Penne", src: "penne.jpg", lang: "English" },
  { name: "Jamie Oliver", url: "https://www.jamieoliver.com/recipes/vegetable-recipes/smoky-veggie-chilli/", text: "Smoky Veggie Chilli", src: "chilisincarne.jpg", lang: "English" },
  { name: "Jamie Oliver", url: "https://www.jamieoliver.com/recipes/pasta-recipes/vegetable-spag-bol-with-golden-herby-breadcrumbs/", text: "Vegetarian Spaghetti Bolognaise", src: "bolo.jpg", lang: "English" },
  { name: "Jamie Oliver", url: "https://www.jamieoliver.com/recipes/bread-recipes/potatoes-mozzarella-rosemary-thyme-and-tomato-pizza-topping/", text: "Pizza with potatoes, mozzarella, rosemary, thyme and tomato", src: "pizza.jpg", lang: "English" }];

  var images = new Array();
  function preload(arr) {
    for (i = 0; i < arr.length; i++) {
      images[i] = new Image();
      images[i].src = "assets/img/" + arr[i];
    }
  }
  var srcs = recipes.map(function(q) {
    return q.src;
  });
  preload(srcs);
