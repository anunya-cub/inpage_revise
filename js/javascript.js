$(".accordion-toggle").click(function (e) {
  e.preventDefault();
  $("a:first-of-type").removeClass("chev");

  var $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find("li .accordion-inner").removeClass("show");
    $this.parent().parent().find("li .accordion-inner").slideUp(350);
    $this.toggleClass("chev");
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

function changeSlide(data, e) {
  $(".listBoxSlideNews").addClass("d-none");
  $(".btnPageTodayonMLT a.btn").removeClass("active");
  $(`.` + data).removeClass("d-none");
  $(e).addClass("active");
};

function OurServerSlide(data, e) {
  
  $(".listBoxSlideDetalls").addClass("d-none");
  // $(".onlyBtn1Active").addClass("d-none");
  $(".digital-item").removeClass("active");
  $(`.` + data).removeClass("d-none");
  $(e).addClass("active");
}

