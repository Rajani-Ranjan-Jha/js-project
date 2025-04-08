function getRandomNumber() {
  // Generate a random number between 0 and 99
  const randomNumber = Math.floor(Math.random() * 100);
  // Convert the number to a string and return it
  return randomNumber;
}


fetch("./gk.json")
  .then(response => response.json())
  .then(data => {
    ShowQuestion(data)
  });



function ShowQuestion(data) {
  const NextBtn = document.querySelector('.next')
  const PrevBtn = document.querySelector('.prev')


  let questionField = document.querySelector('.question');
  let optionsField = document.querySelector('.options');
  let correctAnswerField = document.querySelector('.correct-ans');
  let questionNO = 75
  let Score = 0 //score of the quiz
  // let already_asked = []
  // questionNO = getRandomNumber()



  try {
    

    function UploadQuestion() {

      // Showing the question:
      questionField.innerHTML = `${data[questionNO].question_id}:  ${data[questionNO].question}`



      // Showing the options:
      let options = data[questionNO].options
      let abcd = ['(a)', '(b)', '(c)', '(d)']

      optionsField.innerHTML = '';
      for (const value in options) {
        optionsField.innerHTML += `<div><span>${abcd[value]}. </span><button class='answer'>${options[value]}</button></div>`
      }

    }


    function FindAnswer() {
      let CorrectAnswer = data[questionNO].correct_answer
      correctAnswerField.innerHTML = ""

      document.querySelectorAll(".answer").forEach(e => {
        e.addEventListener('click', (e) => {
          let answerText = e.target.innerText
          if (answerText == CorrectAnswer) {
            correctAnswerField.style.color = 'green'
            correctAnswerField.innerHTML = "Correct Answer"
            Score += 1
          } else {
            correctAnswerField.style.color = 'red'
            correctAnswerField.innerHTML = `Wrong Answer. <b>${CorrectAnswer}</b> is right answer.`
          }
        })
      });
    };

    function HandleQuestion() {
      PrevBtn.addEventListener('click', () => {
        if (questionNO > 0 && questionNO <= data.length) {

          questionNO -= 1
          UploadQuestion()
          FindAnswer()
        }
      });
      NextBtn.addEventListener('click', () => {
        if (questionNO >= 0 && questionNO < data.length - 1) {

          questionNO += 1
          UploadQuestion()
          FindAnswer()
        } else if (questionNO == data.length - 1) {
          ShowScore()
        }
      });
    };

    function ShowScore() {
      let scoreField = document.querySelector('.container')
      scoreField.innerHTML = `Your Score is <b>${Score}</b> out of <b>${data.length}</b>`
      scoreField.style.color = 'white';
      scoreField.style.fontSize = 'x-large';
    }

    UploadQuestion()
    FindAnswer()
    HandleQuestion()

    // console.log(jsonData); // Output the parsed JSON data
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
}




