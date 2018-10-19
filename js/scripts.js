var determineLargest = function(scores) {
  var highest = 0;
  for (i=1; i< scores.length; i++) {
    if (scores[i] > scores[highest]) {
      highest = i;
    }
  }
  return highest;
};

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    $("#introduction").hide();
    $("#survey").hide();
    $(".pooh").hide();

    var charScores = [0, 0, 0, 0];
    var question1Answer = parseInt($("input:radio[name=question1]:checked").val());
    var question2Answer = parseInt($("input:radio[name=question2]:checked").val());
    var question3Answer = parseInt($("input:radio[name=question3]:checked").val());
    var question4Answer = parseInt($("input:radio[name=question4]:checked").val());
    var question5Answer = parseInt($("input:radio[name=question5]:checked").val());

    charScores[question1Answer]++;
    charScores[question2Answer]++;
    charScores[question3Answer]++;
    charScores[question4Answer]++;
    charScores[question5Answer]++;

    var highest = determineLargest(charScores);

    if (highest === 0) {
      $("#csharp").show();
    } else if (highest === 1) {
      $("#java").show();
    } else if (highest === 2) {
      $("#php").show();
    } else if (highest === 3) {
      $("#ruby").show();
    }
    $(".button").show();
    $("#results").show();
    $(".poohreading").show();
    });
  });
