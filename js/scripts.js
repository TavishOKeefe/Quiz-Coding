$(document).ready(function() {
  $("form#welcome").submit(function(event) {
    event.preventDefault();
    $("#introduction").hide();
    $("#survey").show();
  });

  $("#form#quiz").submit(function(event) {
    event.preventDefault();
    var partyScores = [0, 0, 0, 0];
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
      $("#survey").hide();
    } else if (highest === 1) {
      $("#csharp").show();
      $("#survey").hide();
    } else if (highest === 2) {
      $("#csharp").show();
      $("#survey").hide();
    } else if (highest === 3) {
      $("#csharp").show();
      $("#survey").hide();
    }
  });
});
