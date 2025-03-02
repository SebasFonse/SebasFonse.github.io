document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tarjeta").forEach(tarjeta => {
      tarjeta.addEventListener("mouseenter", function () {
          this.querySelector(".frente").style.transform = "rotateY(180deg)";
          this.querySelector(".atras").style.transform = "rotateY(0)";
      });

      tarjeta.addEventListener("mouseleave", function () {
          this.querySelector(".frente").style.transform = "rotateY(0)";
          this.querySelector(".atras").style.transform = "rotateY(180deg)";
      });
  });
});
