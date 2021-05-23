import { useNavigate } from 'react-router';
import { getJSDocTags } from 'typescript';
import {
    useQuizzesData,
    QuizzContextType,
} from '../../contexts/QuizzesContext';

import { Quiz } from '../../data/quiz.types';

export function QuizzCard({ quiz }: { quiz: Quiz }) {
    const navigate = useNavigate();

    function getRandomColor() {
        const colors = ['red', 'yellow', 'green', 'indigo', 'pink'];
        const randomIndex = Math.floor(Math.random() * 5);
        return colors[randomIndex];
    }

    return (
        <div
            onClick={() => navigate(`/quizzes/${quiz._id}`)}
            className="rounded-md shadow flex flex-col cursor-pointer"
        >
            <div
                className={`h-20 bg-${getRandomColor()}-200 flex items-center`}
            >
                <h1 className="text-lg font-bold ml-4">{quiz.name}</h1>
            </div>
            <div className=" p-4 flex flex-col flex-grow">
                <h2>{quiz.description}</h2>
                <h2 className="font-light text-sm mt-1">
                    Difficulty: {quiz.difficulty}/10
                </h2>
                <div className="mt-2 flex space-x-2">
                    {quiz.tags?.map((tag) => (
                        <span className="bg-blue-200 px-2 rounded  font-light text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function QuizzesPage() {
    const { quizzes } = useQuizzesData();
    return (
        <>
            <h1>Quizzes Listing Page</h1>
            <div className="grid gap-10 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 items-stretch">
                {quizzes.map((quiz) => (
                    <QuizzCard key={quiz._id} quiz={quiz} />
                ))}
            </div>
        </>
    );
}
