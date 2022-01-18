const mainSections = document.querySelectorAll(".main__section");
const geometryFigures = document.querySelectorAll(".geometry");
let arr = Array.from(geometryFigures).map((item) => {
  return window.getComputedStyle(item).transform;
}); // save transform values of every geometry object
let a = 0;

mainSections.forEach((item) => {
  item.addEventListener("mousemove", () => {
    let innerFigures = item.querySelectorAll(".geometry");
    innerFigures.forEach((elem) => {
      elem.style.transform = `rotate(${a++}deg)`;
    });
  });

  item.addEventListener("mouseout", () => {
    for (let i = 0; i < arr.length; i++) {
      geometryFigures[i].style.transform = arr[i];
    }
  });
});
