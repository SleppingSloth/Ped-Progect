import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ corectStep, totalStep, setStep }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {corectStep} ответа из {totalStep}
      </h2>
      <button onClick={() => setStep(0)}>Попробовать снова</button>
    </div>
  );
}

function Game({ question, onStepClick, step, totalStep }) {
  const { title, variants } = question;

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${(100 / totalStep) * step}%` }}
          className="progress__inner"
        ></div>
      </div>

      <h1>{title}</h1>
      <ul>
        {variants.map((item, index) => {
          return (
            <li key={item} onClick={() => onStepClick(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [corectStep, setCorectStep] = useState(0);

  const onStepClick = (index) => {
    setStep(step + 1);

    console.log();
    if (questions[step].correct == index) {
      setCorectStep(step + 1);
    }
  };

  return (
    <div className="App">
      {step === questions.length ? (
        <Result
          corectStep={corectStep}
          totalStep={questions.length}
          setStep={setStep}
        />
      ) : (
        <Game
          totalStep={questions.length}
          question={questions[step]}
          onStepClick={onStepClick}
          setCorectStep={setCorectStep}
          step={step}
        />
      )}
    </div>
  );
}

export default App;
