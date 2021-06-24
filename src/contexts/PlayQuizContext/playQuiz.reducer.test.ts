import { ActionType, reducer } from './playQuiz.reducer';
import { Question, Quiz } from '../../data/quiz.types';
import { StateType } from './PlayQuizContext';

describe('testing play quiz reducer', () => {
    test('it should set the quiz on SET_QUIZ dispatch', () => {
        //Arrange
        const initialState: StateType = {
            stage: 'instructions',
            quiz: undefined,
        };

        const quiz: Quiz = {
            _id: '1',
            name: 'React Quiz',
            author: 'achal saharan',
            description: 'A very good quiz based on react and JS.',
            instructions: [
                'Each right answer scores 10 Points',
                'Each multiple choice question has only one correct answer',
                'To win the quiz you need to score more than 70%',
                'The quiz will be of 3 minutes',
            ],
            playTime: 3,
            difficulty: 3,
            tags: ['react', 'JS', 'TS'],
            questions: [
                {
                    _id: '1',
                    question: 'Aasman hai neela kyu?',
                    points: 3,
                    negativePoints: 0,
                    image: '',
                    options: [
                        { _id: '1', text: 'kyunki bas hai', isRight: false },
                        {
                            _id: '2',
                            text: 'because of scattering of light',
                            isRight: true,
                        },
                    ],
                },
                {
                    _id: '2',
                    question: 'Kon hai yeh mahan vyakti?',
                    points: 3,
                    image: '',
                    negativePoints: 0,
                    options: [
                        { _id: '1', text: 'LeBron James', isRight: false },
                        {
                            _id: '2',
                            text: 'Stephen Curry',
                            isRight: true,
                        },
                    ],
                },
                {
                    _id: '3',
                    question: 'Paani geela geela kyu?',
                    points: 3,
                    negativePoints: 0,
                    options: [
                        {
                            _id: '1',
                            text: 'yeh toh bhagwan hi jaanta hai',
                            isRight: false,
                        },
                        {
                            _id: '2',
                            text: 'attraction of mulecules',
                            isRight: true,
                        },
                    ],
                },
            ],
        };

        const action: ActionType = { type: 'LOAD_QUIZ', payload: quiz };

        const finalState: StateType = {
            stage: 'instructions',
            quiz: quiz,
        };

        //Act
        const computedState = reducer(initialState, action);

        //Assert
        expect(computedState).toEqual(finalState);
    });

    test('it should set the stage to next stage on NEXT_STAGE disaptch', () => {
        //Arrange
        const intitalState: StateType = {
            stage: 'instructions',
            quiz: {
                _id: '1',
                name: 'React Quiz',
                author: 'achal saharan',
                description: 'A very good quiz based on react and JS.',
                instructions: [
                    'Each right answer scores 10 Points',
                    'Each multiple choice question has only one correct answer',
                    'To win the quiz you need to score more than 70%',
                    'The quiz will be of 3 minutes',
                ],
                playTime: 3,
                difficulty: 3,
                tags: ['react', 'JS', 'TS'],
                questions: [
                    {
                        _id: '1',
                        question: 'Aasman hai neela kyu?',
                        points: 3,
                        negativePoints: 0,
                        image: '',
                        options: [
                            {
                                _id: '1',
                                text: 'kyunki bas hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'because of scattering of light',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        question: 'Kon hai yeh mahan vyakti?',
                        points: 3,
                        image: '',
                        negativePoints: 0,
                        options: [
                            { _id: '1', text: 'LeBron James', isRight: false },
                            {
                                _id: '2',
                                text: 'Stephen Curry',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '3',
                        question: 'Paani geela geela kyu?',
                        points: 3,
                        negativePoints: 0,
                        options: [
                            {
                                _id: '1',
                                text: 'yeh toh bhagwan hi jaanta hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'attraction of mulecules',
                                isRight: true,
                            },
                        ],
                    },
                ],
            },
        };

        const expectedState: StateType = {
            stage: 'play',
            quiz: {
                _id: '1',
                name: 'React Quiz',
                author: 'achal saharan',
                description: 'A very good quiz based on react and JS.',
                instructions: [
                    'Each right answer scores 10 Points',
                    'Each multiple choice question has only one correct answer',
                    'To win the quiz you need to score more than 70%',
                    'The quiz will be of 3 minutes',
                ],
                playTime: 3,
                difficulty: 3,
                tags: ['react', 'JS', 'TS'],
                questions: [
                    {
                        _id: '1',
                        question: 'Aasman hai neela kyu?',
                        points: 3,
                        negativePoints: 0,
                        image: '',
                        options: [
                            {
                                _id: '1',
                                text: 'kyunki bas hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'because of scattering of light',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        question: 'Kon hai yeh mahan vyakti?',
                        points: 3,
                        image: '',
                        negativePoints: 0,
                        options: [
                            { _id: '1', text: 'LeBron James', isRight: false },
                            {
                                _id: '2',
                                text: 'Stephen Curry',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '3',
                        question: 'Paani geela geela kyu?',
                        points: 3,
                        negativePoints: 0,
                        options: [
                            {
                                _id: '1',
                                text: 'yeh toh bhagwan hi jaanta hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'attraction of mulecules',
                                isRight: true,
                            },
                        ],
                    },
                ],
            },
        };

        const action: ActionType = { type: 'NEXT_STAGE' };

        //Act
        const computedState = reducer(intitalState, action);

        //Assert
        expect(computedState).toEqual(expectedState);
    });

    test('it should set option selected option for a question upon SET_OPTION dispatch', () => {
        //Arrange
        const initialState: StateType = {
            stage: 'instructions',
            quiz: {
                _id: '1',
                name: 'React Quiz',
                author: 'achal saharan',
                description: 'A very good quiz based on react and JS.',
                instructions: [
                    'Each right answer scores 10 Points',
                    'Each multiple choice question has only one correct answer',
                    'To win the quiz you need to score more than 70%',
                    'The quiz will be of 3 minutes',
                ],
                playTime: 3,
                difficulty: 3,
                tags: ['react', 'JS', 'TS'],
                questions: [
                    {
                        _id: '1',
                        question: 'Aasman hai neela kyu?',
                        points: 3,
                        negativePoints: 0,
                        image: '',
                        options: [
                            {
                                _id: '1',
                                text: 'kyunki bas hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'because of scattering of light',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        question: 'Kon hai yeh mahan vyakti?',
                        points: 3,
                        image: '',
                        negativePoints: 0,
                        options: [
                            { _id: '1', text: 'LeBron James', isRight: false },
                            {
                                _id: '2',
                                text: 'Stephen Curry',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '3',
                        question: 'Paani geela geela kyu?',
                        points: 3,
                        negativePoints: 0,
                        options: [
                            {
                                _id: '1',
                                text: 'yeh toh bhagwan hi jaanta hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'attraction of mulecules',
                                isRight: true,
                            },
                        ],
                    },
                ],
            },
        };

        const expectedState: StateType = {
            stage: 'instructions',
            quiz: {
                _id: '1',
                name: 'React Quiz',
                author: 'achal saharan',
                description: 'A very good quiz based on react and JS.',
                instructions: [
                    'Each right answer scores 10 Points',
                    'Each multiple choice question has only one correct answer',
                    'To win the quiz you need to score more than 70%',
                    'The quiz will be of 3 minutes',
                ],
                playTime: 3,
                difficulty: 3,
                tags: ['react', 'JS', 'TS'],
                questions: [
                    {
                        _id: '1',
                        question: 'Aasman hai neela kyu?',
                        points: 3,
                        negativePoints: 0,
                        image: '',
                        options: [
                            {
                                _id: '1',
                                text: 'kyunki bas hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'because of scattering of light',
                                isRight: true,
                                isSelected: true,
                            },
                        ],
                    },
                    {
                        _id: '2',
                        question: 'Kon hai yeh mahan vyakti?',
                        points: 3,
                        image: '',
                        negativePoints: 0,
                        options: [
                            { _id: '1', text: 'LeBron James', isRight: false },
                            {
                                _id: '2',
                                text: 'Stephen Curry',
                                isRight: true,
                            },
                        ],
                    },
                    {
                        _id: '3',
                        question: 'Paani geela geela kyu?',
                        points: 3,
                        negativePoints: 0,
                        options: [
                            {
                                _id: '1',
                                text: 'yeh toh bhagwan hi jaanta hai',
                                isRight: false,
                            },
                            {
                                _id: '2',
                                text: 'attraction of mulecules',
                                isRight: true,
                            },
                        ],
                    },
                ],
            },
        };

        const question: Question = {
            _id: '1',
            question: 'Aasman hai neela kyu?',
            points: 3,
            negativePoints: 0,
            image: '',
            options: [
                {
                    _id: '1',
                    text: 'kyunki bas hai',
                    isRight: false,
                },
                {
                    _id: '2',
                    text: 'because of scattering of light',
                    isRight: true,
                    isSelected: true,
                },
            ],
        };

        const action: ActionType = { type: 'SET_OPTION', payload: question };

        //Arrange
        const computedState = reducer(initialState, action);

        //Assert
        expect(computedState).toEqual(expectedState);
    });
});
