$( ".center-box" ).click(function() {
  $(this).slideUp('slow', function() {
   $(".text-box").html(wrapWords(SampleText));
  })
});

$(".text-box").delegate("span", "click", function() {
  $(this).toggleClass("blackout");
});

var SampleText = "What has happened to me? he thought. It was no dream. His room, a regular human bedroom, only rather too small, lay quiet between the four familiar walls. Gregor's eyes turned to the window, and the overcast sky, one could hear rain drops beating on the window gutter made him quite melancholy. What about sleeping a little longer and forgetting all this nonsense, he thought, but it could not be done, for he was accustomed to sleep on his right side and in his present condition he could not turn himself over. However violently he forced himself towards his right side he always rolled on to his back again. He tried it at least a hundred times, shutting his eyes to keep from seeing his struggling legs, and only desisted when he began to feel in his side a faint dull ache he had never experienced before.";

function wrapWords(element) {
    var words = element.split(/ /);
    var newHtml = '';

    for (var i = 0; i < words.length; i++) {
        newHtml += '<span>' + words[i] + '</span> ';
    }

    return newHtml;
}

