// $('#myTabs a[href="#profile"]').tab('show') // Select tab by name

document.addEventListener("DOMContentLoaded", function(event) {
  let hero = document.getElementById("hero");

  hero.addEventListener("click", changeWidth);
  //   console.log(
  //    document.getElementById("viewAfter").style.width =  50  + "%;"
  //   );

  function changeWidth(e) {
    let viewAfter = document.getElementById("viewAfter");

    viewAfter.style = "width: " + e.clientX + "px;";
  }

  // Particles with mojs

  // count = 10 seems to be the magic number for  performance on mobile and older devices

  let innerRadius;
  let outerRadius;
  let smallSize = 20;
  let bigSize = 25;

  function setRadius() {
    if (window.innerWidth <= 425) {
      innerRadius = parseInt(window.innerWidth * 0.1);
      outerRadius = parseInt(window.innerWidth * 0.6);
    } else if (window.innerWidth > 425 && window.innerWidth < 1080) {
      innerRadius = parseInt(window.innerWidth * 0.07);
      outerRadius = parseInt(window.innerWidth * 0.28);
    } else if (window.innerWidth > 1080) {
      innerRadius = parseInt(window.innerHeight * 0.15);
      outerRadius = parseInt(window.innerHeight * 0.3);
    } else {
    }
  }

  setRadius();
  const DURATION = 1000;
  const count = 15;

  let smoke = new mojs.Burst({
    opacity: 0.7,
    parent: "#viewAfter",
    left: 0,
    top: 0,
    degree: 270,
    angle: -135,
    count: count,
    radius: { [innerRadius]: outerRadius },
    children: {
      fill: ["white", "#2A3A3F"],
      pathScale: "rand(0.5, 1)",
      radius: "rand(12, 13)",
      swirlSize: "rand(20, 25)",
      swirlFrequency: "rand(2, 4)",
      direction: [1, -1],
      duration: `rand(${1 * DURATION}, ${2 * DURATION})`,
      delay: "rand(0, 2000)",
      easing: "quad.out",
      isSwirl: true,
      isForce3d: true
    }
  });

  let smokeBefore = new mojs.Burst({
    opacity: 0.7,
    parent: "#viewBefore",
    left: 0,
    top: 0,
    degree: 270,
    angle: -135,
    count: count,
    radius: { [innerRadius]: outerRadius },
    children: {
      fill: ["#397fda", "#2A3A3F"],
      pathScale: "rand(0.5, 1)",
      radius: "rand(12, 13)",
      swirlSize: `rand(20, 25)`,
      swirlFrequency: "rand(2, 4)",
      direction: [1, -1],
      duration: `rand(${1 * DURATION}, ${2 * DURATION})`,
      delay: "rand(0, 2000)",
      easing: "quad.out",
      isSwirl: true,
      isForce3d: true
    }
  });

  smokeBefore
    .tune({ x: "50vw", y: "50vh" })
    .generate()
    .replay();
  smoke
    .tune({ x: "50vw", y: "50vh" })
    .generate()
    .replay();

  let leftParticles = new mojs.Tween({
    repeat: 99999,
    delay: 3000,
    onUpdate: function() {
      smokeBefore
        .tune({ x: "50vw", y: "50vh" })
        .generate()
        .replay();
    }
  }).play();

  let rightParticles = new mojs.Tween({
    repeat: 99999,
    delay: 3000,
    onUpdate: function() {
      smoke
        .tune({ x: "50vw", y: "50vh" })
        .generate()
        .replay();
    }
  }).play(500);

  //Add effects to btn and rearrange cols based on width
  $(document).ready(function() {
    $("a.pill-btn")
      .addClass("wow fadeInUp")
      .attr("data-wow-duration", "1s");

    if ($(window).width() < 768) {
      $(".rearrange > div").each(function() {
        $(this).prependTo(this.parentNode);
      });
    }
  });

  //Smooth Scrolling
  $(document).on("click", ".scrollTo", function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      1000
    );
  });
});
