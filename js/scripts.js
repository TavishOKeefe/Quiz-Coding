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

    var charScores = [0, 0, 0];
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

    });
  });

//   $("form#goodbye").submit(function(event) {
//     event.preventDefault();
//     $("#introduction").hide();
//     $("#survey").hide();
//     });
//
// $("div#results").ready(function(event){
//   event.preventDefault();
//   $("#survey").hide();
// });
//     var partyScores = [0, 0, 0, 0];
//     var question1Answer = parseInt($("input:radio[name=question1]:checked").val());
//     var question2Answer = parseInt($("input:radio[name=question2]:checked").val());
//     var question3Answer = parseInt($("input:radio[name=question3]:checked").val());
//     var question4Answer = parseInt($("input:radio[name=question4]:checked").val());
//     var question5Answer = parseInt($("input:radio[name=question5]:checked").val());
//
//     charScores[question1Answer]++;
//     charScores[question2Answer]++;
//     charScores[question3Answer]++;
//     charScores[question4Answer]++;
//     charScores[question5Answer]++;
//
//     var highest = determineLargest(charScores);
//
//     if (highest === 0) {
//       $("#survey").hide();
//       $("#introduction").hide();
//       $("#csharp").show();
//       $("#java").hide();
//       $("#php").hide();
//       $("#ruby").hide();
//     } else if (highest === 1) {
//       $("#survey").hide();
//       $("#introduction").hide();
//       $("#csharp").hide();
//       $("#java").show();
//       $("#php").hide();
//       $("#ruby").hide();
//     } else if (highest === 2) {
//       $("#survey").hide();
//       $("#introduction").hide();
//       $("#csharp").hide();
//       $("#java").hide();
//       $("#php").show();
//       $("#ruby").hide();
//     } else if (highest === 3) {
//       $("#survey").hide();
//       $("#introduction").hide();
//       $("#csharp").hide();
//       $("#java").hide();
//       $("#php").hide();
//       $("#ruby").show();
//     }
//   });
