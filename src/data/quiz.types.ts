export type Option = {
    _id: string;
    text: string;
    isRight: boolean;
    isSelected?: boolean;
};

export type Question = {
    _id: string;
    question: string;
    points: number;
    options: Option[];
    image?: string;
    negativePoints?: number;
};

export type Quiz = {
    _id: string;
    name: string;
    author: string;
    description: string;
    instructions: string[];
    playTime: number;
    questions: Question[];
    difficulty: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    tags?: string[];
};
