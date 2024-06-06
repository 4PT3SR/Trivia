import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { quizState,quiz } from '../../utils/types'



const initialState: quizState = {
  allQuiz: [],
  currentQuiz:{question:'',correct_answer:'',category:'',check: null},
  finishedQuiz: [],
  currentQuizIndex: 0,
  number_of_quiz: 0,
  completed: false,
  score:0

}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    
    checkAnswer: (state, action:PayloadAction<string>) => {
      
      const _quiz = state.currentQuiz;
      if(!state.completed){
        // console.log(_quiz.correct_answer)
        if(_quiz.correct_answer.toLowerCase() === action.payload.toLowerCase()) {
          _quiz.check = 'correct'
          state.score += 1
        } else {
          _quiz.check = 'wrong';
        }
        state.finishedQuiz.push(_quiz);
        
        if(!(state.currentQuizIndex < state.number_of_quiz-1)) {
         state.completed = true;
         return
        }
        state.currentQuizIndex++
        state.currentQuiz = state.allQuiz[state.currentQuizIndex]
      }
     
      
     

    },
    setQuiz: (state, action: PayloadAction<quiz[]>) => {
     state.allQuiz = action.payload

     state.number_of_quiz = action.payload?.length
     state.currentQuiz = state.allQuiz[state.currentQuizIndex]
    },
    playAgain:(state) => {
      state.completed = !state.completed;
      state.finishedQuiz = []
      state.currentQuizIndex = 0
      state.number_of_quiz = 0
      state.score = 0
      state.allQuiz = []

      console.log(state)
    }
  },
})

// Action creators are generated for each case reducer function
export const { checkAnswer,setQuiz, playAgain  } = quizSlice.actions

export default quizSlice.reducer