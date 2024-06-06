import Button from "../Components/Button"
import { useEffect, } from "react"
import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { checkAnswer,setQuiz } from '../features/quiz/quizSlice'
import { useGetAllQuizQuery } from "../features/quiz/quizApi"
import { apiQuiz } from "../utils/types"
import { useNavigate } from "react-router-dom"
import Loader from "../Components/loader"
const Quiz = () => {
    const navigate = useNavigate();
    const quizState = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    
    // check if the user has set level
    useEffect(()=>{
        if(!localStorage.getItem('Trivia_level')) {
            navigate('/')
        }
    },[navigate])

    
    const { data, isLoading} = useGetAllQuizQuery(window.localStorage.getItem('Trivia_level')?.toLocaleLowerCase())
    //navigate to the result page when quiz gets completed
    useEffect(()=>{
        
        if(quizState.completed) {
            navigate('/result')  
        } 
    },[quizState.completed,navigate])

    useEffect(()=>{
        const apiQuiz = data?.results.map((quiz:apiQuiz) => {
                        return {question: quiz.question, correct_answer: quiz['correct_answer'],category:quiz.category, check: null}
                     });

       if(apiQuiz) dispatch(setQuiz(apiQuiz))
   
        
        },[data,dispatch]);

    const clickHandler = (answer:string) => {

        dispatch(checkAnswer(answer))
        
    }
  return (
    <div className="W-screen h-screen py-8 flex flex-col items-center justify-between">
        <header className="text-2xl font-bold">
            <h1>{quizState.currentQuiz.category && decodeURIComponent(quizState.currentQuiz.category)}</h1>
        </header>

        <main className="w-[80%] h-[50%] md:w-2/4 ">
            <div className="text-center  w-full h-full border-2 text-2xl font-semibold px-3 flex justify-center items-center border-black">
               
               {isLoading?<Loader /> :decodeURIComponent(quizState.currentQuiz.question)}
               
            </div>
            <div className="pt-5 flex justify-between">
                <Button onClick={() => clickHandler("true")}>True</Button>
                <Button onClick={() => clickHandler("false")}>False</Button>

            </div>
            
        </main>
        
        <footer className="font-semibold text-xl">
            {quizState.currentQuizIndex+1}/{quizState.number_of_quiz}
            <span></span>
        </footer>
    </div>
  )
}

export default Quiz