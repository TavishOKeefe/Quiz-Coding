$(document).ready(function() {
  $("form#welcome").submit(function(event) {
    event.preventDefault();
    $("#introduction").hide();
    $("#survey").show();
    });
  });

  // $("form#goodbye").submit(function(event) {
  //   event.preventDefault();
  //   $("#introduction").hide();
  //   $("#survey").hide();
  //   });

  $("form#quiz").submit(function(event) {
    event.preventDefault();
    $("#introduction").hide();
    $("#survey").hide();
    $("#results").show();
    // var partyScores = [0, 0, 0, 0];
    // var question1Answer = parseInt($("input:radio[name=question1]:checked").val());
    // var question2Answer = parseInt($("input:radio[name=question2]:checked").val());
    // var question3Answer = parseInt($("input:radio[name=question3]:checked").val());
    // var question4Answer = parseInt($("input:radio[name=question4]:checked").val());
    // var question5Answer = parseInt($("input:radio[name=question5]:checked").val());
    //
    // charScores[question1Answer]++;
    // charScores[question2Answer]++;
    // charScores[question3Answer]++;
    // charScores[question4Answer]++;
    // charScores[question5Answer]++;
    //
    // var highest = determineLargest(charScores);
    //
    // if (highest === 0) {
    //   $("#survey").hide();
    //   $("#introduction").hide();
    //   $("#csharp").show();
    //   $("#java").hide();
    //   $("#php").hide();
    //   $("#ruby").hide();
    // } else if (highest === 1) {
    //   $("#survey").hide();
    //   $("#introduction").hide();
    //   $("#csharp").hide();
    //   $("#java").show();
    //   $("#php").hide();
    //   $("#ruby").hide();
    // } else if (highest === 2) {
    //   $("#survey").hide();
    //   $("#introduction").hide();
    //   $("#csharp").hide();
    //   $("#java").hide();
    //   $("#php").show();
    //   $("#ruby").hide();
    // } else if (highest === 3) {
    //   $("#survey").hide();
    //   $("#introduction").hide();
    //   $("#csharp").hide();
    //   $("#java").hide();
    //   $("#php").hide();
    //   $("#ruby").show();
    // }
  });
