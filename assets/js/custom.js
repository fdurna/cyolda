// Ready Functions
$(document).ready(function () {
  moreProduct();
  header();
  creditcard();
  icheck();
  popup();
  if ($(".counter").length) {
    counterDown();
  };
  
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
        scrollTop: $(".product-details-tab-menu").offset().top - 150,
      },
      1000
    );
  });
};
// moreProduct FAQ End

// counterDown
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
// counterDown FAQ

//header
var header = function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("header").addClass("sticky-header");
    } else {
      $("header").removeClass("sticky-header");
    }
  });
  
};
//heeader

//credit card
var creditcard = function () {
  var name = $("#name");
  var lastname = $("#lastname");
  name.on("input", function () {
    $("#nameText").text(name.val());
  });
  lastname.on("input", function () {
    $("#lastnameText").text(lastname.val());
  });
};
//credit card

//icheck
var icheck = function () {
  $(".iCheck").iCheck({
      checkboxClass: "icheckbox_square-blue",
      radioClass: "iradio_square-blue",
      increaseArea: "20%",
    });
};
//icheck

//popup
var popup = function () {
  $('.user').click(function () {
    $("#loginRegister").modal('show');
  });
};
//popup
