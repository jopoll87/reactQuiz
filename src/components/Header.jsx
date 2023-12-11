import React from 'react';
import QuizLogo from '../assets/quiz-logo.png';

const Header = () => {
  return (
    <header>
      <img src={QuizLogo} alt='react quiz' />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
