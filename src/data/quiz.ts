import { Quiz } from './quiz.types';

import curry1 from './assets/curry1.jpeg';
import sky from './assets/sky.jpeg';

export const quiz1: Quiz = {
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
            image: sky,
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
            image: curry1,
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

export const quiz2: Quiz = {
    _id: '2',
    name: 'General Quiz',
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
    tags: ['react'],
    questions: [
        {
            _id: '1',
            question: 'Aasman hai neela kyu?',
            points: 3,
            negativePoints: 0,
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
            question: 'Paani geela geela kyun?',
            points: 3,
            negativePoints: 0,
            options: [
                { _id: '1', text: 'kyunki bas hai', isRight: false },
                {
                    _id: '2',
                    text: 'because of scattering of light',
                    isRight: true,
                },
            ],
        },
    ],
};

export const quiz3: Quiz = {
    _id: '3',
    name: 'Basketball Quiz',
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
    tags: ['react'],
    questions: [
        {
            _id: '1',
            question: 'Aasman hai neela kyu?',
            points: 3,
            negativePoints: 0,
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
            question: 'Paani geela geela kyun?',
            points: 3,
            negativePoints: 0,
            options: [
                { _id: '1', text: 'kyunki bas hai', isRight: false },
                {
                    _id: '2',
                    text: 'because of scattering of light',
                    isRight: true,
                },
            ],
        },
    ],
};

export const quizzes = [quiz1, quiz2, quiz3];
