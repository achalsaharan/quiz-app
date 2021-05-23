import './App.css';

import { Header } from './components/Header';
import { QuizzesPage } from './pages/QuizzesPage';

import { Routes, Route, Navigate, Router } from 'react-router-dom';
import { QuizPage } from './pages/QuizPage';
import { PlayQuizProvider } from './contexts/PlayQuizContext';

function App() {
    return (
        <div className="App">
            <Header />

            {/* acts as an outer container for pages */}
            <div
                className="mx-auto mt-20 px-2 text-gray-700"
                style={{ maxWidth: '1500px' }}
            >
                <Routes>
                    <Route path="/" element={<QuizzesPage />} />

                    <Route path="/quizzes/:quizId" element={<QuizPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
