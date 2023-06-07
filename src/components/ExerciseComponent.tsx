import { useEffect, useState } from "react";
import AnswerOptions from "./AnswerOptions";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseNumbers from "./ExerciseNumbers";
import generateExercise from "./generateExercise";

interface Exercise {
  number1: number;
  number2: number;
  answer: number;
  options: number[];
  sign: string;
}

function ExerciseComponent() {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNewExercise();
  }, []);

  const generateNewExercise = () => {
    const newExercise = generateExercise();
    setExercise(newExercise);
  };

  const handleOptionClick = (selectedAnswer: number) => {
    if (selectedAnswer === exercise!.answer) {
      setScore(score + 1);
      generateNewExercise();
    }
  };

  return (
    <div className="rounded-3xl overflow-hidden justify-center items-center bg-gray-50">
      <div className=" inline-block justify-center items-center">
        <ExerciseHeader />
        {exercise && (
          <div>
            <ExerciseNumbers
              number1={exercise.number1}
              number2={exercise.number2}
              sign={exercise.sign}
            />
            <AnswerOptions
              options={exercise.options}
              onOptionClick={handleOptionClick}
            />
          </div>
        )}
        <div className=" flex justify-center text-4xl mt-5">
          <h3>Score: {score}</h3>
        </div>
      </div>
      <br />
      <button
        className="flex border border-black rounded-md shadow-lg justify-center items-center my-5 px-5 py-2 bg-slate-300 mx-auto"
        onClick={() => {
          setScore(0);
          generateNewExercise();
        }}
      >
        משחק חדש
      </button>
    </div>
  );
}

export default ExerciseComponent;
