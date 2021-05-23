import { usePlayQuiz } from '../../contexts/PlayQuizContext/PlayQuizContext';

export function InstructionsPage() {
    const {
        state: { quiz },
        dispatch,
    } = usePlayQuiz();

    //to type narrow that quiz will be there because I know that I'll only render
    //this component when the quiz is !undefined
    if (!quiz) {
        return <p>quiz not here</p>;
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col border border-gray-400 rounded p-4 shadow">
                <h1 className="text-lg font-semibold text-center mb-2 text-gray-700">
                    Instructions
                </h1>
                <div>
                    {quiz.instructions.map((instruction, idx) => (
                        <p key={idx}>
                            {(idx + 1).toString() + '.'} {instruction}
                        </p>
                    ))}
                </div>
                <div className="pt-3 flex">
                    <button
                        onClick={() => dispatch({ type: 'NEXT_STAGE' })}
                        className="bg-blue-600 text-gray-100 px-3 py-1 rounded mx-auto"
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}
