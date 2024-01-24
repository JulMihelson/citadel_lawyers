var $cell = $(".card");
var $practiciesContainer = $(".practicies");

$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");
    $thisCell.removeClass("is-collapsed").addClass("is-expanded");
    $("body, html").animate(
      {
        scrollTop: $(this).offset().top,
      },
      300
    );

    // var offsetTop =
    //   $thisCell.offset().top -
    //   ($(window).height() - $thisCell.outerHeight()) / 3;
    // $("html, body").animate({ scrollTop: offsetTop }, 300);
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $("body, html").animate(
      {
        scrollTop: $(this).offset().top,
      },
      300
    );

    // var containerOffsetTop =
    //   $practiciesContainer.offset().top -
    //   ($(window).height() - $practiciesContainer.outerHeight()) / 3;
    // $("html, body").animate({ scrollTop: containerOffsetTop }, 300);
  }
});

$cell.find(".js-collapser").click(function () {
  var $thisCell = $(this).closest(".card");
  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $("body, html").animate(
    {
      scrollTop: $(this).offset().top,
    },
    300
  );

  // var containerOffsetTop =
  //   $practiciesContainer.offset().top -
  //   ($(window).height() - $practiciesContainer.outerHeight()) / 3;
  // $("html, body").animate({ scrollTop: containerOffsetTop }, 300);
});
