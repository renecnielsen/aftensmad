const quotes = [{ name: "Francis Bacon", text: "The job of the artist is always to deepen the mystery.", src: "bg1.jpg" },
{ name: "Lee Bontecou", text: "Since my early years until now, the natural world and its visual wonders and horrors—man-made devices with their mind-boggling engineering feats and destructive abominations, elusive human nature and its multiple ramifications from the sublime to unbelievable abhorrences—to me are all one. It is in the spirit of this feeling that the primary influences on my work have occurred.", src: "bg2.jpg" },
{ name: "Georges Braque", text: "A painting without something disturbing in it – what's that?", src: "bg3.jpg" },
{ name: "Salvador Dalí", text: "The first man to compare the cheeks of a young woman to a rose was obviously a poet; the first to repeat it was possibly an idiot.", src: "bg4.jpg" },
{ name: "Edgar Degas", text: "A painting requires a little mystery, some vagueness, some fantasy. When you always make your meaning perfectly plain you end up boring people.", src: "bg5.jpg" },
{ name: "Jim Dine", text: "I’m not a pop artist. For me pop never was.… Pop is concerned with exteriors. I’m concerned with interiors. When I use objects, I see them as a vocabulary of feelings. I can spend a lot of time with objects, and they leave me as satisfied as a good meal. I don’t think pop artists feel that way.", src: "bg6.jpg" },
{ name: "Paul Gauguin", text: "A bit of advice, don't copy nature too closely. Art is an abstraction; as you dream amid nature, extrapolate art from it, and concentrate on what you will create as a result.", src: "bg7.jpg" },
{ name: "Lucio Fontana", text: "From the outset I never called the work I was doing…painting, I called it a ‘spatial concept.’ This is because for me painting is a matter of ideas.… At a time when people were talking about ‘planes’—the surface plane, the depth plane, etc.—making a hole was a radical gesture which broke the space of the canvas as if to say: after this we are free to do what we like.", src: "bg8.jpg" },
{ name: "Alberto Giacometti", text: "The object of art is not to reproduce reality, but to create a reality of the same intensity.", src: "bg9.jpg" },
{ name: "Grace Hartigan", text: "I cannot expect even my own art to provide all the answers- only to hope it keeps asking the right questions.", src: "bg10.jpg" },
{ name: "Wassily Kandinsky", text: "Barriers are continually being made out of... new values which have overturned the barriers of the past. Thus one sees that it is not basically the new value that is of prime importance, but rather the spirit that is revealed in this value, as well as the freedom necessary for this revelation...", src: "bg11.jpg" },
{ name: "Lee Krasner", text: "As a painter, I never thought of myself as anything but LEE KRASNER… I painted before Pollock, during Pollock, after Pollock.", src: "bg12.jpg" },
{ name: "Fernand Léger", text: "Enormous enlargements of an object or a fragment give it a personality it never had before, and in this way, it can become a vehicle of entirely new lyric and plastic power.", src: "bg13.jpg" },
{ name: "Roy Lichtenstein", text: "My work sanitizes it (emotion) but it is also symbolic of commercial art sanitizing human feelings. I think it can be read that way…. People mistake the character of line for the character of art. But it’s really the position of line that’s important, or the position of anything, any contrast, not the character of it.", src: "bg14.jpg" },
{ name: "Jacques Lipchitz", text: "I found so-called great art too pompous, too stiff. What at this time was called minor art was freer, more imaginative, more open to all kinds of unorthodox expression, all kinds of daring in the handling of materials, and I preferred to surround myself with this type of art than with the great collectors' pieces. I had always in my mind that I was collecting for learning.", src: "bg15.jpg" },
{ name: "Agnes Martin", text: "I want to emphasize the fact that we all have the same experience and the same concern, but the artist must know exactly what the experience is. He must pursue the truth relentlessly. Once he sees this fact his feet are on the path. If you want to know the truth you will know it. The manipulation of materials in an artwork is a result of this state of mind. The artist works by awareness of his own state of mind.", src: "bg16.jpg" },
{ name: "Georgia O’Keeffe", text: "I don't see why we ever think of what others think of what we do – no matter who they are. Isn't it enough just to express yourself?", src: "bg17.jpg" },
{ name: "Pablo Picasso", text: "Woe to you the day it is said that you are finished! To finish a work? To finish a picture? What nonsense! To finish it means to be through with it, to kill it, to rid it of its soul – to give it its final blow; the most unfortunate one for the painter as well as for the picture.", src: "bg18.jpg" },
{ name: "Jackson Pollock", text: "There was a reviewer…who wrote that my pictures didn’t have any beginning or any end. He didn’t mean it as a compliment, but it was. It was a fine compliment.", src: "bg19.jpg" },
{ name: "Frank Stella", text: "I always get into arguments with people who want to retain the old values in painting – the humanistic values that they... find on the canvas. If you pin them down, they always end up asserting that there is something there besides the paint on the canvas. My painting is based on the fact that only what can be seen there is there... What you see is what you get.", src: "bg20.jpg" },
{ name: "Henri de Toulouse-Lautrec", text: "I have tried to do what is true and not ideal.", src: "bg21.jpg" },
{ name: "Vincent van Gogh", text: "The painter of the future will be a colorist in a way no one has been before.", src: "bg22.jpg" },
{ name: "Andy Warhol", text: "Art is anything you can get away with.", src: "bg23.jpg" }];

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