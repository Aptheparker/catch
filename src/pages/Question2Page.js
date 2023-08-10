import { useState, useContext, useEffect } from 'react';
//css
import classes from './QuestionPage.module.css';

// components
import QuestionContainer from '../components/layout/QuestionContainer';
import ImageContainer from '../components/layout/ImageContainer';
import ThrowFish from '../components/dynamic/ThrowFish';
//data
import questionData from '../data/data.json';

//context
import Level from '../data/level';

const Question2Page = () => {
  const [isCorrect, setIsCorrect] = useState('');
  const [openAnswerpage, setOpenAnswerPage] = useState(false);
  const curExpContext = useContext(Level);
  const [isQuestionStart, setIsQuestionStart] = useState(false);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    if (questionData.questions[1].answer === userAnswer) {
      setIsCorrect('true');
      setCurExpIncrease();
    } else {
      setIsCorrect('false');
    }
    setIsQuestionStart(true);
  };

  const pageHandler = () => {
    setOpenAnswerPage(true);
  };

  return (
    <div className={classes['page']}>
      <ImageContainer
        isStart={isQuestionStart}
        Citizen={questionData.questions[1].characterImage}
      />
      <QuestionContainer
        Number={questionData.questions[1].id}
        Problem={questionData.questions[1].problem}
        Explain={questionData.questions[1].explanation}
        Image1={questionData.questions[1].image1}
        Image2={questionData.questions[1].image2}
        answer={questionData.questions[1].answer}
        checkWrong={isCorrect}
        checkFinished={openAnswerpage}
        onGetAnswer={answerHandler}
      />
      {isCorrect !== '' && (
        <ThrowFish checkWrong={isCorrect} onChangePage={pageHandler} />
      )}

      {openAnswerpage && <div className={classes['backdrop']} />}
    </div>
  );
};

export default Question2Page;
