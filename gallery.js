// var $cell = $(".card");

// //open and close card when clicked on card
// $cell.find(".js-expander").click(function () {
//   var $thisCell = $(this).closest(".card");

//   if ($thisCell.hasClass("is-collapsed")) {
//     $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");
//     // .addClass("is-inactive");
//     $thisCell.removeClass("is-collapsed").addClass("is-expanded");

//     // if ($cell.not($thisCell).hasClass("is-inactive")) {
//     //   //do nothing
//     // } else {
//     //   $cell.not($thisCell).addClass("is-inactive");
//     // }
//   } else {
//     $thisCell.removeClass("is-expanded").addClass("is-collapsed");
//     $cell.not($thisCell).removeClass("is-inactive");
//   }
// });

// //close card when click on cross
// $cell.find(".js-collapser").click(function () {
//   var $thisCell = $(this).closest(".card");

//   $thisCell.removeClass("is-expanded").addClass("is-collapsed");
//   // $cell.not($thisCell).removeClass("is-inactive");
// });
var $cell = $(".card");
var $practiciesContainer = $(".practicies"); // Замініть це на правильний селектор вашого контейнера practicies

$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");
    $thisCell.removeClass("is-collapsed").addClass("is-expanded");

    // Підняти відкриту карту на центр viewport
    var offsetTop =
      $thisCell.offset().top -
      ($(window).height() - $thisCell.outerHeight()) / 3;
    $("html, body").animate({ scrollTop: offsetTop }, 300);
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");

    // При закритті карти, центрувати viewport відносно контейнера practicies
    var containerOffsetTop =
      $practiciesContainer.offset().top -
      ($(window).height() - $practiciesContainer.outerHeight()) / 3;
    $("html, body").animate({ scrollTop: containerOffsetTop }, 300);
  }
});

$cell.find(".js-collapser").click(function () {
  var $thisCell = $(this).closest(".card");
  $thisCell.removeClass("is-expanded").addClass("is-collapsed");

  // При закритті карти, центрувати viewport відносно контейнера practicies
  var containerOffsetTop =
    $practiciesContainer.offset().top -
    ($(window).height() - $practiciesContainer.outerHeight()) / 3;
  $("html, body").animate({ scrollTop: containerOffsetTop }, 300);
});
