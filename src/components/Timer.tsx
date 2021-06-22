import { useEffect } from 'react';
import { useState } from 'react';

import { usePlayQuiz } from '../contexts/PlayQuizContext/PlayQuizContext';

export function Timer({ seconds }: { seconds: number }) {
    const { dispatch } = usePlayQuiz();

    const [time, setTime] = useState<number>(seconds);

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    });

    useEffect(() => {
        if (time === 0) {
            dispatch({ type: 'NEXT_STAGE' });
        }
    });

    // if (time === 0) {
    //     dispatch({ type: 'NEXT_STAGE' });
    // }

    return (
        <div>
            <p
                className={`${
                    time <= 5 ? 'text-red-600 animate-bounce' : 'text-gray-800'
                }`}
            >{`${Math.floor(time / 60)} Mins ${time % 60} Seconds`}</p>
        </div>
    );
}
