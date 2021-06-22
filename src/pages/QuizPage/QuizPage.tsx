import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PlayQuizProvider } from '../../contexts/PlayQuizContext';
import { usePlayQuiz } from '../../contexts/PlayQuizContext/PlayQuizContext';
import { useQuizzesData } from '../../contexts/QuizzesContext';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { InstructionsPage } from './InstructionsPage';
import { PlayQuizPage } from './PlayQuizPage';
import { ResultPage } from './ResultPage';

export function QuizPage() {
    const { quizId } = useParams();
    const { quizzes } = useQuizzesData();
    const { state, dispatch } = usePlayQuiz();

    const { quiz } = state;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const quiz = quizzes.find((quiz) => quiz._id === quizId);

        if (quiz) {
            dispatch({ type: 'LOAD_QUIZ', payload: quiz });
            setLoading(false);
        } else {
            //TODO display a quiz not found page
            //~desc using quizzes.length to make sure that the quizzes context provider has fetched data from the BE
            if (quizzes.length !== 0) {
                console.log('quizz not found');
                setLoading(false);
            }
        }
    }, [quizzes]);

    return (
        <div>
            {loading && <LoadingAnimation />}

            {/* {state.quiz ? (
                <button
                    className="bg-green-200"
                    onClick={() => dispatch({ type: 'NEXT_STAGE' })}
                >
                    next stage
                </button>
            ) : null} */}
            <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">
                {quiz?.name}
            </h1>
            {state.stage === 'instructions' && <InstructionsPage />}
            {state.stage === 'play' && <PlayQuizPage />}
            {state.stage === 'result' && <ResultPage />}
        </div>
    );
}
