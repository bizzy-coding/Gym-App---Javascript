var exerciseBtn = document.querySelector(".new-exercise");
var exerciseWrap = document.querySelector(".exercise-wrap");

let count = 0;

exerciseBtn.addEventListener("click", function () {
  newRow();
  newExercise();
  newSet();
  // setCount();
});

function newRow() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("newdiv");
  newDiv.innerText = "pick an exercise";
  exerciseWrap.appendChild(newDiv);
}

function newExercise() {
  const exercises = [
    { title: "squat", id: 1 },
    { title: "benchpress", id: 2 },
    { title: "deadlift", id: 3 }
  ];

  var exerciseDropDown = document.createElement("select");
  exerciseDropDown.classList.add("select-exercise");
  exercises.map(function (exercise) {
    var option = document.createElement("option");
    option.text = exercise.title;
    option.value = exercise.id;
    exerciseDropDown.appendChild(option);
    exerciseWrap.appendChild(exerciseDropDown);
    const selectExercise = document.querySelector('.select-exercise');

  selectExercise.addEventListener('change', function() {
    const selectedValue = selectExercise.value;
    console.log('Selected exercise: ', selectedValue);
    // You can add your own code here to do something with the selected value
  });
    
  });
}

function newSet() {
  var newSet = document.createElement("div");
  newSet.classList.add("newset");
  newSet.innerHTML = `
  <input type="text" id="calculator-output">
<input type="number" id="reps-input" name="reps" placeholder="Reps" />
<input type="number" id="weight-input" name="weight" placeholder="Weight" />
`;
  document.getElementById("calculator-output");
  exerciseWrap.appendChild(newSet);

  const weightInput = document.getElementById("weight-input");
  const repsInput = document.getElementById("reps-input");
  const output = document.getElementById("calculator-output");

  function calculate() {
    const weight = weightInput.value;
    const reps = repsInput.value;
    const result = weight * reps;
    output.value = result;
  }

  weightInput.addEventListener("input", calculate);
  repsInput.addEventListener("input", calculate);

  function setCount() {
    count++;
    const newElement = document.createElement("div");
    newElement.innerText = count;
    newSet.appendChild(newElement);
  }

  setCount();
}
