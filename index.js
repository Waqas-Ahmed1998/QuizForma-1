$(document).ready(function () {
  // popup-8 select option poppup
  $("#popup-8-option-1 ").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-1-text-color").toggleClass("popup-8-text");

    $("#popup-8-choice-1").toggle();
  });

  $("#popup-8-option-2").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-2-text-color").toggleClass("popup-8-text");
    $("#popup-8-choice-2").toggle();
  });

  $("#popup-8-option-3").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-3-text-color").toggleClass("popup-8-text");
    $("#popup-8-choice-3").toggle();
  });

  $("#popup-8-option-4").click(function () {
    $(this).toggleClass("option-selected-second");
    $(".option-4-text-color").toggleClass("popup-8-text");
    $("#popup-8-choice-4").toggle();
  });

  // popup-12 select option poppup
  $("#popup-12-option-1 ").click(function () {
    $(this).toggleClass("option-selected");

    $("#popup-12-option-1 >input").prop(
      "checked",
      !$("#popup-12-option-1 >input").prop("checked")
    );
  });

  $("#popup-12-option-2 ").click(function () {
    $(this).toggleClass("option-selected");

    $("#popup-12-option-2 >input").prop(
      "checked",
      !$("#popup-12-option-2 >input").prop("checked")
    );
  });

  $("#popup-12-option-3 ").click(function () {
    $(this).toggleClass("option-selected");

    $("#popup-12-option-3 >input").prop(
      "checked",
      !$("#popup-12-option-3 >input").prop("checked")
    );
  });

  $("#popup-12-option-4 ").click(function () {
    $(this).toggleClass("option-selected");

    $("#popup-12-option-4 >input").prop(
      "checked",
      !$("#popup-12-option-4 >input").prop("checked")
    );
  });
});
