////////// Question 1
const x = 5,
  y = 7;
let a, b, c;
a = x ** 2 + y ** 2;
b = a ** 2 + x * y;
c = (a + b) ** 2;

const solve1 = () => {
  document.getElementById("result1").innerHTML = `a = ${a} <br> b = ${b} <br> c = ${c}`;
};

////////// Question 2

let num1 = document.getElementById("num1").value;
if (num1 !== "") {
  if (num1 % 2 == 0) {
    document.getElementById("result2").innerHTML = "Even";
  } else {
    document.getElementById("result2").innerHTML = "Odd";
  }
}

let num1Element = document.getElementById("num1");
const solve2 = () => {
  let num1 = document.getElementById("num1").value;
  console.log(num1);
  if (num1 !== "") {
    if (num1 % 2 == 0) {
      document.getElementById("result2").innerHTML = "Even";
    } else {
      document.getElementById("result2").innerHTML = "Odd";
    }
    const inputNum = document.getElementById("num1");
    inputNum.style.border = "1px solid #ccc";
  } else {
    const inputNum = document.getElementById("num1");
    inputNum.style.border = "2px solid red";
    document.getElementById("err-msg").innerHTML = "Please enter a number";
  }
};
num1Element.onchange = function () {
  document.getElementById("err-msg").innerHTML = "";
};
/////////// Question 3
let num2Element = document.getElementById("num2");
let num3Element = document.getElementById("num3");
const solve3 = () => {
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  console.log(num2, num3);
  if (Number(num2) && Number(num3)) {
    if (Number(num2) === 1 || Number(num3) === 3) {
      document.getElementById("result3").innerHTML =
        "Y = x<sup>2</sup> + x - 3";
    } else if (num2 >= 2 && num3 >= 4) {
      document.getElementById("result3").innerHTML =
        "Y = x<sup>2</sup> + 3x + 5";
    } else {
      document.getElementById("result3").innerHTML =
        "Y = x<sup>3</sup> + 2x<sup>2</sup> + x";
    }
  }
  if (num2 === "") {
    num2Element.style.border = "1px solid red";
  }

  if (num3 === "") {
    num3Element.style.border = "1px solid red";
  }
};

// Detect a value change to handle validation
num2Element.onchange = function () {
  let num2 = document.getElementById("num2").value;
  console.log("num2", num2);
  if (num2 === "") {
    num2Element.style.border = "1px solid red";
  } else {
    num2Element.style.border = "1px solid #ccc";
  }
};
// Detect b value change to handle validation
num3Element.onchange = function () {
  let num3 = document.getElementById("num3").value;
  console.log("num3", num3);
  if (num3 === "") {
    num3Element.style.border = "1px solid red";
  } else {
    num3Element.style.border = "1px solid #ccc";
  }
};

///////////// Question 4
let k = 1;
let z;

const solve4 = () => {
  if (k === 1) {
    z = 2;
    document.getElementById("result4").innerHTML = z;
  } else {
    z = 3;
    document.getElementById("result4").innerHTML = z;
  }
};

const solve5 = () => {
  k = 2;
  if (k === 2) {
    z = 2 * k ** 3 - 3;
    document.getElementById("result5").innerHTML = z;
  }
};
const solve6 = () => {
  k = 3;
  if (k === 3) {
    z = -2;
    document.getElementById("result6").innerHTML = z;
  }
};
function getRandomInteger() {
  // Randomly decide whether to generate a positive or negative integer
  const isPositive = Math.random() < 0.5;

  // Generate a random integer either greater than 3 or less than -1
  let value;
  if (isPositive) {
    // Generate a positive integer greater than 3, e.g., between 4 and 10
    value = Math.floor(Math.random() * 97) + 4;
  } else {
    //Math.random() * 100 generates a number between 0 and 99.999...
    value = -1 * Math.floor(Math.random() * 100);
  }

  return value;
}
const generateRandom = () => {
  let random = getRandomInteger();
  k = random;
  document.getElementById("random").innerHTML = `k = ${k}`;
};

const solve7 = () => {
  if (k < 1 || k > 3) {
    z = k;
    document.getElementById("result7").innerHTML = z;
  }
};
////////////// Question 5
let a_q5Element = document.getElementById("a_q5");
let b_q5Element = document.getElementById("b_q5");
const solve8 = () => {
  let a_q5 = document.getElementById("a_q5").value;
  let b_q5 = document.getElementById("b_q5").value;
  console.log(a_q5, b_q5);
  if (Number(a_q5) && Number(b_q5)) {
    if (Number(a_q5) < Number(b_q5)) {
      document.getElementById("result8").innerHTML =
        `Y = A + B, Y = ${Number(a_q5) + Number(b_q5)}`;
    } else if (Number(a_q5) > Number(b_q5) ) {
      document.getElementById("result8").innerHTML =
        `Y = A * B, Y = ${a_q5 * b_q5}`;
    } else {
        document.getElementById("result8").innerHTML =
        `Y = A = B`;
    }
  }
  if (a_q5 === "") {
    a_q5Element.style.border = "1px solid red";
  }

  if (b_q5 === "") {
    b_q5Element.style.border = "1px solid red";
  }
};

// Detect a value change to handle validation
a_q5Element.onchange = function () {
  let a_q5 = document.getElementById("a_q5").value;
  console.log("num2", num2);
  if (a_q5 === "") {
    a_q5Element.style.border = "1px solid red";
  } else {
    a_q5Element.style.border = "1px solid #ccc";
  }
};
// Detect b value change to handle validation
b_q5Element.onchange = function () {
  let b_q5 = document.getElementById("b_q5").value;
  if (b_q5 === "") {
    b_q5Element.style.border = "1px solid red";
  } else {
    b_q5Element.style.border = "1px solid #ccc";
  }
};

//////////////// Question 6
let userNameElemnt = document.getElementById("userName");
let gradeElement = document.getElementById("grade");
const solve9 = () => {
  let userName = document.getElementById("userName").value;
  let grade = document.getElementById("grade").value;
  console.log(userName, grade);
  if (userName && grade) {
    if (Number(grade) >= 85 && Number(grade) <= 100) {
      document.getElementById("result9").innerHTML = `welcome ${userName} , your grade is <b>Excellent</b>`;
    } else if (grade >= 75 && grade < 85) {
        document.getElementById("result9").innerHTML = `welcome ${userName} , your grade is <b>Very Good</b> `;
    } else if(grade >= 65 && grade < 75){
        document.getElementById("result9").innerHTML = `welcome ${userName} , your grade is <b>Good</b> `;
    } else if(grade >= 50 && grade < 65){
        document.getElementById("result9").innerHTML = `welcome ${userName} , your grade is <b>Satisfactory</b> `;
    } else if(grade < 50){
        document.getElementById("result9").innerHTML = `Sorry ${userName} , your grade is <b>Fail</b> `;
    } else if(grade > 100){
        document.getElementById("result9").innerHTML = `Degree is between 0 and 100, please enter valid degree.`;
    }
  }
  if (userName === "") {
    userNameElemnt.style.border = "1px solid red";
  }

  if (grade === "") {
    gradeElement.style.border = "1px solid red";
  }
};

// Detect a value change to handle validation
userNameElemnt.onchange = function () {
  let userName = document.getElementById("userName").value;
  console.log("userName", userName);
  if (userName === "") {
    userNameElemnt.style.border = "1px solid red";
  } else {
    userNameElemnt.style.border = "1px solid #ccc";
  }
};
// Detect b value change to handle validation
gradeElement.onchange = function () {
  let grade = document.getElementById("grade").value;
  console.log("grade", grade);
  if (grade === "") {
    gradeElement.style.border = "1px solid red";
  } else {
    gradeElement.style.border = "1px solid #ccc";
  }
};