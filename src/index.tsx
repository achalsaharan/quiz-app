import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import { QuizzesDataProvider } from './contexts/QuizzesContext';
import { PlayQuizProvider } from './contexts/PlayQuizContext/PlayQuizContext';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <QuizzesDataProvider>
                <PlayQuizProvider>
                    <App />
                </PlayQuizProvider>
            </QuizzesDataProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
