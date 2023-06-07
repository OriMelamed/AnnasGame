interface ExerciseNumbersProps {
  number1: number;
  number2: number;
  sign: string;
}

function ExerciseNumbers({ number1, number2, sign }: ExerciseNumbersProps) {
  return (
    <div className=" flex justify-center text-4xl">
      <h2>
        {number1} {sign} {number2} = ?
      </h2>
    </div>
  );
}

export default ExerciseNumbers;
