interface AnswerOptionsProps {
  options: number[];
  onOptionClick: (selectedAnswer: number) => void;
}

function AnswerOptions({ options, onOptionClick }: AnswerOptionsProps) {
  return (
    <div className=" flex justify-center text-4xl mt-5">
      {options.map((option) => (
        <button
          className=" flex p-3 mx-2 border-2 border-gray-300 hover:border-gray-500 hover"
          key={option}
          onClick={() => onOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default AnswerOptions;
