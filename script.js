document.addEventListener("DOMContentLoaded", function () {
  const treeContainer = document.getElementById("tree");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function drawChristmasTree(startingStars, numberOfLayers) {
    let tree = "";
    for (let i = 1; i <= numberOfLayers; i++) {
      let stars = "";
      for (let j = 1; j <= startingStars + 2 * (i - 1); j++) {
        if (Math.random() < 0.3) { // 10% szansa na zmianę koloru
          const randomColor = getRandomColor();
          stars += `<span style="color:${randomColor}">*</span>`;
        } else {
          stars += "*";
        }
      }
      tree += stars + "<br>";
    }
    return tree;
  }

  function drawMultipleTrees(numberOfTrees) {
    let trees = "";
    for (let i = 1; i <= numberOfTrees; i++) {
      trees += drawChristmasTree(4 * i - 2, i);
    }
    return trees;
  }

  function decorateMultipleTrees() {
    setInterval(function () {
      let multipleTrees = drawMultipleTrees(7);
      treeContainer.innerHTML = multipleTrees;
    }, 500);
  }

  decorateMultipleTrees();
});
