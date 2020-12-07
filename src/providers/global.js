import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [totalNumberQuestions, setTotalNumberQuestions] = useState(10);
  let duration = 5;
  return (
    <GlobalContext.Provider
      value={{
        score,
        setScore,
        totalNumberQuestions,
        setTotalNumberQuestions,
        duration,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
