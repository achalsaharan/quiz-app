import { usePlayQuiz } from '../../contexts/PlayQuizContext/PlayQuizContext';
import { Option, Question } from '../../data/quiz.types';
import { Link, useNavigate } from 'react-router-dom';

function QuestionResultCard({
    question,
    questionNo,
}: {
    question: Question;
    questionNo: number;
}) {
    const { dispatch } = usePlayQuiz();

    function getOptionColor(option: Option) {
        if (option.isRight) {
            return 'bg-green-200';
        } else if (option.isSelected) {
            return 'bg-blue-400';
        } else {
            return 'bg-blue-200';
        }
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
                        className={`${getOptionColor(
                            option
                        )} my-2 p-2 rounded-lg  cursor-pointer text-left`}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export function ResultPage() {
    const {
        state: { quiz },
        dispatch,
    } = usePlayQuiz();

    const navigate = useNavigate();

    function questionPoints(question: Question) {
        let questionScore = 0;
        question.options.forEach((option) => {
            if (option.isSelected) {
                questionScore =
                    questionScore +
                    (option.isSelected === option.isRight
                        ? question.points
                        : question.negativePoints
                        ? -question.negativePoints
                        : 0);
            }
        });

        return questionScore;
    }

    function getScore() {
        let score = quiz?.questions.reduce((acc, currentVal) => {
            return acc + questionPoints(currentVal);
        }, 0);

        return score;
    }

    function tryOtherQuizzes() {
        dispatch({ type: 'RESET_STAGE' });
        navigate('/');
    }

    if (quiz === undefined) {
        return <h1>quiz not defined</h1>;
    }

    return (
        <div className="flex flex-col max-w-lg mx-auto border-1">
            <h2 className="font-semibold">You Scored {getScore()} Points!</h2>
            <Link to="/">
                <a className="italic underline text-blue-600">
                    Try other quizzes
                </a>
            </Link>
            {quiz.questions.map((question, idx) => (
                <QuestionResultCard question={question} questionNo={idx} />
            ))}

            <a
                className="italic underline text-blue-600"
                onClick={tryOtherQuizzes}
            >
                Try other quizzes
            </a>
        </div>
    );
}
