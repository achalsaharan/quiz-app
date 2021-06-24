import { Question, Quiz } from '../../data/quiz.types';
import { StateType } from './PlayQuizContext';

export type ActionType =
    | { type: 'NEXT_STAGE' }
    | { type: 'LOAD_QUIZ'; payload: Quiz }
    | { type: 'RESET_STAGE' }
    | { type: 'SET_OPTION'; payload: Question };

export function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
        case 'LOAD_QUIZ': {
            return {
                ...state,
                stage: 'instructions',
                quiz: action.payload,
            };
        }

        case 'NEXT_STAGE': {
            if (state.stage === 'instructions') {
                return { ...state, stage: 'play' };
            } else if (state.stage === 'play') {
                return { ...state, stage: 'result' };
            }
            return { ...state };
        }

        case 'RESET_STAGE': {
            return {
                ...state,
                stage: 'instructions',
            };
        }

        //action.payload will contain the whole question object
        case 'SET_OPTION': {
            //type narrowing to make sure that quiz is present
            if (!state.quiz) {
                console.log('quiz is unavaliable');
                return { ...state };
            }
            return {
                ...state,
                quiz: {
                    ...state.quiz,
                    questions: state.quiz.questions.map((question) => {
                        return question._id === action.payload._id
                            ? action.payload
                            : question;
                    }),
                },
            };
        }

        default: {
            return { ...state };
        }
    }
}
