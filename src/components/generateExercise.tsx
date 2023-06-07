interface Exercise {
  number1: number;
  number2: number;
  answer: number;
  options: number[];
  sign: string;
}

function generateExercise(): Exercise {
  const number1 = Math.floor(Math.random() * 10) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;
  const random = Math.random();
  const sign = random < 0.5 ? "-" : "+";
  const answer = sign == "+" ? number1 + number2 : number1 - number2;

  // Generate four answer options (including the correct answer)
  const options: number[] = new Array(4);
  let i = 0;

  while (i < options.length) {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number
    if (!options.includes(randomNumber)) {
      options[i] = randomNumber; // Set random number at the current index
      i++;
    }
  }

  console.log(options[0], options[1], options[2], options[3]);
  // Replace one random option with the correct answer
  const randomIndex = Math.floor(Math.random() * 4);
  options.includes(answer) ? null : (options[randomIndex] = answer);

  return {
    number1,
    number2,
    answer,
    options,
    sign,
  };
}
export default generateExercise;
