$( ".center-box" ).click(function() {
  $(this).slideUp('slow', function() {
   $("#text-box").html(wrapWords(SampleText[Math.floor(Math.random() * SampleText.length)]));
   $(".done").css('visibility', 'visible');
  })
});

$("#text-box").delegate("span", "click", function() {
  $(this).toggleClass("blackout");
});

$(".done").click(function() {
  $("#text-box span.blackout").hide();
});

function wrapWords(element) {
    var words = element.split(/ /);
    var newHtml = '';

    for (var i = 0; i < words.length; i++) {
        newHtml += '<span>' + words[i] + '</span> ';
    }

    return newHtml;
}

var SampleText = ["What has happened to me? he thought. It was no dream. His room, a regular human bedroom, only rather too small, lay quiet between the four familiar walls.",

  "Everyone who learned how to ride a bicycle did so in roughly the same boring way; anyone who made it to adulthood without learning required a unique series of roadblocks, failures, negligence, and procrastination.",

  " I am just a new boy, stranger in this town. Where are all the good times? Who's gonna show this stranger around?"
]
