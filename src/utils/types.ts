export interface btnProps {
    children: string,
    className?: string ,
    onClick?: (e?:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void 
}

export type routeError = {
    status?: number;
    statusText?: string;
    message?: string;
  };

export interface apiQuiz  {
    question:string,
     correct_answer: string,
     category: string,
    }
export interface quiz extends apiQuiz {
    check: 'correct' | 'wrong' | null
}
export interface quizState {
    allQuiz: quiz[],
    currentQuiz: quiz,
    finishedQuiz: quiz[],
    currentQuizIndex: number,
    number_of_quiz: number,
    completed: boolean,
    score: number,
  }
