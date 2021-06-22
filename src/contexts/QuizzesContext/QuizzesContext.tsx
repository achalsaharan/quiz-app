import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Quiz } from '../../data/quiz.types';
import { quizzes } from '../../data/quiz';

export type QuizzContextType = {
    quizzes: Quiz[];
};

const QuizzesContext = createContext<QuizzContextType>({} as QuizzContextType);

export function QuizzesDataProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<QuizzContextType>({
        quizzes: [],
    });

    useEffect(() => {
        setTimeout(() => {
            setState({ ...state, quizzes });
        }, 1000);
    }, []);

    return (
        <QuizzesContext.Provider value={state}>
            {children}
        </QuizzesContext.Provider>
    );
}

export function useQuizzesData() {
    return useContext(QuizzesContext);
}
