var countScore;
countScore = 0;
const score = document.getElementById("score");
score.innerHTML = `
      <img src="./assets/Images/Correct.svg" alt="" />
      <p>${countScore}</p>
    `;
function updateScore() {
  score.innerHTML = `
          <img src="./assets/Images/Correct.svg" alt="" />
          <p>${countScore}</p>
        `;
}