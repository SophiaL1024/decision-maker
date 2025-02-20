$(document).ready(() => {
  $("#no_blank").hide();

  //event handler for clicking submit button
  $("#submit").click(function(event) {
    event.stopPropagation();

    //gathering input field value for post router
    const voter_name = $("#input_name")[0].value;
    let poll_id = $("#poll_id")[0].value;
    let option_id = [];
    let inputArr = $(".option_id");
    for (const eachInput of inputArr) {
      option_id.push(eachInput.value);
    }
    const data = {
      voter_name,
      poll_id,
      option_id,
    };

    if (!voter_name) {
      $("#no_blank").show().delay(1500).fadeOut(1);
    } else {
      $.ajax({
        url: `/polls/${poll_id}`,
        method: "POST",
        data: data,
      });

      //replace the button with msg
      $(this).replaceWith("<p class='success'>Submission Successful</p>");
    }
  });

});
