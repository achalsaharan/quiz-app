import { createContext, ReactNode, useContext, useReducer } from 'react';
import { quizzes } from '../../data/quiz';

import { Quiz, Question, Option } from '../../data/quiz.types';
import { ActionType, reducer } from './playQuiz.reducer';

export type StateType = {
    stage: 'instructions' | 'play' | 'result';
    quiz: Quiz | undefined;
    currentQuestion: number;
};

export type PlayQuizContextType = {
    state: StateType;
    dispatch: (action: ActionType) => void;
};

export const PlayQuizContext = createContext<PlayQuizContextType>(
    {} as PlayQuizContextType
);

export const initalState: StateType = {
    stage: 'instructions',
    quiz: undefined,
    currentQuestion: 1,
};

export function PlayQuizProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <PlayQuizContext.Provider value={{ state, dispatch }}>
            {children}
        </PlayQuizContext.Provider>
    );
}

export function usePlayQuiz() {
    return useContext(PlayQuizContext);
}
