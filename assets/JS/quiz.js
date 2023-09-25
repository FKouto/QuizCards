var questionNumber = 0;
const maxQuestion = 5;
function next() {
  if (questionNumber == 1) {
    var question = document.getElementById("question");
    question.innerHTML = `
      <div id="question" class="question">
        <h1>Qual era o nome da menina que adorava ler livros sobre piratas?</h1>
        <li>
          <ul id="correct" class="select">
            <span></span>
            <img src="./assets/Images/Success.svg" alt"">
            <p>Ana</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Imagination.svg" alt"">
            <p>Maria</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Adventure.svg" alt"">
            <p>Joana</p>
          </ul>
        </li>
      </div>
      `;
    var number = document.getElementById("number-question");
    number.innerHTML = `
        <b class="highlight-number">${questionNumber}</b>/${maxQuestion}
      `;
    // Chamar a função checkSelected()
    checkSelected();
  }
  // Question 2
  else if (questionNumber == 2) {
    updateScore();
    var question = document.getElementById("question");
    question.innerHTML = `
      <div id="question" class="question">
        <h1>O que o pirata Barba Negra sempre carregava consigo?</h1>
        <li>
          <ul id="correct" class="select">
            <span></span>
            <img src="./assets/Images/Imagination.svg" alt"">
            <p>Um livro</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Success.svg" alt"">
            <p>Uma espada</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Adventure.svg" alt"">
            <p>Um mapa</p>
          </ul>
        </li>
      </div>
      `;
    var number = document.getElementById("number-question");
    number.innerHTML = `
        <b class="highlight-number">${questionNumber}</b>/${maxQuestion}
    `;
    // Chamar a função checkSelected()
    checkSelected();
  }
  // Question 3
  else if (questionNumber == 3) {
    updateScore();
    var question = document.getElementById("question");
    question.innerHTML = `
      <div id="question" class="question">
        <h1>O que aconteceu com o navio de Barba Negra?</h1>
        <li>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Imagination.svg" alt"">
            <p>Foi capturado por um navio da marinha</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Adventure.svg" alt"">
            <p>Foi destruído em uma batalha</p>
          </ul>
          <ul id="correct" class="select">
            <span></span>
            <img src="./assets/Images/Success.svg" alt"">
            <p>Foi atingido por um raio e afundou</p>
          </ul>
        </li>
      </div>
      `;
    var number = document.getElementById("number-question");
    number.innerHTML = `
        <b class="highlight-number">${questionNumber}</b>/${maxQuestion}
    `;
    // Chamar a função checkSelected()
    checkSelected();
  }
  // Question 4
  else if (questionNumber == 4) {
    updateScore();
    var question = document.getElementById("question");
    question.innerHTML = `
      <div id="question" class="question">
        <h1>O que Ana decidiu fazer quando crescesse?</h1>
        <li>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Adventure.svg" alt"">
            <p>Ser uma bibliotecária</p>
          </ul>
          <ul id="correct"  class="select">
            <span></span>
            <img src="./assets/Images/Success.svg" alt"">
            <p>Ser uma pirata que também era uma grande leitora</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Imagination.svg" alt"">
            <p>Ser uma professora de história</p>
          </ul>
        </li>
      </div>
      `;
    var number = document.getElementById("number-question");
    number.innerHTML = `
        <b class="highlight-number">${questionNumber}</b>/${maxQuestion}
    `;
    // Chamar a função checkSelected()
    checkSelected();
  }
  // Question 5
  else if (questionNumber == 5) {
    updateScore();
    var question = document.getElementById("question");
    question.innerHTML = `
      <div id="question" class="question">
        <h1>O que o pirata Barba Negra sempre carregava consigo?</h1>
        <li>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Success.svg" alt"">
            <p>A vida de pirata é perigosa e agitada</p>
          </ul>
          <ul id="correct" class="select">
            <span></span>
            <img src="./assets/Images/Imagination.svg" alt"">
            <p>É importante encontrar tempo para fazer o que se gosta</p>
          </ul>
          <ul class="select">
            <span></span>
            <img src="./assets/Images/Adventure.svg" alt"">
            <p>Os piratas são sempre malvados</p>
          </ul>
        </li>
      </div>
      `;
    var number = document.getElementById("number-question");
    number.innerHTML = `
        <b class="highlight-number">${questionNumber}</b>/${maxQuestion}
    `;
    // Chamar a função checkSelected()
    checkSelected();
  } else if (questionNumber == 6) {
    finished();
  }
  questionNumber++;
}

function checkSelected() {
  // Variável para armazenar se a resposta correta já foi selecionada
  let selectedThis = false;
  // Adicionar um evento de clique a todos os elementos ul com a classe select
  const selectElements = document.querySelectorAll(".select");
  selectElements.forEach((element) => {
    element.addEventListener("click", () => {
      // Verificar se o elemento possui o id="correct"
      if (element.id === "correct") {
        // Verificar se a resposta correta ainda não foi selecionada
        if (!selectedThis) {
          // Marcar o elemento ul como right-answer
          element.classList.remove("select");
          element.classList.add("right-answer");
          // Incrementar o score
          countScore++;
          // Atualizar o score
          updateScore();
          // Marcar a variável hasCorrectAnswerBeenSelected como true
          selectedThis = true;
        }
      } else {
        if (!selectedThis) {
          element.classList.add("wrong-answer");
          selectedThis = true;
        }
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  next(); // Executar a função next uma vez
  next(); // Executar a função next novamente
});
function finished() {
  window.alert("Parabéns, você terminou o Quiz! \n Score Final: " + countScore);
  window.location.href = "./quiz.html";
}
