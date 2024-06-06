import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {  useDispatch } from 'react-redux'
import {playAgain } from '../features/quiz/quizSlice'
import Button from '../Components/Button'
const Result = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const quizState = useSelector((state: RootState) => state.quiz)
    useEffect(()=>{
        if(!quizState.completed) {
            navigate('/')
        }
    },[quizState.completed,navigate])
  return (
    <div className=" h-screen w-screen flex flex-col justify-between text-center py-8 overflow-y-scroll">
      <header className='text-3xl font-bold'>
        <h1>You scored</h1>
        <h1>{quizState.score}/{quizState.number_of_quiz}</h1>
      </header>
        <main className=' text-center text-zinc-400 px-10 py-8'>
          {quizState.finishedQuiz.map((quiz,index)=>{
            return <div key={index} className="flex py-2  gap-x-2 mb-3 justify-center font-bold text-xl md:text-2xl  border-2 border-black/20">
              <span className=''>{quiz.check == 'correct'?'+':'-'}</span>
              <p className='font-semibold'>{decodeURIComponent(quiz.question)}</p>
            </div>
          })}
        </main>
        <footer>
        <Button className="font-semibold" onClick={()=>{dispatch(playAgain()); navigate('/')}}>PLAY AGAIN?</Button>
        </footer>
    </div>
  )
}

export default Result