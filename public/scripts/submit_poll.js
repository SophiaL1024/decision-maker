$(document).ready(() => {

  $('#not_submit').click((event) => {
    event.stopPropagation();
    alert("Do not re-submit your answer again!")



   /*  let votes = {};
    let ranknum = 1;
    const results = $('.option_title')
    console.log(results)
    for (const child of results) {
      votes[child.childNodes[0].nodeValue.split(" ").join("").split("\n").join("")] = ranknum;
      ranknum ++;
      // alert(child.childNodes[0].nodeValue);
    }
    console.log(votes); */
  })

});
