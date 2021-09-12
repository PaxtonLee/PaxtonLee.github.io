$(document).ready(function() {
  $('.btn').click(function() {
    $.ajax({
                dataType: "json",
                url: "https://the-one-api.dev/v2/quote",
                headers: {
                    "Authorization": "Bearer " + token
                }
        success: function(results) {
          $('.quotetext').text(results["newText"])
        }
        error: function(xhr,status,error) {
          console.log(error);
      })
    });
  });

var token = Up73PXs8T3RK4l0jIWTd;
