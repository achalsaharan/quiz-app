import { useQuizzesData } from '../../contexts/QuizzesContext/QuizzesContext';

import { QuizzCard } from './QuizzCard';

export function QuizzesListingPage() {
    const { quizzes } = useQuizzesData();
    return (
        <>
            <h1 className="mb-4 font-semibold">Start Quizzing</h1>
            <div className="grid gap-10 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 items-stretch">
                {quizzes.map((quiz) => (
                    <QuizzCard key={quiz._id} quiz={quiz} />
                ))}
            </div>
        </>
    );
}
