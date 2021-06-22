import { usePlayQuiz } from '../../contexts/PlayQuizContext/PlayQuizContext';
import { Option, Question } from '../../data/quiz.types';
import { Timer } from '../../components/Timer';

function QuestionCard({
    question,
    questionNo,
}: {
    question: Question;
    questionNo: number;
}) {
    const { dispatch } = usePlayQuiz();

    function selectOption(option: Option) {
        const newQuestion: Question = {
            ...question,
            options: question.options.map((opt) => {
                return opt._id === option._id
                    ? { ...opt, isSelected: true }
                    : { ...opt, isSelected: false };
            }),
        };

        dispatch({ type: 'SET_OPTION', payload: newQuestion });
    }

    function clearSelection() {
        const newQuestion: Question = {
            ...question,
            options: question.options.map((opt) => ({
                ...opt,
                isSelected: false,
            })),
        };

        dispatch({ type: 'SET_OPTION', payload: newQuestion });
    }

    return (
        <div className="border rounded my-4 p-4 ">
            <div>
                <h3 className="font-light text-lg">
                    Question {questionNo + 1}
                </h3>
                {question.image ? (
                    <img className="image-responsive" src={question.image} />
                ) : null}
                <h1 className="font-bold text-xl ">{question.question}</h1>
            </div>
            <div className="flex flex-col">
                {question.options.map((option) => (
                    <button
                        key={option._id}
                        onClick={() => selectOption(option)}
                        className={`${
                            option.isSelected
                                ? 'bg-blue-600 text-gray-50'
                                : 'bg-blue-200 hover:bg-blue-300'
                        } my-2 p-2 rounded-lg  cursor-pointer text-left`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
            <button
                onClick={clearSelection}
                className="bg-blue-200 px-2 rounded mt-3 hover:bg-blue-300 font-light"
            >
                Clear Selection
            </button>
        </div>
    );
}

export function PlayQuizPage() {
    const {
        state: { quiz },
        dispatch,
    } = usePlayQuiz();

    if (quiz === undefined) {
        return <h1>quiz not defined</h1>;
    }

    return (
        <div className="flex flex-col max-w-lg mx-auto">
            <Timer seconds={1} />
            {quiz.questions.map((question, idx) => (
                <QuestionCard key={idx} question={question} questionNo={idx} />
            ))}
            <div className="flex justify-center">
                <button
                    onClick={() => dispatch({ type: 'NEXT_STAGE' })}
                    className="bg-blue-600 text-gray-100 px-3 py-1 mt-5 mb-10 rounded 10 w-full"
                >
                    submit
                </button>
            </div>
        </div>
    );
}
