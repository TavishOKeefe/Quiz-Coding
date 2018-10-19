$(document).ready(function() {
  $("form#welcome").submit(function(event) {
    event.preventDefault();
    $("#introduction").hide();

  });
});
