// Ready Functions
$(document).ready(function () {
  moreProduct();
  if($(".counter").length) {
    counterDown();
  }
});

// Preloader Start
window.addEventListener("load", function () {
  this.setTimeout(function () {
    $("#preloader").delay(2000).fadeOut(500);
  }, 500);
});
// Preloader End

// moreProduct FAQ
var moreProduct = function () {
  $("#moreProduct").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#titlesubtitle").offset().top,
      },
      1000
    );
  });
};
// moreProduct FAQ End

// counterDown FAQ
var counterDown = function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(distance / day)),

        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
    }, 0);
};
// counterDown FAQ End
