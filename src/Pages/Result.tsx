import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'
const Result = () => {
    const navigate = useNavigate()
    const quizState = useSelector((state: RootState) => state.quiz)
    useEffect(()=>{
        if(!quizState.completed) {
            navigate('/')
        }
    },[quizState.completed,navigate])
  return (
    <div className=" h-screen w-screen flex flex-col justify-between text-center py-5">
      <header className='text-3xl font-bold'>
        <h1>You scored</h1>
        <h1>{quizState.score}/{quizState.number_of_quiz}</h1>
      </header>
        <main className=' text-center text-zinc-400'>
          {quizState.finishedQuiz.map(quiz=>{
            return <div className="flex gap-x-2 gap-y-3 justify-center font-bold text-2xl">
              <span className=''>{quiz.check == 'correct'?'+':'-'}</span>
              <p className='font-semibold'>{decodeURIComponent(quiz.question)}</p>
            </div>
          })}
        </main>
        <footer>
        <Link to="/"><Button className="font-semibold">PLAY AGAIN?</Button></Link>
        </footer>
    </div>
  )
}

export default Result